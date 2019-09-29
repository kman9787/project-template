package org.kash.template.webmvc.service.impl;

import org.kash.template.webmvc.model.User;
import org.kash.template.webmvc.service.UserService;
import org.kash.template.webmvc.service.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserDao userDao;

	@Override
	public User getUser(String userName) {
		return userDao.getUserByName(userName);
	}

	@Override
	public void newUser(String userName, String password) {
		// TODO Auto-generated method stub

	}

	@Override
	public boolean athenticateUser(String userName, String password) {
		// TODO Auto-generated method stub
		return false;
	}

}
