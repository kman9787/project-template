package org.kash.template.webmvc.util;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.authentication.LoginUrlAuthenticationEntryPoint;


public class CustomAuthenticationEntryPoint extends LoginUrlAuthenticationEntryPoint {

	public CustomAuthenticationEntryPoint(String loginFormUrl) {
		super(loginFormUrl);
	}
	
	public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
		RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();
		String redirectUrl = "/login";
		
		redirectStrategy.sendRedirect(request, response, redirectUrl);
	}

}
