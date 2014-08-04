package com.soda.service;

import java.util.List;

import com.soda.domain.Producto;

public interface ProductoService {

	public List <Producto> getAllProductosByCategoria(int idCategoria);
}
