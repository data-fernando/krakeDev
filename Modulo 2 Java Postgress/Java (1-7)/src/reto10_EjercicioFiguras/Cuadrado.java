package reto10_EjercicioFiguras;

public class Cuadrado {
	
	private int lado;
	
	
	
	
	public int calcularPerimetro() {
		int resultado=4*(lado);
		return resultado;
		
	}
	
	public int calcularArea() {
		int resultado=lado*lado;
		return resultado;
	}

	public int getLado() {
		return lado;
	}

	public void setLado(int lado) {
		this.lado = lado;
	}

	
	
	//agregar el constructor
	
	public Cuadrado(int lado) {
		super();
		this.lado = lado;
	}
	
	
	
	
	

}
