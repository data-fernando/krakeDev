package com.clearminds.test;

import java.util.ArrayList;

import com.clearminds.componentes.Producto;
import com.clearminds.maquina.MaquinaDulces;

public class TestBuscarMenores {
	
	   public static void main(String[] args) {
		      MaquinaDulces maquina = new MaquinaDulces();
		      maquina.agregarCelda("A");
		      maquina.agregarCelda("B");
		      maquina.agregarCelda("C");
		      maquina.agregarCelda("D");
		      Producto producto = new Producto("PE44", "Chifles", 1.0D);
		      maquina.cargarProducto(producto, "A", 5);
		      Producto producto1 = new Producto("RW71", "Dulces", 0.5D);
		      maquina.cargarProducto(producto1, "B", 8);
		      Producto producto2 = new Producto("WR36", "Galletas", 1.25D);
		      maquina.cargarProducto(producto2, "C", 9);
		      maquina.mostrarProductos();
		      double limite = 1.0D;
		      ArrayList<Producto> listaMenoresProductos = maquina.buscarMenores(limite);
		      System.out.println("Numero De productos menores a " + limite + " son " + listaMenoresProductos.size());
		   }

}
