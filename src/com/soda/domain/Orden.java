package com.soda.domain;

import java.math.BigDecimal;
import java.util.Date;
import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
@Entity
@Table(name="Orden")
public class Orden {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idOrden")
	private int idOrden;
	 
	@Column(name = "fechaOrden")
	private Date fechaOrden;
	
	@Column(name = "totalOrden")
	private BigDecimal totalOrden;
	
	@ManyToMany(cascade=CascadeType.PERSIST)
	@JoinTable(name = "orden_producto", joinColumns = { @JoinColumn(name = "idOrden") }, 
	inverseJoinColumns = { @JoinColumn(name = "idProducto") })
	private Collection <Producto> productos = new ArrayList <Producto> ();
	
	@ManyToOne 
	@JoinColumn(name="idCajero")
	private Cajero cajero;

	public int getIdOrden() {
		return idOrden;
	}

	public void setIdOrden(int idOrden) {
		this.idOrden = idOrden;
	}

	public Date getFechaOrden() {
		return fechaOrden;
	}

	public void setFechaOrden(Date fechaOrden) {
		this.fechaOrden = fechaOrden;
	}

	public Collection<Producto> getProductos() {
		return productos;
	}
	public void setProductos(Collection<Producto> productos) {
		this.productos = productos;
	}

	public Cajero getCajero() {
		return cajero;
	}

	public void setCajero(Cajero cajero) {
		this.cajero = cajero;
	}

	public BigDecimal getTotalOrden() {
		return totalOrden;
	}

	public void setTotalOrden(BigDecimal totalOrden) {
		this.totalOrden = totalOrden;
	}
}