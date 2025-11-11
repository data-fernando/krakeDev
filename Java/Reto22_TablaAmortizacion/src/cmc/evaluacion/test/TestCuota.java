package cmc.evaluacion.test;

import cmc.evaluacion.entidades.Prestamo;
import cmc.evaluacion.servicios.CalculadoraAmortizacion;

public class TestCuota {
	
	
    public static void main(String[] args) {
        Prestamo prestamo = new Prestamo(5000, 12, 12);
        double cuota = CalculadoraAmortizacion.calcularCuota(prestamo);
        System.out.println("Cuota: " + cuota);
    }
}
