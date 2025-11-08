package com.cmc.directorio.entidades;

public class Contacto {
	
	private String nombre;
	private int edad;
	private Telefono telefono;
	private double peso;
	private boolean esActivo;
	
	
	public boolean es_Activo_Get() {
		return esActivo;
	}
	public void setEsActivo(boolean esActivo) {
		this.esActivo = esActivo;
	}
	public String getNombre() {
		return nombre;
	}
	public int getEdad() {
		return edad;
	}
	public Telefono getTelefono() {
		return telefono;
	}
	public double getPeso() {
		return peso;
	}
	
	public Contacto(String nombre, int edad, Telefono telefono, double peso) {
		super();
		this.nombre = nombre;
		this.edad = edad;
		this.telefono = telefono;
		this.peso = peso;
		this.esActivo = false;
	}
	@Override
	public String toString() {
		return "Contacto: \n[nombre=" + nombre + ", edad=" + edad + ", telefono=" + telefono + ", peso=" + peso
				+ ", esActivo=" + esActivo + "]";
	}
	
	
	
	
	
	
	
	
	

}
