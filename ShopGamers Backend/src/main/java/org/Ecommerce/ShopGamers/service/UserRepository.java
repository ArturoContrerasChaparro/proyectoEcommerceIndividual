package org.Ecommerce.ShopGamers.service;

import java.util.Optional;

import org.Ecommerce.ShopGamers.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository  extends JpaRepository<Users, Long> {
	@Query("SELECT u FROM Users u WHERE u.nombre>1")
	Optional<Users> findByNombre(String nombre);

}// interface UserRepository
