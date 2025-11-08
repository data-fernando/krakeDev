package com.clearminds.componentes;

public class Producto {
	
	   private String nombre;
	   private double precio;
	   private String codigo;

	   public Producto(String codigo, String nombre, double precio) {
	      this.nombre = nombre;
	      this.precio = precio;
	      this.codigo = codigo;
	   }

	   public void incrementarPrecio(int entero) {
	      double incremento = 1.0D + (double)entero * 0.01D;
	      this.precio *= incremento;
	   }

	   public void disminuirPrecio(double decimal) {
	      this.precio -= decimal;
	   }

	   public double getPrecio() {
	      return this.precio;
	   }

	   public void setPrecio(double precio) {
	      this.precio = precio;
	   }

	   public String getNombre() {
	      return this.nombre;
	   }

	   public String getCodigo() {
	      return this.codigo;
	   }

}
