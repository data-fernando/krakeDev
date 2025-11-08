package com.krakedev;

public class TestPersona {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Persona p = new Persona();
		p.setNombre("Francisco");
		p.setEdadPersona(15);
		p.setEstatura(1.68);

		System.out.println("Hola Mundo");
		System.out.println("Nombre: " + p.getNombre());
		System.out.println("Edad: " + p.getEdadPersona());
		System.out.println("Estatura: " + p.getEstatura());

		System.out.println("*******\n");

		// Modificar atributos
		p.setNombre("Franciscooo");
		p.setEdadPersona(16);
		p.setEstatura(1.70);

		System.out.println("Nombre: " + p.getNombre());
		System.out.println("Edad: " + p.getEdadPersona());
		System.out.println("Estatura: " + p.getEstatura());

		
		
		
	}

}
