package com.soda.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.soda.dao.CategoriaDAO;
import com.soda.domain.Categoria;

@Service
public class CategoriaServiceImpl implements CategoriaService{

	@Autowired
	CategoriaDAO categoriaDAO;

	@Override
	public List<Categoria> getAllCategorias() {
		
		return categoriaDAO.getAllCategorias();
	}

	
	
	
	
}
