package com.krakedev;

public class TestPersona {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Persona p;
		p=new Persona();
		p.nombre="Francisco";
		p.edadPersona=15;
		p.estatura=1.68;
		
		
		
		System.out.println("Hola Mundo");
		System.out.println("Nombre: "+p.nombre);
		System.out.println("Edad: "+p.edadPersona);
		System.out.println("Estatura: "+p.estatura);
		
		System.out.println("*******\n");
		
		///modificar nombre
		
		p.nombre="Franciscooo";
		p.edadPersona=16;
		p.estatura=1.70;
		
		System.out.println("Nombre: "+p.nombre);
		System.out.println("Edad: "+p.edadPersona);
		System.out.println("Estatura: "+p.estatura);
		
		
		
		
	}

}
