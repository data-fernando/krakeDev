package com.cmc.directorio.entidades;

public class Telefono {
	
	private String operadora;
	private String numero;
	private int codigo;
	private boolean tieneWhatsapp;
	
	public Telefono(String operadora, String numero, int codigo) {
		super();
		this.operadora = operadora;
		this.numero = numero;
		this.codigo = codigo;
		this.tieneWhatsapp = false;
	}

	@Override
	public String toString() {
		return "Telefono: \n[operadora=" + operadora + ", numero=" + numero + ", codigo=" + codigo + ", tieneWhatsapp="
				+ tieneWhatsapp + "]";
	}

	public boolean isTieneWhatsapp() {
		return tieneWhatsapp;
	}

	public void setTieneWhatsapp(boolean tieneWhatsapp) {
		this.tieneWhatsapp = tieneWhatsapp;
	}

	public String getOperadora() {
		return operadora;
	}

	public String getNumero() {
		return numero;
	}

	public int getCodigo() {
		return codigo;
	}
	
	
	
	
	
	
	
	
	
	
	

}
