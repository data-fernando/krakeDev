package com.reto21.entidades;

public class Carta {
	private Numero numero;
	///ojo
	private String palo;
	private String estado;
	
	
	
	
	public void setEstado(String estado) {
		this.estado = estado;
	}
	public String getEstado() {
		return estado;
	}
	public Numero getNumero() {
		return numero;
	}
	public void setNumero(Numero numero) {
		this.numero = numero;
	}
	public String getPalo() {
		return palo;
	}
	public void setPalo(String palo) {
		this.palo = palo;
	}
	
	public Carta(Numero numero, String palo) {
		super();
		this.numero = numero;
		this.palo = palo;
		//// ejercicio4
		this.estado="N";
	}
	
	public int getValor() {
		int valor_numero=getNumero().getValor();
		return valor_numero;
	}
	
	@Override
	public String toString() {
		return numero +" - "+ palo;
	}
	
	
	
	
	
	
	
	
	
}
