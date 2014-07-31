package com.soda.domain;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.OneToMany;

public class Categoria {
	@Id 
	@Column(name="idCategoria")
	private int idCategoria;
	@Column(name="nombreCategoria")
	private String nombreCategoria;
	
	@OneToMany(mappedBy="categoria")
	private Collection <Producto> productos = new ArrayList <Producto> ();
	
	
	public int getIdCategoria() {
		return idCategoria;
	}
	public void setIdCategoria(int idCategoria) {
		this.idCategoria = idCategoria;
	}
	public String getNombreCategoria() {
		return nombreCategoria;
	}
	public void setNombreCategoria(String nombreCategoria) {
		this.nombreCategoria = nombreCategoria;
	}
	public Collection<Producto> getProductos() {
		return productos;
	}
	public void setProductos(Collection<Producto> productos) {
		this.productos = productos;
	}
}