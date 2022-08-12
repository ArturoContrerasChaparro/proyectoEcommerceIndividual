package org.Ecommerce.ShopGamers.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="usuarios")
public class Users {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name="id", unique = true, nullable = false)
	private Long id;
	private String nombre;
	private String apellido;
	private String numero;
	private String correo;
	private String contrase�a;
	
	
	public Users(Long id, String nombre, String apellido, String numero, String correo, String contrase�a) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.apellido = apellido;
		this.numero = numero;
		this.correo = correo;
		this.contrase�a = contrase�a;
	}//constructor
	
	public Users () {}//constructor

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public String getContrase�a() {
		return contrase�a;
	}

	public void setContrase�a(String contrase�a) {
		this.contrase�a = contrase�a;
	}

	@Override
	public String toString() {
		return "Users [id=" + id + ", nombre=" + nombre + ", apellido=" + apellido + ", numero=" + numero + ", correo="
				+ correo + ", contrase�a=" + contrase�a + "]";
	}
	
	
	
	
	
	
	
	
	
	
	
}//public class
