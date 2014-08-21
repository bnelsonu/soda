package com.soda.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.soda.dao.OrdenDAO;
import com.soda.domain.Orden;

@Service
public class OrdenServiceImpl implements OrdenService {

	@Autowired
	OrdenDAO categoriaDAO;
	
	@Override
	public void salvarOrden(Orden orden) {
	
		categoriaDAO.salvarOrden(orden);
	}

}
