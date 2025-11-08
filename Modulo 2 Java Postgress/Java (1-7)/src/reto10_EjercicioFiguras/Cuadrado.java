package reto10_EjercicioFiguras;

public class Cuadrado {
	
	int lado;
	
	
	
	
	public int calcularPerimetro() {
		int resultado=4*(lado);
		return resultado;
		
	}
	
	public int calcularArea() {
		int resultado=lado*lado;
		return resultado;
	}

}
