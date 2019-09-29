package org.kash.template.webmvc.service.dao.impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.kash.template.webmvc.model.User;
import org.kash.template.webmvc.service.dao.UserDao;
import org.springframework.stereotype.Repository;

@Repository
public class UserDaoImpl extends GenericDaoImpl<User> implements UserDao{

	public UserDaoImpl() {
		super(User.class);
	}

	@Override
	@SuppressWarnings("unchecked")
	public User getUserByName(String userName) {
		EntityManager em = null;
		
		try {
			em = getEntityManager();
			
			Query query = em.createQuery("FROM User u WHERE u.userName = :userName")
					.setParameter("userName", userName);
			
			List<User> result = query.getResultList();
			
			if(result != null && !result.isEmpty()) {
				return result.get(0);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return null;
		
	}
}
