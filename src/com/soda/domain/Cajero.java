package com.soda.domain;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

public class Cajero {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "idCajero")
	private int idCajero;
	@Column(name = "nombre")
	private String nombre;
	@Column(name = "apellido1")
	private String apellido1;
	@Column(name = "apellido2")
	private String appellido2;
	
	@OneToMany(mappedBy="cajero")
	private Collection <Orden> ordenes = new ArrayList <Orden> (); 
	
	
	public int getIdCajero() {
		return idCajero;
	}
	public void setIdCajero(int idCajero) {
		this.idCajero = idCajero;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getApellido1() {
		return apellido1;
	}
	public void setApellido1(String apellido1) {
		this.apellido1 = apellido1;
	}
	public String getAppellido2() {
		return appellido2;
	}
	public void setAppellido2(String appellido2) {
		this.appellido2 = appellido2;
	}
	public Collection<Orden> getOrdenes() {
		return ordenes;
	}
	public void setOrdenes(Collection<Orden> ordenes) {
		this.ordenes = ordenes;
	}
}