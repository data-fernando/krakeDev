package reto8.creacion.auto.basico;

public class TestProducto {

	public static void main(String[] args) {
        // Creación
        Producto productoA = new Producto();
        productoA.nombre = "Laptop";
        productoA.descripcion = "Laptop gamer HP";
        productoA.precio = 1200.50;
        productoA.stockActual = 15;

        Producto productoB = new Producto();
        productoB.nombre = "Smartphone";
        productoB.descripcion = "Telefono inteligente ";
        productoB.precio = 899.99;
        productoB.stockActual = 30;

        Producto productoC = new Producto();
        productoC.nombre = "Auriculares";
        productoC.descripcion = "Auriculares inalambricos ";
        productoC.precio = 199.99;
        productoC.stockActual = 50;

        System.out.println("Creacion: \n");
        System.out.println("Nombre: " + productoA.nombre + ", \nDescripcion: " + productoA.descripcion + ", \nPrecio: " + productoA.precio + ", \nStock: " + productoA.stockActual+"\n");
        System.out.println("Nombre: " + productoB.nombre + ", \nDescripcion: " + productoB.descripcion + ", \nPrecio: " + productoB.precio + ", \nStock: " + productoB.stockActual+"\n");
        System.out.println("Nombre: " + productoC.nombre + ", \nDescripcion: " + productoC.descripcion + ", \nPrecio: " + productoC.precio + ", \nStock: " + productoC.stockActual+"\n");
        System.out.println("\n****************\n");
        // Modificación
        productoA.nombre = "Laptop Pro";
        productoB.nombre = "Smartphone Ultra";
        productoC.nombre = "Auriculares Max";

        System.out.println("\nModificacion: \n");
        System.out.println("Nombre: " + productoA.nombre + ", \nDescripcion: " + productoA.descripcion + ", \nPrecio: " + productoA.precio + ", \nStock: " + productoA.stockActual+"\n");
        System.out.println("Nombre: " + productoB.nombre + ", \nDescripcion: " + productoB.descripcion + ", \nPrecio: " + productoB.precio + ", \nStock: " + productoB.stockActual+"\n");
        System.out.println("Nombre: " + productoC.nombre + ", \nDescripcion: " + productoC.descripcion + ", \nPrecio: " + productoC.precio + ", \nStock: " + productoC.stockActual+"\n");
        System.out.println("\n****************\n");
	
	}
	

}
