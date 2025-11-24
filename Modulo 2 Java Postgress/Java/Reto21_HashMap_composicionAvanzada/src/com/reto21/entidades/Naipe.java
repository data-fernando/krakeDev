package com.reto21.entidades;

import java.util.ArrayList;

public class Naipe {
	
	private ArrayList<Numero> numerosPosibles=new ArrayList<Numero>();
	private ArrayList<Carta> cartas=new ArrayList<Carta>();
	//ejercicio4
	
	
	
	
	
	public Naipe() {
//		super();
		//carla y valor A
		numerosPosibles.add(new Numero("A",1));
		/// del 2 al 13 
		for (int i = 2; i <= 10; i++) {
		    numerosPosibles.add(new Numero(String.valueOf(i), i));
		}
		numerosPosibles.add(new Numero("J",10));
		numerosPosibles.add(new Numero("Q",10));
		numerosPosibles.add(new Numero("K",10));
		
		///conbinacion
		Palos palos=new Palos();
		///
		for (Numero numeroActual:numerosPosibles ) {
			cartas.add(new Carta(numeroActual,palos.getCorazonNegro()));
			
		}
		
		for (Numero numeroActual:numerosPosibles ) {
			cartas.add(new Carta(numeroActual,palos.getCorazonRojo()));
		}
		
		for (Numero numeroActual:numerosPosibles ) {
			cartas.add(new Carta(numeroActual,palos.getDiamante()));
			
		}
		
		for (Numero numeroActual:numerosPosibles ) {
			cartas.add(new Carta(numeroActual,palos.getTrebol()));
			
		}
		
		
		System.out.println("numero de cartas Naipe : "+cartas.size());
		
	}
	
	public ArrayList<Carta> barajar(){
		ArrayList<Carta> auxiliar=new ArrayList<Carta>();
		
		//Aleatorio 1
		for(int i=0;i<=100;i++) {
			int numeroAletorio=Random.obtenerPosicion(); ///numero aleatorio de 1 a 52
			Carta cartaActualBArajar=cartas.get(numeroAletorio);
			
				if(cartaActualBArajar.getEstado().equals("N")) {
					////no se esta copiando en nuevo valor, se modifica la misma carta del arreglos de cartas
					cartaActualBArajar.setEstado("C");
					auxiliar.add(cartaActualBArajar);		
	
			}
		}
		//verificar las ultumas en N
		for(Carta cartaRestante:cartas) {
			if(cartaRestante.getEstado().equals("N")) {
				cartaRestante.setEstado("C");
				auxiliar.add(cartaRestante);	
			}
		}
		
		return auxiliar;
	}
	
	
	
	

}
