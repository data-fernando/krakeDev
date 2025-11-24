package com.krakedev.servicios;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
//import javax.ws.rs.GET;
//import javax.ws.rs.Path;


@Path("customers")

public class ServicioCustomer {

		
		@Path("metodo1")
		@GET
		public String m1() {
			
			return "Hola Mundo RestService Reto 36 ";
		}


	

}
