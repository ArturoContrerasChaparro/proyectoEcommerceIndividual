package org.Ecommerce.ShopGamers.controller;

import java.util.List;

import org.Ecommerce.ShopGamers.model.productos;
import org.Ecommerce.ShopGamers.service.ProductoService;
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
@CrossOrigin (origins="*")
@RequestMapping (path="/api/products/")
public class ProductoController {
	private final ProductoService productoService;
	@Autowired
	public ProductoController(ProductoService productoService) {
		this.productoService = productoService;
	}// constructor
	
	//CRUD
	@GetMapping
	public List<productos> getAllProductos(){
		return productoService.getProductos();
	}//getAllProductos
	
	@GetMapping(path="{prodId}")
	public productos getProducto(@PathVariable("prodId") Long id){
		return productoService.getProducto(id);
	}//getProducto
	
	@DeleteMapping(path="{prodId}")
	public productos deleteProducto(@PathVariable("prodId") Long id){
		return productoService.deleteProducto(id);
	}//deleteProducto
	
	@PostMapping
	public productos addProducto(@RequestBody productos producto){
		return productoService.addProducto(producto);
	}//addProducto
	
	@PutMapping(path="{prodId}")
	public productos updateProducto(@PathVariable("prodId") Long id,
			@RequestParam(required = false) String imagen1,
			@RequestParam(required = false) String nombre,
			@RequestParam(required = false) String descripcion1,
			@RequestParam(required = false) String descripcion2,
			@RequestParam(required = false) Double precio,
			@RequestParam(required = false) String imagen2) {
		return productoService.updateProducto(id, imagen1, nombre, descripcion1, descripcion2, precio, imagen2);
	}//deleteProducto
	
}//class ProdictpController
