package com.soda.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.soda.domain.Producto;


@Transactional
@Repository
public class ProductoDAOImpl implements ProductoDAO {

	@Autowired
	private SessionFactory sessionFactory;	
	
	@Override
	public List<Producto> getAllProductosByCategoria(int idCategoria) 
	{
		// TODO Auto-generated method stub
		//String queryString = "select nombreproducto from Producto where idCategoria="+ idCategoria;
		Criteria criteria = sessionFactory.getCurrentSession().createCriteria(Producto.class, "producto");
		criteria.createCriteria("categoria", "c");
		criteria.add(Restrictions.eq("c.idCategoria", idCategoria));
		
		return criteria.list();
	}
	
	
	
}
