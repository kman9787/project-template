package org.kash.template.webmvc.util;

import java.util.ArrayList;
import java.util.List;

import org.kash.template.webmvc.model.User;
import org.kash.template.webmvc.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

@Component("customAuthenticationProvider")
public class CustomAuthenticationProvider implements AuthenticationProvider {
	
	@Autowired
	UserService userService;

	@Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String name = authentication.getName();
        String password = authentication.getCredentials().toString();
        List<GrantedAuthority> authorities = customAuthenticationMethod(name, password);
         
        if (authorities != null && !authorities.isEmpty()) {
            return new UsernamePasswordAuthenticationToken(name, password, authorities);
        } else {
            return null;
        }
    }
 
    private List<GrantedAuthority> customAuthenticationMethod(String name, String password) {
    	User user = userService.getUser(name);
    	
    	if(user != null && user.getAuthenticationToken().equals(password)) {
    		List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
        	authorities.add(new SimpleGrantedAuthority(user.getRole())); // ROLE_USER
        	return authorities;
    	}
		
		return null;
	}

	@Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }

}
