package com.krakedev.colecciones;

import java.util.ArrayList;
///clase dedicada a hacer operaciones entre objetos de la mismaClase

public class AdminPersona {
	//!!IMPORTANTE//
	//la lista debe de instanciarse , caso contrario (al hacer un metodo sobre la lista dara error)
	//JAVA no permite trabajar con atributos no denifidos o nulos
	
	private ArrayList<Persona> listaPersonaas=new ArrayList<Persona>();
	
	//importante en este constructor (para que no de null pointer exeption)
	//se instancias la lista para que no sea null
	// esta es una alternatica en caso que el atributo sea so;p:
	// private ArrayList<Persona> listaPersonaas;
	
//	public AdminPersona() {
//		listaPersonaas=new ArrayList<Persona>();
//	}
//	
	
	public void agregarPersona(Persona personaAgregar) {
		listaPersonaas.add(personaAgregar);
	}
	




	public void imprimir() {
		Persona personaActual;
		
		for(int i=0;i<listaPersonaas.size();i++) {
			personaActual=listaPersonaas.get(i);
			System.out.println("posicion:"+i+" "+personaActual.toString());
		}
		
	}
	
	public Persona buscarPersonaPorNombre(String nombre){
		Persona personaEncontrada;
		
		for(int i=0;i<listaPersonaas.size();i++) {
			personaEncontrada=listaPersonaas.get(i);
			
			//Metodo content Equals para comparar strings :: String.equals(variableString)
			// caso contrario solo camparara su refeerencia a memoria
			if(personaEncontrada.getNombre().contentEquals(nombre)) {
				return personaEncontrada;
			}
		}
		
		return null;
		
	}
	
	// el equivalente a una consulta
	public ArrayList<Persona> buscarMayores(int eddad_consulta){
		ArrayList<Persona> personasListaConsulta=new ArrayList<Persona>();
		Persona personaConsulta;
		
		for(int i=0;i<listaPersonaas.size();i++) {
			personaConsulta=listaPersonaas.get(i);
			
			if(personaConsulta.getEdad()>eddad_consulta) {
				personasListaConsulta.add(personaConsulta);
			}
		}
		
		
		return personasListaConsulta;
		
	}
	
	//otra consulta equivalente
	
	public ArrayList<Persona> buscarMayores2(int edadConsulta) {
	    ArrayList<Persona> personasListaConsulta = new ArrayList<>();

	    for (Persona personaActual : listaPersonaas) {
	        if (personaActual.getEdad() > edadConsulta) {
	            personasListaConsulta.add(personaActual);
	        }
	    }

	    return personasListaConsulta;
	}




	///getters y setters
	public ArrayList<Persona> getListaPersonaas() {
		return listaPersonaas;
	}

	public void setListaPersonaas(ArrayList<Persona> listaPersonaas) {
		this.listaPersonaas = listaPersonaas;
	}
	
	

	
	
	
	
}
