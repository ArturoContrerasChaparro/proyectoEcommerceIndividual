package org.Ecommerce.ShopGamers.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="productos")
public class productos {

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name="id", unique = true, nullable = false)
	private Long id;
	private String imagen1;
	private String nombre;
	private String descripcion1;
	private String descripcion2;
	private double precio;
	private String imagen2;
	
	public productos(Long id, String imagen1, String nombre, String descripcion1, String descripcion2, double precio,
			String imagen2) {
		super();
		this.id = id;
		this.imagen1 = imagen1;
		this.nombre = nombre;
		this.descripcion1 = descripcion1;
		this.descripcion2 = descripcion2;
		this.precio = precio;
		this.imagen2 = imagen2;
	}//constructor

	public productos() {}//constructor vacío

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getImagen1() {
		return imagen1;
	}

	public void setImagen1(String imagen1) {
		this.imagen1 = imagen1;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion1() {
		return descripcion1;
	}

	public void setDescripcion1(String descripcion1) {
		this.descripcion1 = descripcion1;
	}

	public String getDescripcion2() {
		return descripcion2;
	}

	public void setDescripcion2(String descripcion2) {
		this.descripcion2 = descripcion2;
	}

	public double getPrecio() {
		return precio;
	}

	public void setPrecio(double precio) {
		this.precio = precio;
	}

	public String getImagen2() {
		return imagen2;
	}

	public void setImagen2(String imagen2) {
		this.imagen2 = imagen2;
	}//fin de getters and setters

	@Override
	public String toString() {
		return "productos [id=" + id + ", imagen1=" + imagen1 + ", nombre=" + nombre + ", descripcion1=" + descripcion1
				+ ", descripcion2=" + descripcion2 + ", precio=" + precio + ", imagen2=" + imagen2 + "]";
	}
	
	
	
	
	
	
	
	
	
	
	
}//public class
