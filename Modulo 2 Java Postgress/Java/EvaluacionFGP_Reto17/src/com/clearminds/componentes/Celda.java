package com.clearminds.componentes;

public class Celda {
	
	private Producto producto;
	   private int stock;
	   private String codigo;

	   public Celda(String codigo) {
	      this.codigo = codigo;
	   }

	   public void ingresarProducto(Producto pr1, int stock) {
	      this.producto = pr1;
	      this.stock = stock;
	   }

	   public Producto getProducto() {
	      return this.producto;
	   }

	   public int getStock() {
	      return this.stock;
	   }

	   public String getCodigo() {
	      return this.codigo;
	   }

	   public void setProducto(Producto producto) {
	      this.producto = producto;
	   }

	   public void setStock(int stock) {
	      this.stock = stock;
	   }

	   public void setCodigo(String codigo) {
	      this.codigo = codigo;
	   }

	   public void aumentarStock(int numeroAumentar) {
	      this.stock += numeroAumentar;
	   }

	   public void disminuirStock() {
	      --this.stock;
	   }
	   
}
