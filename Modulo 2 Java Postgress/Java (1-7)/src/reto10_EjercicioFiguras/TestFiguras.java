package reto10_EjercicioFiguras;

public class TestFiguras {

	public static void main(String[] args) {

		Rectangulo rect= new Rectangulo();
		
		Cuadrado cuadr=new Cuadrado();
		
		rect.altura=10;
		rect.base=5;
		
		cuadr.lado=40;
		
		System.out.println("\nRectangulo\n");
		System.out.println("un rectangulo de base: "+rect.base+" y altura: "+rect.altura+" con area : "+rect.calcularArea()+", perimetro  : "+rect.calcularPerimetro());
		
		System.out.println("\nCuadrado\n");
		System.out.println("un cuadrado de lado: "+cuadr.lado+" con area : "+cuadr.calcularArea()+", perimetro  : "+cuadr.calcularPerimetro());

		

	}

}
