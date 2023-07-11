package dev.kash.simpleapi.service;

import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class ApiAuthenticationProvider extends DaoAuthenticationProvider {

    public ApiAuthenticationProvider(PasswordEncoder passwordEncoder, JpaUserDetailsService jpaUserDetailsService) {
        this.setPasswordEncoder(passwordEncoder);
        this.setUserDetailsService(jpaUserDetailsService);
    }
}
