package reto09.calculadora;

public class Calculadora {
	
	
	
	public double multiplicar(double valor1,double valor2) {
		double resultado=valor1*valor2;
		
		return resultado;
		
	}
	
	public double dividir(double dividendo,double divisor) {
		double resultado=dividendo/divisor;
		
		return resultado;
		
	}
	
	public double promediar(double valor1,double valor2,double valor3) {
		double resultado=(valor1+valor2+valor3)/3;
		
		return resultado;
		
	}
	
	public void mostrarResultado() {
		
		System.out.println("Ahora no joven sali al almuerzo");
		
	}
	
	
	
	
	
	
	
	
	
}
