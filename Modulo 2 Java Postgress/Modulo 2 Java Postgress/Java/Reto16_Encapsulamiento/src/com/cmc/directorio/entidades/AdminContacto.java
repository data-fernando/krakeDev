package com.cmc.directorio.entidades;

public class AdminContacto {
	
	public Contacto buscarMasPesado(Contacto cont1,Contacto cont2) {
		Contacto contactoMasPesado=null;
		if(cont1.getPeso()>cont2.getPeso()) {
			contactoMasPesado=cont1;
		}else if(cont1.getPeso()<cont2.getPeso()) {
			contactoMasPesado=cont2;
		}
		
		return contactoMasPesado;
		
	}
	
	public boolean compararOperadoras(Contacto cont1,Contacto cont2) {
		boolean esMismaOperadora=false;
		
		if(cont1.getTelefono().getOperadora()==cont2.getTelefono().getOperadora()) {
			esMismaOperadora=true;
		}
		
		return esMismaOperadora;
		
	}
	
	public void activarUsuario(Contacto contactoActivar) {
		if(contactoActivar.getTelefono().isTieneWhatsapp()==true) {
			contactoActivar.setEsActivo(true);
			
		}
		
		
	}
	
	
	

}
