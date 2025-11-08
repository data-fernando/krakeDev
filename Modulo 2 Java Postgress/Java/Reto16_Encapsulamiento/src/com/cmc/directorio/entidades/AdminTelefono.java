package com.cmc.directorio.entidades;

public class AdminTelefono {

	public void activarMensajeria(Telefono tele) {
		if(tele.getOperadora()=="movi") {
			
			tele.setTieneWhatsapp(true);
			
		}
		
	}
	
	public int contarMovi(Telefono tele1,Telefono tele2,Telefono tele3,Telefono tele4) {
		
		int conteoMovi=0;
				
		if(tele1.getOperadora()=="movi") {
			conteoMovi++;
		}
		if(tele2.getOperadora()=="movi") {
			conteoMovi++;
		}
		if(tele3.getOperadora()=="movi") {
			conteoMovi++;
		}
		if(tele4.getOperadora()=="movi") {
			conteoMovi++;
		}
		
		
		
		return conteoMovi;
		
	}
}
