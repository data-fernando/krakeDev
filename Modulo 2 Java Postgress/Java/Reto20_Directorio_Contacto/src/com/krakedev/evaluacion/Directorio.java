package com.krakedev.evaluacion;

import java.util.ArrayList;
import java.util.Date;
import java.text.SimpleDateFormat;


public class Directorio {
	
	private ArrayList<Contacto> contactos=new ArrayList<Contacto>();
	private Date fechaModificacion=new Date();
	private ArrayList<Contacto> correctos= new ArrayList<Contacto>(); 
	private ArrayList<Contacto> incorrectos= new ArrayList<Contacto>();
	
	
	public Directorio() {
		
		this.fechaModificacion = new Date();
	}
	
	public Directorio(Date fechaModificacion) {
	
		this.fechaModificacion = fechaModificacion;
	}

	public boolean agregarContacto(Contacto contacto_aAgregar) {
		boolean agregadoCorrectamente=false;
		
		String cedulaContacto=contacto_aAgregar.getCedula();
		
		if(buscarPorCedula(cedulaContacto)==null) {
			contactos.add(contacto_aAgregar);
			agregadoCorrectamente=true;
		}
		
	
		///modificar Fercha a la actual
		fechaModificacion = new Date();
		
		return agregadoCorrectamente;
	}
	
	public Contacto buscarPorCedula(String cedula_Buscar) {
		Contacto contactoEntontrado=null;
		
		for(Contacto contactoActual : contactos) {
			
			if(contactoActual.getCedula().equals(cedula_Buscar)) {
				contactoEntontrado=contactoActual;
			}
			
		}
		
		if(contactoEntontrado==null) {
			System.out.println("Contacto con cedula: "+cedula_Buscar+" no encontrado");
		}
		
		
		return contactoEntontrado;
		
	}
	
	public String consultarUltimaModificacion() {
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss"
				+ "");
		String fechaFormateada = sdf.format(fechaModificacion);
		
		return fechaFormateada;
		
		
	}
	
	public int contarPerdidos() {
		int num=0;
		
//		ArrayList<Contacto> contactosPerdidos= new ArrayList<Contacto>();
		for(Contacto contactoActual : contactos) {
			
			if(contactoActual.getDireccion()==null) {
				num++;
			}
		}
		return num;
	}
	
	
	///busqueda de lista compuesta 
	public int contarFijos() {
		
		int num=0;
		for(Contacto contactoActual : contactos) {
			
			for(Telefono telefonoActual: contactoActual.getTelefonos()) {
				
				if(telefonoActual.getEstado().equals("C") && telefonoActual.getTipo().equalsIgnoreCase("Convencional")) {
					num++;
					
				}
			}
			
		}
		return num;
		
	}
	
	
	
	public ArrayList<Contacto> getCorrectos() {
		return correctos;
	}

	public ArrayList<Contacto> getIncorrectos() {
		return incorrectos;
	}

	public void depurar() {
		
		for(Contacto contactoActual: contactos) {
			
				if(contactoActual.getDireccion()==null) {
					incorrectos.add(contactoActual);
				}else {
					correctos.add(contactoActual);
				}
		}
			
		//se vuelve a instanciar la lista inicial
		contactos=new ArrayList<Contacto>();
		
		
	}

	public ArrayList<Contacto> getContactos() {
		return contactos;
	}

	
	
}
