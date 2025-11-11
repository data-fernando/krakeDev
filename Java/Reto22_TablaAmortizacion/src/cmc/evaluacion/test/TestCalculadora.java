package cmc.evaluacion.test;

import cmc.evaluacion.entidades.Prestamo;
import cmc.evaluacion.servicios.CalculadoraAmortizacion;

public class TestCalculadora {
    public static void main(String[] args) {
        Prestamo prestamo = new Prestamo(5000, 12, 12);

        CalculadoraAmortizacion.generarTabla(prestamo);
        CalculadoraAmortizacion.mostrarTabla(prestamo);
    }
}
