package com.example.dried_seafood.config;

import com.example.dried_seafood.security.jwt.JwtAuthenticationFilter;
import com.example.dried_seafood.service.impl.auth.MyUserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig {
    @Autowired
    private MyUserDetailService myUserDetailService;

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {

        return new BCryptPasswordEncoder();
    }

    @Bean
    public JwtAuthenticationFilter authenticationJwtTokenFilter() {
        return new JwtAuthenticationFilter();
    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(myUserDetailService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors(Customizer.withDefaults())
                .authorizeHttpRequests((requests) -> requests
                                .requestMatchers("/**").permitAll()
//                        Trang không cần đăng nhập
                                .requestMatchers("/api/login").permitAll()
                                .requestMatchers("/api/products/list").permitAll()
                                .requestMatchers("/api/register").permitAll()
                                .requestMatchers("/api/products/details/**").permitAll()
//                        Trang cần có quyền hợp lệ
//                                .requestMatchers("/api/role/**").hasAnyAuthority("ROLE_ADMIN")
//                                .requestMatchers("/api/register").hasAnyAuthority("ROLE_ADMIN")
//                                .requestMatchers("/api/customer/search/**").hasAnyAuthority("ROLE_USER")
//                                .requestMatchers("/api/pay/**").hasAnyAuthority("ROLE_USER")
//                                .requestMatchers("/api/orders/create").permitAll()
//                                .requestMatchers("/api/changePassword").hasAnyAuthority("ROLE_ADMIN","ROLE_ACCOUNTANT","ROLE_SALESMAN")
//                                .requestMatchers("/api/employee/**").hasAnyAuthority("ROLE_ADMIN","ROLE_ACCOUNTANT","ROLE_SALESMAN")
//                                .requestMatchers("/api/productions/**","/api/type_products/**").hasAnyAuthority("ROLE_ADMIN","ROLE_SALESMAN")
//                                .requestMatchers("/api/products/create","/api/products/update").hasAnyAuthority("ROLE_ADMIN","ROLE_SALESMAN")
                                .anyRequest().authenticated()
                )
                .csrf(AbstractHttpConfigurer::disable)
                .addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class)
                .formLogin((form) -> form.disable())
                .logout((logout) -> logout.permitAll());


        return http.build();
    }

}
