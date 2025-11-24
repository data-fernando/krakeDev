package com.krakedev.test;
import com.krakedev.evaluacion.Telefono;
import java.util.ArrayList;



public class TestTelefono {
	public static void main(String[] args) {
		 ArrayList<Telefono> telefonos = new ArrayList();

	        // telefonos con estado "C" (correctos)
	        telefonos.add(new Telefono("1234567890", "Movil"));
	        telefonos.add(new Telefono("9876543210", "Movil"));
	        telefonos.add(new Telefono("9876543", "Convencional"));

	        // telefonos con estado "E" (incorrectos)
	        telefonos.add(new Telefono("12345", "Fijo"));
	        telefonos.add(new Telefono(null, "Movil"));
	        telefonos.add(new Telefono("12345678", "Incorrecto"));
	        telefonos.add(new Telefono("1234567890", null));

	        // Mostrar información de todos los telefonos
	        for (Telefono telefono : telefonos) {
	            System.out.println("Número: " + telefono.getNumero());
	            System.out.println("Tipo: " + telefono.getTipo());
	            System.out.println("Estado: " + telefono.getEstado());
	            System.out.println();
	        }
	}
 
}
