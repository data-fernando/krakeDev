package com.cmc.repaso.test;

import com.cmc.repaso.entidades.*;


public class TestEstudiante {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Estudiante estudianteTest =new Estudiante("Pedro");
		Estudiante estudianteTest2 =new Estudiante("Juan");
		System.out.println("\nEstudiante");
		System.out.println(estudianteTest.toString()+"\n");
		System.out.println(estudianteTest2.toString()+"\n");
		
		System.out.println("\nCalificar\n");
		
		double notaA=10.0;
		double notaB=6.0;
		
		estudianteTest.calificar(notaA);
		System.out.println("\ncon nota: "+notaA+"\n");
		System.out.println(estudianteTest.toString());
		
		estudianteTest2.calificar(notaB);
		System.out.println("\ncon nota: "+notaB+"\n");
		System.out.println(estudianteTest2.toString());
		

	}

}
