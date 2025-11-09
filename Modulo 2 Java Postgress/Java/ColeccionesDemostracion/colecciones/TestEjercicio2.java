package com.krakedev.colecciones;

import java.util.ArrayList;

public class TestEjercicio2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ArrayList<Persona> listaPersonas=new ArrayList<Persona>();
		
		//agregar primera persona
		listaPersonas.add(new Persona("pedro","herrera",26));
		//agregar persona
		listaPersonas.add(new Persona("Marcelo","gomez",36));
		
		//
		listaPersonas.add(new Persona("Ana","suatunze",31));
		
		//imprimir
		Persona personaActual; 
		for(int i=0;i<listaPersonas.size();i++) {
			personaActual=listaPersonas.get(i);
			System.out.println("Pesona 'for': "+personaActual.toString());
		}

	}

}





