package com.clearminds.test;

import com.clearminds.componentes.Producto;
import com.clearminds.maquina.MaquinaDulces;

public class TestVender {
	
	   public static void main(String[] args) {
		      MaquinaDulces maquina = new MaquinaDulces();
		      maquina.agregarCelda("A");
		      maquina.agregarCelda("B");
		      maquina.agregarCelda("C");
		      maquina.agregarCelda("D");
		      Producto producto = new Producto("PE44", "Chifles", 1.0D);
		      maquina.cargarProducto(producto, "B", 5);
		      Producto producto1 = new Producto("RW71", "Dulces", 0.5D);
		      maquina.cargarProducto(producto1, "A", 8);
		      Producto producto2 = new Producto("WR36", "Galletas", 1.25D);
		      maquina.cargarProducto(producto2, "D", 3);
		      maquina.mostrarProductos();
		      maquina.vender("D");
		   }

}
