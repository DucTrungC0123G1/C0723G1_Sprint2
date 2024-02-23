package com.example.dried_seafood.service.impl.auth;

import com.example.dried_seafood.model.auth.Accounts;
import com.example.dried_seafood.model.auth.MyUserDetail;
import com.example.dried_seafood.repository.auth.IAccountRepository;
import com.example.dried_seafood.service.auth.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailService implements UserDetailsService {
    @Autowired
    private IAccountRepository accountRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Accounts accounts = accountRepository.findByUserName(username).orElseThrow(()-> new UsernameNotFoundException("UserName" + username+ "Không tồn tại"));
        return new MyUserDetail(accounts);
    }
}
