package com.krakedev.evaluacion;

import java.util.ArrayList;



public class Telefono {

	private String numero;
	private String tipo;
	private String estado;
	
	//personal

	
	
	public String getNumero() {
		return numero;
	}
	public String getTipo() {
		return tipo;
	}
	public String getEstado() {
		return estado;
	}
	public Telefono(String numero, String tipo) {
		super();
		this.numero = numero;
		this.tipo = tipo;
		
		//control de vacion 	///validar que no sea null
		String estadoCalculo="E";
		if((numero!=null)&& (tipo!=null)) {
			///validar tipo
			if(validarNumero(numero)&&validarTipo(tipo)) {
				estadoCalculo="C";
			}
		}
		this.estado=estadoCalculo;
	}
	
	public boolean validarNumero(String numero_Validar) {
		boolean condicionCumple=false;
		int tamanio_numero=numero_Validar.length();
		
		if(tamanio_numero==10 && tipo.equalsIgnoreCase("Movil")) {
			condicionCumple=true;
			
		}else if(tamanio_numero==7 && tipo.equalsIgnoreCase("Convencional") ){
			condicionCumple=true;
			
		}else {
			System.out.println("no cumple el numero"+numero_Validar);
		}
		
		
		return condicionCumple;
	}
	
	public boolean validarTipo(String tipo_Validar) {
		boolean condicionCumple=false;
		
		////consicion si es movil
		ArrayList<String> tiposValidos=new ArrayList<String>();
		tiposValidos.add("Movil");
		tiposValidos.add("Convencional");
		
		//verifica si contiene el tipo en la lista
		if(tiposValidos.contains(tipo_Validar)) {
			condicionCumple=true;
		}
		//
		
		
		
		return condicionCumple;
		
		
	}
	
	
	
	
	
}
