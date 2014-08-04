package com.soda.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.soda.service.CategoriaService;
import com.soda.service.ProductoService;

@Controller
@RequestMapping(value="/main")
public class MainController {

	@Autowired
	private ProductoService productoService;
	@Autowired
	private CategoriaService categoriaService;
	
	@RequestMapping(value="/allProductos/{idCategoria}", method = RequestMethod.GET)
	public String getAllProductosByIdCategoria (Model model, @PathVariable("idCategoria")
	int idCategoria){
		
		model.addAttribute("categorias",categoriaService.getAllCategorias());
		model.addAttribute("productosByCategoria",productoService.getAllProductosByCategoria(idCategoria));
		
		return "productos";
	}
	
	
	
}
