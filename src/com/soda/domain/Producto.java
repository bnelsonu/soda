package com.soda.domain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

public class Producto {

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idProducto")
	private int idProducto;
	
	@Column(name = "nombreProducto")
	private String nombreProducto;
	
	@ManyToOne
	@JoinColumn(name="idCategoria")
	private Categoria categoria;

	public int getIdProducto() {
		return idProducto;
	}

	public void setIdProducto(int idProducto) {
		this.idProducto = idProducto;
	}

	public String getNombreProducto() {
		return nombreProducto;
	}

	public void setNombreProducto(String nombreProducto) {
		this.nombreProducto = nombreProducto;
	}

	public Categoria getCategoria() {
		return categoria;
	}

	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}
}
