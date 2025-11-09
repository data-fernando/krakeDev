package com.krakedev.colecciones;

import java.util.ArrayList;

public class TestAdminPersona {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		AdminPersona adPersona=new AdminPersona();
		
		Persona p1=new Persona("joaquin","senil",39);
		Persona p2=new Persona("pepe","Olmedo",48);
		Persona p3=new Persona("mario","Panini",19);

		
		
		//no hacer metodos de listas vacias (null pointer), se ejecuta de izq a derecha
		//instancias la lista de personas dentro del Admin
		// asegurarse que este instanciado la lista por definicion
		adPersona.agregarPersona(p1);
		adPersona.agregarPersona(p2);
		adPersona.agregarPersona(p3);
		System.out.println("Listar Personas");
		adPersona.imprimir();
		System.out.println("\n*******\n");
		
		System.out.println("Buscar Persona: ");
		
		//caso exito
		Persona testPersonaEncontrada=adPersona.buscarPersonaPorNombre(p1.getNombre());
		//caso no exito
//		Persona testPersonaEncontrada=adPersona.buscarPersonaPorNombre("bananero");
		
		
		//si encuentra
		if(testPersonaEncontrada!=null) {
			System.out.println("Persona encontrada es :"+testPersonaEncontrada.toString());
		}else {
			System.out.println("Persona no Encontrada");
		}
		
		
		adPersona.agregarPersona(new Persona("lucia", "Ramirez", 25));
		adPersona.agregarPersona(new Persona("carlos", "Mendoza", 60));
		adPersona.agregarPersona(new Persona("ana", "Torres", 33));
		
		
		System.out.println("Lista Actualizada:");
		adPersona.imprimir();
		int edadEvaluar=30;
		System.out.println("\nBuscar Personas mayores a: "+edadEvaluar);
		System.out.println("lista de la consulta:");
		
		//
		
		ArrayList<Persona> mayoresLista=adPersona.buscarMayores2(edadEvaluar);
		

		for (Persona personaA_Imprimir : mayoresLista) {
		    System.out.println(personaA_Imprimir.toString());
		}
		
		
		
		
		
		
		
		
		

	}

}
