package com.cmc.repaso.test;
import com.cmc.repaso.entidades.*;

public class TestValidacion {

	public static void main(String[] args) {
		
		Validacion validacion1=new Validacion();
		double montoPrueba=15;
		
		Validacion validacion2=new Validacion();
		
		double montoPrueba2=-4;
		
		System.out.println("/n el reultado de: "+montoPrueba+" es : "+validacion1.validarMonto(montoPrueba));

		System.out.println("/n el reultado de: "+montoPrueba2+" es : "+validacion2.validarMonto(montoPrueba2));
	}

}
