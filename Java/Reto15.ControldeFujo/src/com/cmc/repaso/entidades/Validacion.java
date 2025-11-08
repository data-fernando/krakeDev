package com.cmc.repaso.entidades;

public class Validacion {
	
	public boolean validarMonto(double monto) {
		boolean esValido=false;
		
		if(monto>0) {
			esValido=true;
		}
		
		return esValido;
		
	}

	@Override
	public String toString() {
		return "Validacion []";
	}
	
	

}
