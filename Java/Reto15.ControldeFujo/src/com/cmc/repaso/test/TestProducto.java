package com.cmc.repaso.test;
import com.cmc.repaso.entidades.Producto;

public class TestProducto {

	public static void main(String[] args) {
		
        Producto p1 = new Producto("Laptop", 1000.0);
        System.out.println("Precio original: " + p1.calcularPrecioPromo(0)); // Sin descuento

        double precioDescuento10 = p1.calcularPrecioPromo(10);
        System.out.println("Precio con 10% de descuento: " + precioDescuento10);

        double precioDescuento100 = p1.calcularPrecioPromo(100);
        System.out.println("Precio con 100% de descuento: " + precioDescuento100);


        p1.setPrecio(-500);
        System.out.println("Precio corregido tras setPrecio(-500): " + p1.calcularPrecioPromo(0));

        p1.setPrecio(0);
        System.out.println("Precio tras setPrecio(0): " + p1.calcularPrecioPromo(0));

        p1.setPrecio(750);
        System.out.println("Nuevo precio tras setPrecio(750): " + p1.calcularPrecioPromo(0));

	}

}
