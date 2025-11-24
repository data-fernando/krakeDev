package com.krakedev.estaticos.ejercicio.utils;

public class Util {
	
	public static String formatearHora(int numero) {
		String retorno="0"+numero;

		
		return retorno;
		
	}
	
	public static String formatearDia(int numero) {
		String retorno="";
		
	    switch (numero) {
        case 0:
            retorno = "lunes";
            break;
        case 1:
            retorno = "martes";
            break;
        case 2:
            retorno = "miércoles";
            break;
        case 3:
            retorno = "jueves";
            break;
        case 4:
            retorno = "viernes";
            break;
        case 5:
            retorno = "sábado";
            break;
        case 6:
            retorno = "domingo";
            break;

    }
	    return retorno;
	    
		
	}
	

}
