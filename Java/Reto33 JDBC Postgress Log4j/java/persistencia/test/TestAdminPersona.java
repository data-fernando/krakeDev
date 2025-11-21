package persistencia.test;

import java.math.BigDecimal;
import java.sql.Date;

import persistencia.entidades.EstadoCivil;
import persistencia.entidades.Persona;
import persistencia.servicios.AdminPersonas;
import persistencia.utils.Convertidor;

public class TestAdminPersona {
 public static void main(String[] args) {
	 
	 
	 EstadoCivil ec=new EstadoCivil("C","Casado");
	 																	//siempre instanciar como biddecimal
	 Persona personaPrueba=new Persona("Usando Logs Java3", "Usando LogsJava3", 25, 179,ec,new BigDecimal(14579.7));
	 
	 //crear fechas
	 try {
		java.util.Date fechaNacimiento=Convertidor.convertirA_Date("2002-16-18");
		java.util.Date HoraNacRegistro=Convertidor.convertirA_Time("08:30");
		
		personaPrueba.setFecha_nacimiento(fechaNacimiento);
		personaPrueba.setHora_registro(HoraNacRegistro);
		
		///
		AdminPersonas.insertarPersonaBDD(personaPrueba);

	} catch (Exception e) {
		// TODO Auto-generated catch block
//		e.printStackTrace();
		System.out.println("error en el sistema "+e.getMessage());
		
	}
	 
	 
	 


	 

	 
	 
 }
}
