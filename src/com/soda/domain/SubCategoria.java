package com.soda.domain;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name="SubCategoria")
public class SubCategoria {


	@Id 
	@Column(name="idSubCategoria")
	private int idSubCategoria;
	@Column(name="nombreSubCategoria")
	private String nombreSubCategoria;
	
	@OneToMany(mappedBy="subCategoria")
	private Collection <Producto> productos = new ArrayList <Producto> ();
	
	
	public int getIdCategoria() {
		return idSubCategoria;
	}
	public void setIdCategoria(int idCategoria) {
		this.idSubCategoria = idCategoria;
	}
	public String getNombreCategoria() {
		return nombreSubCategoria;
	}
	public void setNombreCategoria(String nombreCategoria) {
		this.nombreSubCategoria = nombreCategoria;
	}
	public Collection<Producto> getProductos() {
		return productos;
	}
	public void setProductos(Collection<Producto> productos) {
		this.productos = productos;
	}
}