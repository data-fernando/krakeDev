package reto10_EjercicioFiguras;

public class Rectangulo {
	private int base;
	private int altura;
	
	
	
	public int calcularPerimetro() {
		int resultado=2*(base+altura);
		return resultado;
		
	}
	
	public int calcularArea() {
		int resultado=base*altura;
		return resultado;
		
	}

	public int getBase() {
		return base;
	}

	public void setBase(int base) {
		this.base = base;
	}

	public int getAltura() {
		return altura;
	}

	public void setAltura(int altura) {
		this.altura = altura;
	}
	
	
	
	
	
}
