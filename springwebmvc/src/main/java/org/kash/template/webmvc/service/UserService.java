package org.kash.template.webmvc.service;

import org.kash.template.webmvc.model.User;

public interface UserService {

	public User getUser(String userName);
	
	public void newUser(String userName, String password);
	
	public boolean athenticateUser(String userName, String password);
}
