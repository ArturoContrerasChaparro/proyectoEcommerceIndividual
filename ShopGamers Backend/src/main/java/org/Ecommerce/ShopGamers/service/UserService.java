package org.Ecommerce.ShopGamers.service;

import java.util.List;
import java.util.Optional;

import org.Ecommerce.ShopGamers.model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	private final UserRepository userRepository;
	   // repositorio dentro de productoservice para conectarse a base de datos
		@Autowired
		public UserService(UserRepository userRepository) {
			this.userRepository = userRepository;
		}// constructor
		public List<Users> getUsers() {
			return userRepository.findAll();
		}//getUsers
		public Users getUser(Long id) {
			return userRepository.findById(id).orElseThrow(
					()->new IllegalArgumentException("Ël usuario con el id "+ id + " no existe."));
		}//getUser

		public Users deleteUser(Long id) {
			Users tmpUser = null;
			if (userRepository.existsById(id)) {
				tmpUser = userRepository.findById(id).get();
				userRepository.deleteById(id);
			}//if exist
			return tmpUser;
		}//deleteUser
		
		public Users addUser(Users user) {
			Users tmpUser = null;
			Optional<Users> userByName = userRepository.findByNombre(user.getNombre());
			
				userRepository.save(user);
				tmpUser = user;
			
			return tmpUser;
		}//addUser
		
		public Users updateUser(Long id, String nombre, String apellido, String numero, String correo, String contraseña) {
			Users tmpUser = null;
			if(userRepository.existsById(id)) {
				tmpUser= userRepository.findById(id).get();
				if(nombre!=null) tmpUser.setNombre(nombre);
				if(apellido!=null) tmpUser.setApellido(apellido);
				if(numero!=null) tmpUser.setNumero(numero);
				if(correo!=null) tmpUser.setCorreo(correo);
				if(contraseña!=null) tmpUser.setContraseña(contraseña);
				
				
				userRepository.save(tmpUser);
			} else {
				System.out.println("El usuario con el id " + id + " no existe." );
				
			}//if
			return tmpUser;
		}//updateUser
}//class UserService
