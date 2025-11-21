package persistencia.test;

import java.util.ArrayList;

import persistencia.entidades.Persona;
import persistencia.servicios.AdminPersonas;

public class TestConsultaPersona {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		try {
			ArrayList<Persona> personasConsulta=AdminPersonas.buscarPerX_NombreBDD("sa");
			System.out.println(personasConsulta);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.out.println("error en la consulta "+e.getMessage());
		}

	}

}
