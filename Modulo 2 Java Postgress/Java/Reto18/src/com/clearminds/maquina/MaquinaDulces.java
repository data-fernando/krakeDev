package com.clearminds.maquina;
import com.clearminds.componentes.Celda;
import com.clearminds.componentes.Producto;
import java.util.ArrayList;


public class MaquinaDulces {
	
	 	private ArrayList<Celda> celdaslista = new ArrayList();
	 	private double saldo;

	   public void agregarCelda(String codigoCd1) {
	      Celda celdaAgregada = new Celda(codigoCd1);
	      this.celdaslista.add(celdaAgregada);
	   }

	   public void mostrarConfiguracion() {
	      System.out.println("metodo Mostar Configuracion");

	      for(int i = 0; i < this.celdaslista.size(); ++i) {
	         Celda celdaAuxiliar = (Celda)this.celdaslista.get(i);
	         System.out.println("Celda: " + celdaAuxiliar.getCodigo());
	      }

	      System.out.println("Saldo : " + this.saldo);
	   }

	   public Celda buscarCelda(String codigoCd) {
	      Celda celdaBuscadaCodigo = null;

	      for(int i = 0; i < this.celdaslista.size(); ++i) {
	         celdaBuscadaCodigo = (Celda)this.celdaslista.get(i);
	         if (celdaBuscadaCodigo.getCodigo().equals(codigoCd)) {
	            return celdaBuscadaCodigo;
	         }
	      }

	      return celdaBuscadaCodigo;
	   }

	   public void cargarProducto(Producto pr1, String codigoCd, int cantidadItems) {
	      Celda celdaRecuperada = null;
	      celdaRecuperada = this.buscarCelda(codigoCd);
	      celdaRecuperada.ingresarProducto(pr1, cantidadItems);
	   }

	   public void mostrarProductos() {
	      System.out.println("MAQUINA DE DULCES");
	      String noTiene = "Sin Producto Asignado!!";
	      Celda celdaSub = null;

	      for(int i = 0; i < this.celdaslista.size(); ++i) {
	         celdaSub = (Celda)this.celdaslista.get(i);
	         System.out.println("******CELDA :" + celdaSub.getCodigo());
	         if (celdaSub.getStock() == 0) {
	            System.out.println(noTiene);
	         } else {
	            System.out.println("Stock : " + celdaSub.getStock());
	            System.out.println("Nombre Producto: " + celdaSub.getProducto().getNombre());
	            System.out.println("Nombre Precio: " + celdaSub.getProducto().getPrecio());
	            System.out.println("Nombre Precio: " + celdaSub.getProducto().getCodigo());
	         }
	      }

	      System.out.println("------------");
	      System.out.println("SALDO: " + this.saldo);
	   }

	   public Producto buscarProductoEnCelda(String codigoCd) {
	      Producto productoGuardado = null;
	      Celda celdaAux = null;

	      for(int i = 0; i < this.celdaslista.size(); ++i) {
	         celdaAux = (Celda)this.celdaslista.get(i);
	         if (celdaAux.getCodigo() == codigoCd) {
	            productoGuardado = celdaAux.getProducto();
	            return productoGuardado;
	         }
	      }

	      return productoGuardado;
	   }

	   public double consultarPrecio(String codigoCd) {
	      double precioAuxiliar = 0.0D;
	      Celda celdaAux = null;

	      for(int i = 0; i < this.celdaslista.size(); ++i) {
	         celdaAux = (Celda)this.celdaslista.get(i);
	         if (celdaAux.getCodigo() == codigoCd) {
	            precioAuxiliar = celdaAux.getProducto().getPrecio();
	            return precioAuxiliar;
	         }
	      }

	      return precioAuxiliar;
	   }

	   public Celda buscarCeldaProducto(String codigoPr) {
	      Celda celdaAux = null;

	      for(int i = 0; i < this.celdaslista.size(); ++i) {
	         celdaAux = (Celda)this.celdaslista.get(i);
	         if (celdaAux.getProducto() != null && celdaAux.getProducto().getCodigo() == codigoPr) {
	            return celdaAux;
	         }
	      }

	      return celdaAux;
	   }

	   public void incrementarProductos(String codigoPr, int itemsIncrementar) {
	      Celda celdaEncontrada = this.buscarCeldaProducto(codigoPr);
	      celdaEncontrada.aumentarStock(itemsIncrementar);
	   }

	   public void vender(String codigoCd) {
	      Celda celdaAux = null;
	      celdaAux = this.buscarCelda(codigoCd);
	      celdaAux.disminuirStock();
	      this.saldo += celdaAux.getProducto().getPrecio();
	      this.mostrarProductos();
	   }

	   public double venderConCambio(String codigoCd, double valorIngresado) {
	      double cambio = 0.0D;
	      Celda celdaAux = null;
	      celdaAux = this.buscarCelda(codigoCd);
	      celdaAux.disminuirStock();
	      this.saldo += valorIngresado;
	      cambio = valorIngresado - celdaAux.getProducto().getPrecio();
	      this.saldo -= cambio;
	      this.mostrarProductos();
	      System.out.println("Cambio :" + cambio);
	      return cambio;
	   }

	   public ArrayList<Producto> buscarMenores(double limite) {
	      ArrayList<Producto> listaMenoresProducto = new ArrayList();
	      Celda celdaAux = null;

	      for(int i = 0; i < this.celdaslista.size(); ++i) {
	         celdaAux = (Celda)this.celdaslista.get(i);
	         if (celdaAux.getProducto() != null && celdaAux.getProducto().getPrecio() <= limite) {
	            listaMenoresProducto.add(celdaAux.getProducto());
	         }
	      }

	      return listaMenoresProducto;
	   }
	   
	   public void configurarMaquina(String codigo1, String codigo2, String codigo3, String codigo4) {
		    this.agregarCelda(codigo1);
		    this.agregarCelda(codigo2);
		    this.agregarCelda(codigo3);
		    this.agregarCelda(codigo4);
		}

}
