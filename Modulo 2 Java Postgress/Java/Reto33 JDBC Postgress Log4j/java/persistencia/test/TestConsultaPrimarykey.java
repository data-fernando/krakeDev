package persistencia.test;

import java.util.ArrayList;

import persistencia.entidades.Persona;
import persistencia.servicios.AdminPersonas;

public class TestConsultaPrimarykey {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		

		try {
			Persona personaConsulta=AdminPersonas.buscarX_PrimaryKey(2);
			System.out.println(personaConsulta);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.out.println("\nerror en la consulta "+e.getMessage()+"\n");
		}
		

	}

}
