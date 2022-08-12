package org.Ecommerce.ShopGamers.service;

import java.util.Optional;

import org.Ecommerce.ShopGamers.model.productos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ProductoRepository  extends JpaRepository<productos, Long> {
	@Query("SELECT p FROM productos p WHERE p.nombre=?1")
	Optional<productos> findByNombre(String nombre);
	
}// interface ProductoRepository
