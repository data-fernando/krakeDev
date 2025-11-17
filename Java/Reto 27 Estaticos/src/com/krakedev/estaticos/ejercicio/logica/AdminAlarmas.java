package com.krakedev.estaticos.ejercicio.logica;

import java.util.ArrayList;

import com.krakedev.estaticos.ejercicio.entidades.Alarma;

public class AdminAlarmas {
	
	private ArrayList<Alarma> alarmas=new ArrayList<Alarma>();

	
	public void agregarAlarma(Alarma alarmaAgregar) {
		alarmas.add(alarmaAgregar);
		
	}
	
	public ArrayList<Alarma> getAlarma() {
		return alarmas;
	}
	
	
	
	
	

}
