package com.soda.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.soda.domain.Producto;


@Transactional
@Repository
public class ProductoDAOImpl implements ProductoDAO {

	@Autowired
	private SessionFactory sessionFactory;	
	
	@SuppressWarnings("unchecked")
	@Override
	public List<Producto> getAllProductos() {
		
		Criteria criteria = sessionFactory.getCurrentSession().createCriteria(Producto.class);
		return criteria.list();
	}
	
}
