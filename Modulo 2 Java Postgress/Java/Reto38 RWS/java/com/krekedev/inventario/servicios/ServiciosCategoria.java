package com.krekedev.inventario.servicios;

import com.krekedev.inventario.entidades.Categoria;

import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("categorias")
public class ServiciosCategoria {
	
	
	@Path("insertar")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public void insertarCat(Categoria categoria) {
		
		System.out.println("insertar categoria: " +categoria);
		
	}
	
}
