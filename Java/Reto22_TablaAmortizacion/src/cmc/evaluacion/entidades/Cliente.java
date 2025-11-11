package cmc.evaluacion.entidades;


import java.util.ArrayList; 


public class Cliente {
	
	
	private String cedula;
	private String nombre;
	private String apellido;
	
	
	//agregado por mi cuenta
	//el documento necesita modificar el main
	
	private ArrayList<Prestamo> prestamosCliente=new ArrayList<Prestamo>();

	
	public ArrayList<Prestamo> getPrestamosCliente() {
		return prestamosCliente;
	}
	public void setPrestamosCliente(ArrayList<Prestamo> prestamosCliente) {
		this.prestamosCliente = prestamosCliente;
	}
	
	////
	
	public String getCedula() {
		return cedula;
	}
	public void setCedula(String cedula) {
		this.cedula = cedula;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getApellido() {
		return apellido;
	}
	public void setApellido(String apellido) {
		this.apellido = apellido;
	}
	public Cliente(String cedula, String nombre, String apellido) {
		super();
		this.cedula = cedula;
		this.nombre = nombre;
		this.apellido = apellido;
	}
	@Override
	public String toString() {
		return "Cliente [cedula=" + cedula + ", nombre=" + nombre + ", apellido=" + apellido + "]";
	}
	
	
	public void mostrarCliente() {
		System.out.println(toString());
	}
	
	
	
}
