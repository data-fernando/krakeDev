package com.cmc.repaso.entidades;

public class Estudiante {
	
	private String nombre;
	private double nota;
	private String resultado;
	
	
	public Estudiante(String nombre) {
		super();
		this.nombre = nombre;
	}
	
	public void setNota(double nota) {
		this.nota = nota;
	}	
	
	public void calificar(double nota_funcion) {
		
		setNota(nota_funcion);
		
		if(nota_funcion>8) {
			resultado="A";
		}else {
			resultado="F";
		}
	}

	@Override
	public String toString() {
		return "Estudiante [nombre=" + nombre + ", nota=" + nota + ", resultado=" + resultado + "]";
	}

	
	
	
	
		
	
}
