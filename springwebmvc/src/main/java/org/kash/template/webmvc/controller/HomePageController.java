package org.kash.template.webmvc.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.kash.template.webmvc.model.User;
import org.kash.template.webmvc.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomePageController {

	@Autowired
	UserService userService;
	
	@RequestMapping(value = "home", method = RequestMethod.GET)
	public ModelAndView doPage1(HttpSession session, HttpServletRequest request, HttpServletResponse response) {
		// Test the service
		User user = userService.getUser("kman@gmail.com");
		
		ModelAndView mav = new ModelAndView("home");
		mav.addObject("loggedInUser", user);
		
		return mav;
	}

}
