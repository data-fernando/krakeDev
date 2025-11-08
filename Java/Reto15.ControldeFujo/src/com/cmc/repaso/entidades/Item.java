package com.cmc.repaso.entidades;

public class Item {

	private String nombre;
	private int productosActuales;
	private int productosDevueltos;
	private int productosVendidos;
	
	
	
	@Override
	public String toString() {
		return "Item [nombre=" + nombre + ", \nproductosActuales=" + productosActuales + ", productosDevueltos="
				+ productosDevueltos + ", productosVendidos=" + productosVendidos + "]";
	}
	

	public Item(String nombre, int productosActuales) {
		super();
		this.nombre = nombre;
		this.productosActuales = productosActuales;
	}



	public void imprimir() {
		System.out.println("Imprimir ()");
		System.out.println(toString()+"\n");
		
		
	}
	
	public void vender(int productos_Vendidos) {
		productosActuales-=productos_Vendidos;
		productosVendidos+=productos_Vendidos;

	}
	
	public void devolver(int productos_Devueltos) {
		productosActuales+=productos_Devueltos;
		productosDevueltos+=productos_Devueltos;
		productosVendidos-=productos_Devueltos;

	}
	
	
}
