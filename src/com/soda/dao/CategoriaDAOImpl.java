package com.soda.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import com.soda.domain.Categoria;


@Transactional
@Repository
public class CategoriaDAOImpl implements CategoriaDAO{
	
	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public List<Categoria> getAllCategorias() {
		
		Criteria criteria = sessionFactory.getCurrentSession().createCriteria(Categoria.class);
		
		return criteria.list();
	}

}
