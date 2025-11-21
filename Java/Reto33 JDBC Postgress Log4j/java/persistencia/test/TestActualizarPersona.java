package persistencia.test;

import java.math.BigDecimal;

import persistencia.entidades.EstadoCivil;
import persistencia.entidades.Persona;
import persistencia.servicios.AdminPersonas;
import persistencia.utils.Convertidor;

public class TestActualizarPersona {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		 EstadoCivil ec=new EstadoCivil("C","Casado");
			//siempre instanciar como biddecimal
		 Persona personaActualizar=new Persona("PersonaActualizada", "PersonaActualizada", 25, 179,ec,new BigDecimal(14579.7));
		 //parametro para actualizar
		 personaActualizar.setCedula(20);
		 
		 //crear fechas
		 try {
			java.util.Date fechaNacimiento=Convertidor.convertirA_Date("2000-16-18");
			java.util.Date HoraNacRegistro=Convertidor.convertirA_Time("09:39");
			
			personaActualizar.setFecha_nacimiento(fechaNacimiento);
			personaActualizar.setHora_registro(HoraNacRegistro);
			
			///
			AdminPersonas.actualizarPersonaBDD(personaActualizar);

		} catch (Exception e) {
			// TODO Auto-generated catch block
//			e.printStackTrace();
			System.out.println("error en el sistema al actualizar: "+e.getMessage());
			
		}
		
		
		
	}

}
