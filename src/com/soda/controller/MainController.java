package com.soda.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.soda.domain.Categoria;
import com.soda.domain.Orden;
import com.soda.domain.Producto;
import com.soda.service.CategoriaService;
import com.soda.service.OrdenService;
import com.soda.service.ProductoService;

@Controller
@RequestMapping(value="/main")
public class MainController {

	@Autowired
	private ProductoService productoService;
	@Autowired
	private CategoriaService categoriaService;
	
	@Autowired
	private OrdenService ordenService;

	@RequestMapping(value="/home", method = RequestMethod.GET)
	public String showProductos (Model model)
	{
	    model.addAttribute("newOrden",new Orden());
			
		return "productos";
	}
	
	@RequestMapping(value = "/categorias", method = RequestMethod.GET)
	    public @ResponseBody  List<Categoria> returnListInResponse() {
		
	    	return categoriaService.getAllCategorias();
	    }
	
	@RequestMapping(value="/allProductos/{idCategoria}", method = RequestMethod.GET)
	public @ResponseBody  List<Producto> getAllProductosByIdCategoria (Model model, @PathVariable("idCategoria")
	int idCategoria)
	{
		return productoService.getAllProductosByCategoria(idCategoria);
	}
	
	@RequestMapping(value="/createOrden", method=RequestMethod.POST)
	public String createOrden (@ModelAttribute("newOrden") Orden newOrden){
		
		ordenService.salvarOrden(newOrden);
		
		return "redirect:/main/home";
		
	}
	
}