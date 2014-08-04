package com.soda.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.soda.dao.ProductoDAO;
import com.soda.domain.Producto;

@Service
public class ProductoServiceImpl implements ProductoService {
	
	@Autowired
	private ProductoDAO productoDAO;

	@Override
	public List<Producto> getAllProductosByCategoria(int idCategoria) {
		return productoDAO.getAllProductosByCategoria(idCategoria);
	}

}
