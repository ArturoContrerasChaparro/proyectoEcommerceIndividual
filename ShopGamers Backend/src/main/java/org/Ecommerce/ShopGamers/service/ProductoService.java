package org.Ecommerce.ShopGamers.service;

import java.util.List;
import java.util.Optional;

import org.Ecommerce.ShopGamers.model.productos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductoService {

	private final ProductoRepository productoRepository;
	   // repositorio dentro de productoservice para conectarse a base de datos
		@Autowired
		public ProductoService(ProductoRepository productoRepository) {
			this.productoRepository = productoRepository;
		}// constructor
		
		public List<productos> getProductos() {
			return productoRepository.findAll();
		}//getProductos
		
		public productos getProducto(Long id) {
			return productoRepository.findById(id).orElseThrow(
					()->new IllegalArgumentException("Ël producto con el id "+ id + " no existe."));
		}//getProducto

		public productos deleteProducto(Long id) {
			productos tmpProd = null;
			if (productoRepository.existsById(id)) {
				tmpProd = productoRepository.findById(id).get();
				productoRepository.deleteById(id);
			}//if exist
			return tmpProd;
		}//deleteProducto
		
		public productos addProducto(productos producto) {
			productos tmpProd = null;
			Optional<productos> prodByName = productoRepository.findByNombre(producto.getNombre());
			
			if (prodByName.isPresent()) {
				throw new IllegalArgumentException("Ël producto con el nombre ["+producto.getNombre() + "] ya existe.");
			} else {
				productoRepository.save(producto);
				tmpProd = producto;
			}//else //if isPresent
			return tmpProd;
		}//addProducto
		
		public productos updateProducto(Long id, String imagen1, String nombre,String descripcion1, String descripcion2, Double precio, String imagen2) {
			productos tmpProd = null;
			if(productoRepository.existsById(id)) {
				tmpProd= productoRepository.findById(id).get();
				if(imagen1!=null) tmpProd.setImagen1(imagen1);
				if(nombre!=null) tmpProd.setNombre(nombre);
				if(descripcion1!=null) tmpProd.setDescripcion1(descripcion1);
				if(descripcion2!=null) tmpProd.setDescripcion2(descripcion2);
				if(precio!=null) tmpProd.setPrecio(precio.doubleValue());
				if(imagen2!=null) tmpProd.setImagen2(imagen2);
				productoRepository.save(tmpProd);
			} else {
				System.out.println("El producto con el id " + id + " no existe." );
				
			}//if
			return tmpProd;
		}//updateProducto
		
	}//class ProductoService
