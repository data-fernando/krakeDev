package com.krakedev.evaluacion;

import java.util.ArrayList;

public class Contacto {
	
	private String cedula;
	private String nombre ;
	private String apellido;
	private String tipo;
	private Direccion direccion;
	
	private ArrayList<Telefono> telefonos=new ArrayList<Telefono>(); 
	
	
	
	public String getCedula() {
		return cedula;
	}
	public void setCedula(String cedula) {
		this.cedula = cedula;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getApellido() {
		return apellido;
	}
	public void setApellido(String apellido) {
		this.apellido = apellido;
	}
	public String getTipo() {
		return tipo;
	}
	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	public Direccion getDireccion() {
		return direccion;
	}
	public void setDireccion(Direccion direccion) {
		this.direccion = direccion;
	}
	
	
	
	public ArrayList<Telefono> getTelefonos() {
		return telefonos;
	}
	
	public void setTelefonos(ArrayList<Telefono> telefonos) {
		this.telefonos = telefonos;
	}
	
	public Contacto(String cedula, String nombre, String apellido) {
		super();
		this.cedula = cedula;
		this.nombre = nombre;
		this.apellido = apellido;
	}
	@Override
	public String toString() {
		return
				"\nCedula: " + cedula + 
				"\nnombre: " + nombre + 
				"\napellido: " + apellido + 
				"\ntipo: " + tipo+
				"\nDireccion: " + 
					"\n\tCallePrincipal: "+direccion.getCallePrincipal() +
					"\n\tCalleSecundaria: "+direccion.getCalleSecundaria() ;
	}
	
	
	public void imprimir(){
//		System.out.println(toString());
		System.out.println(imprimir2());
		
	}
	
	
	public String imprimir2() {
		if(direccion!=null) {
		return
				"***"+nombre+" "+apellido+"****"+
				"\nDireccion: "+direccion.getCallePrincipal()+" y "+direccion.getCalleSecundaria()+"\n";
		}else {
			return
			"***"+nombre+" "+apellido+"****"+
			"\nNo tiene direccion asociada";	
		}

	}
	
	public void agregarTelefono(Telefono telefono) {
		telefonos.add(telefono);
	}
	
	//mostrar telefonos con esta C
	public void mostrarTelefonos() {
		
		ArrayList<Telefono> telefonosTipoC=new ArrayList<Telefono>();
		
		for(Telefono telefonoActual : telefonos) {
				if(telefonoActual.getEstado().equals("C")) {
					telefonosTipoC.add(telefonoActual);
				}
		}
		
		System.out.println("Telefonos con estado 'C':");
		for(Telefono telefonoC : telefonosTipoC) {
			System.out.println(
					"\nNumero: "+telefonoC.getNumero()+", "+telefonoC.getTipo()
					);
		}
		
	}
	//recuperarIncorrectos
	public ArrayList<Telefono> recuperarIncorrectos() {
		
		ArrayList<Telefono> telefonosTipoC=new ArrayList<Telefono>();
//		int contadorIncorrectos=0;
		
		for(Telefono telefonoActual : telefonos) {
				if(telefonoActual.getEstado().equals("E")) {
					telefonosTipoC.add(telefonoActual);
//					contadorIncorrectos++;
				}
		}
		
		return telefonosTipoC;
		
	}
	
	
	
	
	
	
	
	
	
}
