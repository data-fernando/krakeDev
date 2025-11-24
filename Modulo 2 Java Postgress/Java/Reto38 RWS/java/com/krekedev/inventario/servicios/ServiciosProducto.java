package com.krekedev.inventario.servicios;

import java.util.ArrayList;

import com.krekedev.inventario.entidades.Categoria;

//este import automatico da error
//import java.awt.PageAttributes.MediaType;

import com.krekedev.inventario.entidades.Producto;

import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;


@Path("inventario")
public class ServiciosProducto {

	private ArrayList<Producto> productos=new ArrayList<Producto>(); 
	
	
	
	
	public ArrayList<Producto> getProductos() {
		return productos;
	}


	public ServiciosProducto() {
		super();

        // Categorías
        Categoria c1 = new Categoria(1, "Limpieza");
        Categoria c2 = new Categoria(2, "Entretenimiento");
        Categoria c3 = new Categoria(3, "Alimentación");

        // Productos iniciales
        Producto p1 = new Producto("LIMP01", "Limpiamax", c1, 9.99, 50);
        Producto p2 = new Producto("ENTR01", "PlayBox", c2, 299.99, 10);
        Producto p3 = new Producto("ALIM01", "Arroz Premium", c3, 1.99, 200);
        Producto p4 = new Producto("ALIM02", "Aceite Vegetal", c3, 3.49, 100);
        Producto p5 = new Producto("LIMP02", "Detergente Ultra", c1, 5.99, 80);

        // Agregar productos a la lista
        productos.add(p1);
        productos.add(p2);
        productos.add(p3);
        productos.add(p4);
        productos.add(p5);

        // Mensaje de confirmación
        System.out.println("Inventario inicial cargado con " + productos.size() + " productos.");
		
		
	}


	@Path("insertar")
	@POST
//	consumes es para el formato que recibe
	@Consumes(MediaType.APPLICATION_JSON)
	public void insertarP(Producto producto) {
		
		productos.add(producto);
		System.out.println("producto insertado: "+producto);
	
	}
	
	
	@Path("actualizar")
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public void actualizarP(Producto producto) {
		
		System.out.println("producto actualizado: "+producto);
		

	}
	
	@Path("recuperarTodos")
	@GET
	//produces es para el estado que devuelve
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Producto> recuperarTodosP() {
		ArrayList<Producto> productos_retorno=productos;
		return productos_retorno;
		
	}
	
	
	
}
