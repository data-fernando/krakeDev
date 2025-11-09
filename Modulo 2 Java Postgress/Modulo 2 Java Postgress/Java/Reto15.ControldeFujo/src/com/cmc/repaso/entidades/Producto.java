package com.cmc.repaso.entidades;

public class Producto {
	
	private String nombre;
	private double precio;
	
	
	public Producto(String nombre, double precio) {
		super();
		this.nombre = nombre;
		this.precio = precio;
	}


	public void setPrecio(double precio) {
		if(precio<0) {

			precio*=-1;			
		}
		
		this.precio = precio;
		
		
	}
	
	public double calcularPrecioPromo(double porcentajeDescuento) {
		double resultado=(1-(porcentajeDescuento/100))*precio;
		return resultado;
	}


	@Override
	public String toString() {
		return "Producto [nombre=" + nombre + ", precio=" + precio + "]";
	}
	
	
	
	
	
}
