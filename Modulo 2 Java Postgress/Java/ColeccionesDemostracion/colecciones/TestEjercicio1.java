package com.krakedev.colecciones;

import java.util.ArrayList;

public class TestEjercicio1 {

	public static void main(String[] args) {
		
		ArrayList<String> cadenas;
		
		cadenas=new ArrayList<String>();
		String valorRecuperado;
		
		
		//equivalente en javascript seria length
		
		
		System.out.println("tamanio de la lista: "+cadenas.size());
		
		// equivalente seria el push
		cadenas.add("uno"); //0
		cadenas.add("dos"); //1
		
		System.out.println("tamanio de la lista: "+cadenas.size());
		
		//obtener un elemento del arreglo[i]
		valorRecuperado=cadenas.get(1);
		System.out.println("Valor recuperado es: "+valorRecuperado);
		
		
		String cadenaActual;
		for(int i= 0;i<cadenas.size();i++) {
				cadenaActual=cadenas.get(i);
				System.out.println("cadena 'for': "+cadenaActual);
				
			
		}
		
		
		
		
		
		

		

	}

}
