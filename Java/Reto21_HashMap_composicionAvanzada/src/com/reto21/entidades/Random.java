package com.reto21.entidades;

public class Random {

	public static int obtenerPosicion() {
		
		int numero = (int)(Math.random() * 51) + 1;
		
		return numero;
	}
}
