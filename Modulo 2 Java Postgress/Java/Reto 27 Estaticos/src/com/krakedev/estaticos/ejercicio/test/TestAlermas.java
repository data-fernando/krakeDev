package com.krakedev.estaticos.ejercicio.test;

import com.krakedev.estaticos.ejercicio.entidades.Alarma;
import com.krakedev.estaticos.ejercicio.logica.AdminAlarmas;
import com.krakedev.estaticos.ejercicio.utils.DiasSemana;

public class TestAlermas {

	public static void main(String[] args) {

		
		Alarma a1=new Alarma(DiasSemana.LUNES, 7, 30);
		
		Alarma a2=new Alarma(DiasSemana.MARTES, 5, 15);
		
		Alarma a3=new Alarma(DiasSemana.DOMINGO, 6, 0);
		
		AdminAlarmas ad=new AdminAlarmas();
		
		ad.agregarAlarma(a1);
		ad.agregarAlarma(a2);
		ad.agregarAlarma(a3);
		
		System.out.println(ad.getAlarma());
		
		
		
		
		
		
	}

}
