package cmc.evaluacion.entidades;

import java.util.ArrayList;

import cmc.evaluacion.servicios.CalculadoraAmortizacion;

public class Banco {
	
	ArrayList<Prestamo> prestamos= new ArrayList<Prestamo>();
	ArrayList<Cliente> clientes=new ArrayList<Cliente>();
	
	
	

	public Cliente buscarPorCedula(String cedula_Buscar) {
		
		Cliente clienteEntontrado=null;
		
		for(Cliente clienteActual : clientes) {
			
			if(clienteActual.getCedula().equals(cedula_Buscar)) {
				clienteEntontrado=clienteActual;
			}
			
		}
		
		if(clienteEntontrado==null) {
			System.out.println("Cliente con cedula: "+cedula_Buscar+" no encontrado, se puede agregar");
		}
		
		
		return clienteEntontrado;
		
	}
	
	
	public boolean registrarCliente(Cliente cliente_aAgregar) {
		boolean agregadoCorrectamente=false;
		
		String cedulaCliente=cliente_aAgregar.getCedula();
		
		///busca el cliente
		if(buscarPorCedula(cedulaCliente)==null) {
			clientes.add(cliente_aAgregar);
			agregadoCorrectamente=true;
		}else {
			System.out.println("cliente ya existe: "+cedulaCliente);
		}
		
		
		

		
		return agregadoCorrectamente;
	}


	public ArrayList<Prestamo> getPrestamos() {
		return prestamos;
	}


	public ArrayList<Cliente> getClientes() {
		return clientes;
	}
	
	
//  banco.asignarPrestamo("1234567890", prestamo1);
	
	public void asignarPrestamo(String cedula_Cliente,Prestamo presamo_generado) {
		
		boolean existeCliente=false;
		Cliente clienteEncontrado=buscarPorCedula(cedula_Cliente);
		
		if(clienteEncontrado!=null) {
			existeCliente=true;
			
			///asignar prestamo
		
			CalculadoraAmortizacion.generarTabla(presamo_generado);
			clienteEncontrado.getPrestamosCliente().add(presamo_generado);
			prestamos.add(presamo_generado);
			
			
			
		}else {
			System.out.println("cliente no es del banco, con cedula: "+cedula_Cliente);
		}
		
		
		
	}
	
	
	
//	banco.buscarPrestamos("1234567890por cedula ");
	
	public ArrayList<Prestamo> buscarPrestamos(String cedula){
		
		 Cliente clienteBuscado=buscarPorCedula(cedula);
		 ArrayList<Prestamo> prestamosCliente= new ArrayList<Prestamo>();
		 
		 if(clienteBuscado!=null) {
			 prestamosCliente=clienteBuscado.getPrestamosCliente();
			
		 }else {
			 System.out.println("cliente no encontrado para consultar prestamos");
		 }
		
		 return prestamosCliente;
		 
	}
	

	
	
}
