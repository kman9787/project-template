package org.kash.template.webmvc.service.dao.impl;

import java.io.Serializable;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.kash.template.webmvc.service.dao.GenericDao;

public abstract class GenericDaoImpl<T extends Serializable> implements GenericDao<T> {

	private Class<T> clazz;

	@PersistenceContext
	private EntityManager entityManager;

	public GenericDaoImpl(Class<T> clazz) {
		this.clazz = clazz;
	}

	@Override
	public T findOne(Long id) {
		return entityManager.find(clazz, id);
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<T> findAll() {
		return entityManager.createQuery("from " + clazz.getName()).getResultList();
	}

	@Override
	public void save(T entity) {
		entityManager.persist(entity);
	}

	@Override
	public T update(T entity) {
		return entityManager.merge(entity);
	}

	@Override
	public void delete(T entity) {
		entityManager.remove(entity);
	}

	@Override
	public void deleteById(Long entityId) {
		T entity = findOne(entityId);
		delete(entity);
	}

	@Override
	public T create(T entity) {
		entityManager.persist(entity);
		return entity;
	}

	protected EntityManager getEntityManager() {
		return entityManager;
	}
}
