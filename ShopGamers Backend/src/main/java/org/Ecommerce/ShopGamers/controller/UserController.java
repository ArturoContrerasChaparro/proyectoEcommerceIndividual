package org.Ecommerce.ShopGamers.controller;

import java.util.List;

import org.Ecommerce.ShopGamers.model.Users;
import org.Ecommerce.ShopGamers.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@RestController
@CrossOrigin(origins="*")
@RequestMapping (path="/api/users/")
public class UserController {
	private final UserService userService;
	@Autowired
	public UserController(UserService userService) {
		this.userService = userService;
	}// constructor
	
	//CRUD
	@GetMapping
	public List<Users> getAllUsers(){
		return userService.getUsers();
	}//getAllUsers
	
	
	@GetMapping(path="{userId}")
	public Users getUser(@PathVariable("userId") Long id){
		return userService.getUser(id);
	}//getUser
	
	@DeleteMapping(path="{userId}")
	public Users deleteUser(@PathVariable("userId") Long id){
		return userService.deleteUser(id);
	}//deleteUser
	
	@PostMapping
	public Users addUser(@RequestBody Users user){
		return userService.addUser(user);
	}//addUser
	
	@PutMapping(path="{userId}")
	public Users updateUser(@PathVariable("userId") Long id,
			@RequestParam(required = false) String nombre,
			@RequestParam(required = false) String apellido,
			@RequestParam(required = false) String numero,
			@RequestParam(required = false) String correo,
			@RequestParam(required = false) String contrasena) {
		return userService.updateUser(id, nombre, apellido, numero, correo, contrasena);
	}//updateUser
	
}//class ProdictpController
