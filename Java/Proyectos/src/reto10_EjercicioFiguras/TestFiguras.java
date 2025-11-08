package reto10_EjercicioFiguras;

public class TestFiguras {

	public static void main(String[] args) {
		
		//lamar al constructor de cada una
		
		Rectangulo rect= new Rectangulo(10,5);
		
		Cuadrado cuadr=new Cuadrado(6);
		
//		rect.setAltura(10);
//		rect.setBase(5);
//		
//		cuadr.setLado(40);
		
		
		System.out.println("\nRectangulo\n");
		System.out.println("un rectangulo de base: "+rect.getBase()+" y altura: "+rect.getAltura()+" con area : "+rect.calcularArea()+", perimetro  : "+rect.calcularPerimetro());
		
		System.out.println("\nCuadrado\n");
		System.out.println("un cuadrado de lado: "+cuadr.getLado()+" con area : "+cuadr.calcularArea()+", perimetro  : "+cuadr.calcularPerimetro());

		

	}

}
