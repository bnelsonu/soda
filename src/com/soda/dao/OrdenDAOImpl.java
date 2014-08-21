package com.soda.dao;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.soda.domain.Orden;
@Transactional
@Repository
public class OrdenDAOImpl implements OrdenDAO{

	@Autowired
    private SessionFactory sessionFactory;
		
	@Override
	public void salvarOrden(Orden orden) {
		
		sessionFactory.getCurrentSession().save(orden);
	}

}
