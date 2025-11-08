package reto09.calculadora;

public class TestCalculadora {

	public static void main(String[] args) {
		
		double numero1=50;
		double numero2=10;
		double numero3=20;
		
		Calculadora calcu= new Calculadora();
		
		System.out.println("Calculadora\n");
		
		System.out.println("Multiplicar\n");
		System.out.println("multiplicacion de: "+numero1+" por "+numero2+" es: "+calcu.multiplicar(numero2, numero2)+"\n");
		
		System.out.println("Dividir\n");
		System.out.println("division de: "+numero1+" por "+numero2+" es: "+calcu.dividir(numero1, numero2)+"\n");
		
		System.out.println("Promediar\n");
		System.out.println("division de: "+numero1+", "+numero2+" y "+numero3+" es: "+calcu.promediar(numero1, numero2, numero3)+"\n");
		
		System.out.println("Mostrar Resultado:\n");
		calcu.mostrarResultado();

		
		
		
		

	}

}
