package persistencia.test;

import java.util.ArrayList;

import persistencia.entidades.Persona;
import persistencia.servicios.AdminPersonas;

public class TestConsultaPeronalizada {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		try {
			ArrayList<Persona> personasConsulta=AdminPersonas.buscarMenores_EdadBDD(20);
			System.out.println(personasConsulta);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.out.println("error en la consulta "+e.getMessage());
		}

		
	}

}
