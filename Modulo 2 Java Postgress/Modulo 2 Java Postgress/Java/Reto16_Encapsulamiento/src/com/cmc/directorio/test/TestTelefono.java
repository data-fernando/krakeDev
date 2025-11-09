package com.cmc.directorio.test;
import com.cmc.directorio.entidades.AdminTelefono;
import com.cmc.directorio.entidades.Telefono;


public class TestTelefono {

	public static void main(String[] args) {
		System.out.println("***EJERCICIO 1***\n");
		System.out.println("***TEST Telefono***");
		
		Telefono tel=new Telefono("movi", "0994123412", 10);
		
		System.out.println(tel.toString());
		
		
		System.out.println("***TEST Telefono 2***");
		
		AdminTelefono adTel=new AdminTelefono();
		adTel.activarMensajeria(tel);
		System.out.println(tel.toString());
		
		System.out.println("\n\n***EJERCICIO 2***\n");
		
		Telefono tel2=new Telefono("movi", "0999153412", 13);
		Telefono tel3=new Telefono("claro", "0999874412", 12);
		Telefono tel4=new Telefono("cnt", "0994126578", 11);
		
		System.out.println("conteo dentro de :"+tel.getOperadora()+", "+tel2.getOperadora()+", "+tel3.getOperadora()+", "+tel4.getOperadora()+"\nes:");
		System.out.println(adTel.contarMovi(tel, tel2, tel3, tel4));
	
		System.out.println("\n\n***EJERCICIO 3***\n");
		
		
		
	}

}
