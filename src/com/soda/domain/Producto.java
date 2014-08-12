package com.soda.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity
@Table(name="Producto")
public class Producto {

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idProducto")
	private int idProducto;
	
	@Column(name = "nombreProducto")
	private String nombreProducto;
	
	@Column(name = "precioProducto")
	private String precioProducto;
	
	@Column(name="descripcionProducto")
	private String descripcionProducto;
	
	@ManyToOne
	@JoinColumn(name="idSubCategoria")
	@JsonIgnore 
	private SubCategoria subCategoria;
	
	@ManyToOne
	@JoinColumn(name="idCategoria")
	@JsonIgnore 
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

	public String getPrecioProducto() {
		return precioProducto;
	}

	public void setPrecioProducto(String precioProducto) {
		this.precioProducto = precioProducto;
	}

	public String getDescripcionProducto() {
		return descripcionProducto;
	}

	public void setDescripcionProducto(String descripcionProducto) {
		this.descripcionProducto = descripcionProducto;
	}

	public SubCategoria getSubCategoria() {
		return subCategoria;
	}

	public void setSubCategoria(SubCategoria subCategoria) {
		this.subCategoria = subCategoria;
	}
}