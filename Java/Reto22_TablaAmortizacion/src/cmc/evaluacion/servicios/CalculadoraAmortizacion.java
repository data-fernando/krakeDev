package cmc.evaluacion.servicios;

import java.util.ArrayList;

import cmc.evaluacion.entidades.Cuota;
import cmc.evaluacion.entidades.Prestamo;

public class CalculadoraAmortizacion {

	
	
	public static double calcularCuota(Prestamo prestamo_calculo) {
		double resultado=0;
		
		double monto=prestamo_calculo.getMonto();
		int plazo=prestamo_calculo.getPlazo();
		double interes=prestamo_calculo.getInteres()/(plazo*100);
		
		
		resultado=(monto*interes)/(1-Math.pow(1+interes,-plazo));
		//potencia
			
		return resultado;
	}
	
	public static void generarTabla (Prestamo prestamo_tabla) {
	    int indice_inicial = 1;
	    int plazo_pretamo = prestamo_tabla.getPlazo();
	    double interes_i = prestamo_tabla.getInteres() / (plazo_pretamo * 100); // interés mensual
	    double monto_prestamoInicial = prestamo_tabla.getMonto();
	    double cuota_fija = calcularCuota(prestamo_tabla);

	    double montoinicial_O_saldofinalAnterior = 0;

	    for (int i = indice_inicial; i <= plazo_pretamo; i++) {
	        double aux_cuota = cuota_fija;
	        double aux_inicio;
	        double aux_interes_i;
	        double aux_capital;
	        double aux_saldo;
	        
	        ////parte critica del algoritmo
	        if (i == 1) {
	            aux_inicio = monto_prestamoInicial;
	        } else {
	            aux_inicio = montoinicial_O_saldofinalAnterior;
	        }

	        aux_interes_i = aux_inicio * interes_i;
	        aux_capital = aux_cuota - aux_interes_i;
	        aux_saldo = aux_inicio - aux_capital;

	        montoinicial_O_saldofinalAnterior = aux_saldo;

	        Cuota cuotaAgregar = new Cuota(i);
	        cuotaAgregar.setCuota(Math.round(aux_cuota*100.0)/100.0);
	        cuotaAgregar.setInicio(Math.round(aux_inicio*100.0)/100.0);
	        cuotaAgregar.setInteres(Math.round(aux_interes_i*100.0)/100.0);
	        cuotaAgregar.setAbonoCapital(Math.round(aux_capital*100.0)/100.0);
	        cuotaAgregar.setSaldo(Math.round(aux_saldo*100.0)/100.0);

	        prestamo_tabla.getCuotas().add(cuotaAgregar);
	       
	    }
	    
					
		
	}
	
	public static void mostrarTabla(Prestamo prestamo_mostrar) {
		ArrayList<Cuota> cuotas_prestamo=prestamo_mostrar.getCuotas();
		for(Cuota cuota_mostrada: cuotas_prestamo) {
			System.out.println("\n");
			System.out.print(cuota_mostrada);
		
		
		}
		
	}
	
	
}
