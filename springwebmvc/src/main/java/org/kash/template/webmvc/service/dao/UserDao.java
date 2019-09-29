package org.kash.template.webmvc.service.dao;

import org.kash.template.webmvc.model.User;

public interface UserDao extends GenericDao<User>{

	public User getUserByName(String userName);
}
