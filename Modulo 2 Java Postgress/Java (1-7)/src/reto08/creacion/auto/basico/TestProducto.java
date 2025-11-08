package reto08.creacion.auto.basico;

public class TestProducto {

	public static void main(String[] args) {
        // Creación
		Producto productoA = new Producto();
		productoA.setNombre("Laptop");
		productoA.setDescripcion("Laptop gamer HP");
		productoA.setPrecio(1200.50);
		productoA.setStockActual(15);

		Producto productoB = new Producto();
		productoB.setNombre("Smartphone");
		productoB.setDescripcion("Telefono inteligente");
		productoB.setPrecio(899.99);
		productoB.setStockActual(30);

		Producto productoC = new Producto();
		productoC.setNombre("Auriculares");
		productoC.setDescripcion("Auriculares inalambricos");
		productoC.setPrecio(199.99);
		productoC.setStockActual(50);

		System.out.println("Creacion: \n");
		System.out.println("Nombre: " + productoA.getNombre() + ", \nDescripcion: " + productoA.getDescripcion() + ", \nPrecio: " + productoA.getPrecio() + ", \nStock: " + productoA.getStockActual() + "\n");
		System.out.println("Nombre: " + productoB.getNombre() + ", \nDescripcion: " + productoB.getDescripcion() + ", \nPrecio: " + productoB.getPrecio() + ", \nStock: " + productoB.getStockActual() + "\n");
		System.out.println("Nombre: " + productoC.getNombre() + ", \nDescripcion: " + productoC.getDescripcion() + ", \nPrecio: " + productoC.getPrecio() + ", \nStock: " + productoC.getStockActual() + "\n");

		System.out.println("\n****************\n");

		// Modificación
		productoA.setNombre("Laptop Pro");
		productoB.setNombre("Smartphone Ultra");
		productoC.setNombre("Auriculares Max");

		System.out.println("\nModificacion: \n");
		System.out.println("Nombre: " + productoA.getNombre() + ", \nDescripcion: " + productoA.getDescripcion() + ", \nPrecio: " + productoA.getPrecio() + ", \nStock: " + productoA.getStockActual() + "\n");
		System.out.println("Nombre: " + productoB.getNombre() + ", \nDescripcion: " + productoB.getDescripcion() + ", \nPrecio: " + productoB.getPrecio() + ", \nStock: " + productoB.getStockActual() + "\n");
		System.out.println("Nombre: " + productoC.getNombre() + ", \nDescripcion: " + productoC.getDescripcion() + ", \nPrecio: " + productoC.getPrecio() + ", \nStock: " + productoC.getStockActual() + "\n");

		System.out.println("\n****************\n");

	
	}
	

}
