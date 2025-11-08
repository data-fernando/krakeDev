package reto10_EjercicioFiguras;

public class Rectangulo {
	int base;
	int altura;
	
	
	
	public int calcularPerimetro() {
		int resultado=2*(base+altura);
		return resultado;
		
	}
	
	public int calcularArea() {
		int resultado=base*altura;
		return resultado;
		
	}
	
	
	
}
