package com.krakedev.servicios;




import com.krakedev.entidades.Cliente;

import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
//import javax.ws.rs.GET;
//import javax.ws.rs.Path;

@Path("clientes")

public class ServicioClientes {
	
	@Path("metodo1")
	@GET
	public String saludar() {
		
		return "Hola Mundo RestService";
	}
	
	
	@Path("buscar")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Cliente buscarCliente() {
		
		Cliente cliente_retorno=new Cliente("1895684895", "Marcelo");
		
		
		return cliente_retorno;
	}
	
	
	@Path("insertar")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public void insertarCliente(Cliente cliente) {
		System.out.println(" >>>>> "+cliente);
		
	}
	
	@Path("actualizar")
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public void actualizarCliente(Cliente cliente) {
		System.out.println(" actualizar cliente>>>>> "+cliente);
		
	}
	
	
	

}
