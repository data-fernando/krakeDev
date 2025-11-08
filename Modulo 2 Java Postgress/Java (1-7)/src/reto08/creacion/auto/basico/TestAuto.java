package reto08.creacion.auto.basico;

public class TestAuto {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		// Creación
		Auto auto1 = new Auto();
		auto1.setMarca("ferrari");
		auto1.setAnio(2020);
		auto1.setPrecio(1023451);

		Auto auto2 = new Auto();
		auto2.setMarca("pichirilo");
		auto2.setAnio(1980);
		auto2.setPrecio(10689);

		System.out.println("Creacion: \n");
		System.out.println("marca: " + auto1.getMarca() + ", \nAnio: " + auto1.getAnio() + ", \nPrecio: " + auto1.getPrecio());
		System.out.println("\n****************\n");
		System.out.println("marca: " + auto2.getMarca() + ", \nAnio: " + auto2.getAnio() + ", \nPrecio: " + auto2.getPrecio());

		// Modificación
		auto1.setMarca("ferrariiii");
		auto2.setMarca("pichirilooooo");

		System.out.println("Modificacion: \n");
		System.out.println("marca: " + auto1.getMarca() + ", \nAnio: " + auto1.getAnio() + ", \nPrecio: " + auto1.getPrecio());
		System.out.println("\n****************\n");
		System.out.println("marca: " + auto2.getMarca() + ", \nAnio: " + auto2.getAnio() + ", \nPrecio: " + auto2.getPrecio());

		
		
		
		
	}

}
