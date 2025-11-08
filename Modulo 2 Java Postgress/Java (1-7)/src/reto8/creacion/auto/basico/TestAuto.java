package reto8.creacion.auto.basico;

public class TestAuto {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		// creacion
		Auto auto1 = new Auto();
		auto1.marca="ferrari";
		auto1.anio=2020;
		auto1.precio=1023451;
		
		Auto auto2 = new Auto();
		auto2.marca="pichirilo";
		auto2.anio=1980;
		auto2.precio=10689;
		
		System.out.println("Creacion: \n");
		System.out.println("marca: "+auto1.marca+", \nAnio: "+auto1.anio+", \nPrecio: "+auto1.precio);
		System.out.println("\n****************\n");
		System.out.println("marca: "+auto2.marca+", \nAnio: "+auto2.anio+", \nPrecio: "+auto2.precio);

		//modificar
		auto1.marca="ferrariiii";
		auto2.marca="pichirilooooo";
		
		System.out.println("Modificacion: \n");
		System.out.println("marca: "+auto1.marca+", \nAnio: "+auto1.anio+", \nPrecio: "+auto1.precio);
		System.out.println("\n****************\n");
		System.out.println("marca: "+auto2.marca+", \nAnio: "+auto2.anio+", \nPrecio: "+auto2.precio);
		
		
		
		
		
	}

}
