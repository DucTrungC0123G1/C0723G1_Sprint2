package com.example.dried_seafood.controller.auth;

import com.example.dried_seafood.dto.auth.AccountDTO;
import com.example.dried_seafood.dto.auth.JwtResponse;
import com.example.dried_seafood.dto.auth.LoginDTO;
import com.example.dried_seafood.model.auth.Accounts;
import com.example.dried_seafood.model.auth.MyUserDetail;
import com.example.dried_seafood.model.auth.Role;
import com.example.dried_seafood.security.jwt.JwtUtils;
import com.example.dried_seafood.service.auth.IAccountService;
import com.example.dried_seafood.service.impl.auth.AccountService;
import com.example.dried_seafood.service.impl.auth.MyUserDetailService;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RequestMapping("/api")
@RestController
@CrossOrigin("*")
public class AuthController {
    @Autowired
    private MyUserDetailService myUserDetailService;

    @Autowired
    private JwtUtils jwtProvider;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private IAccountService accountService;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginDTO loginDTO, BindingResult bindingResult) {
        Map<String, String> errors = new HashMap<>();
        loginDTO.validate(loginDTO, bindingResult);
        if (bindingResult.hasErrors()) {
            for (FieldError error : bindingResult.getFieldErrors()) {
                errors.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<>("Thông tin đăng nhập không chính xác.", HttpStatus.UNAUTHORIZED);
        }
        try {
            myUserDetailService.loadUserByUsername(loginDTO.getUserName());
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginDTO.getUserName(), loginDTO.getPassword()));
            SecurityContextHolder.getContext().setAuthentication(authentication);
            MyUserDetail myUserDetail = (MyUserDetail) authentication.getPrincipal();

            // Tạo đối tượng để trả về
            JwtResponse jwtResponse = new JwtResponse();
            BeanUtils.copyProperties(myUserDetail.getAccounts(), jwtResponse);
            // Tạo Token cho đối tượng trả về;
            String jwt = jwtProvider.createToken((MyUserDetail) authentication.getPrincipal());
            jwtResponse.setAccessToken(jwt);

//             Lấy ra name Role trả về
//            List<String> roles = myUserDetail.getAuthorities().stream()
//                    .map(item -> item.getAuthority())
//                    .collect(Collectors.toList());
//            jwtResponse.setRoles(roles);
            return new ResponseEntity<>(jwtResponse, HttpStatus.OK);
        } catch (UsernameNotFoundException e) {
            return new ResponseEntity<>("Thông tin đăng nhập không chính xác.", HttpStatus.UNAUTHORIZED);
        } catch (BadCredentialsException e) {
            return new ResponseEntity<>("Thông tin đăng nhập không chính xác.", HttpStatus.UNAUTHORIZED);
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody AccountDTO accountDTO, BindingResult bindingResult) {
        Map<String, String> errors = new HashMap<>();
        accountDTO.setUserName(accountDTO.getUserName().trim());
        new AccountDTO().validate(accountDTO, bindingResult);
        if (accountService.findByUser(accountDTO.getUserName()).isPresent()) {
            errors.put("userName", "Tài Khoản Đã Tồn Tại");
        }
        if (bindingResult.hasErrors()) {
            for (FieldError err :
                    bindingResult.getFieldErrors()) {
                errors.put(err.getField(), err.getDefaultMessage());
            }
        }
        if (errors.size() == 0) {
            Accounts accounts = new Accounts();
            BeanUtils.copyProperties(accountDTO, accounts);
            accounts.setPassword(passwordEncoder.encode(accounts.getPassword()));
            //add account
            Accounts accountNew = accountService.addAccount(accounts);
            if (accountNew == null) {
                return new ResponseEntity<>("Thêm tài khoản thất bại.", HttpStatus.BAD_REQUEST);
            }
            //        Thêm account_role
            Role role = new Role();
            BeanUtils.copyProperties(accountDTO, role);
            accountService.addAccountRole(accountNew.getId(), role.getIdRole());
            return new ResponseEntity<>("Thêm tài khoản thành công", HttpStatus.OK);
        }
        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);

    }
}
