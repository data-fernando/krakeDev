package com.clearminds.test;

import com.clearminds.componentes.Producto;

public class TestProducto {

	   public static void main(String[] args) {
		      Producto producto = new Producto("KE34", "Papitas", 0.85D);
		      System.out.println("C\u00f3digo:" + producto.getCodigo());
		      System.out.println("Nombre:" + producto.getNombre());
		      System.out.println("Precio:" + producto.getPrecio());
		      System.out.println("*************************************");
		      producto.setPrecio(0.9D);
		      System.out.println("Nuevo Precio:" + producto.getPrecio());
		      producto.incrementarPrecio(50);
		      System.out.println("Precio incrementado:" + producto.getPrecio());
		      producto.disminuirPrecio(0.35D);
		      System.out.println("Precio disminuido:" + producto.getPrecio());
		   }
}
