package com.cmc.directorio.test;
import com.cmc.directorio.entidades.Contacto;
import com.cmc.directorio.entidades.Telefono;
import com.cmc.directorio.entidades.AdminContacto;

public class TestContactos {

	public static void main(String[] args) {
		
		// muestra ejemplo de instancia
		System.out.println("\n**Ejercicio 1**\n");
		Contacto cont=new Contacto("Mela",20,new Telefono("claro", "098745624", 90),48.36);
		System.out.println(cont.toString());
		
		System.out.println("\n**Ejercicio 2**\n");
		///mas contactos u probar funciones
		///
	    // Crear contactos
	    Telefono tel1 = new Telefono("claro", "098745624", 90);
	    Telefono tel2 = new Telefono("movistar", "0991234567", 85);
	    Telefono tel3 = new Telefono("claro", "0976543210", 95);

	    Contacto cont1 = new Contacto("Mela", 20, tel1, 48.36);
	    Contacto cont2 = new Contacto("Luis", 25, tel2, 52.10);
	    Contacto cont3 = new Contacto("Ana", 30, tel3, 47.80);
	    
	    System.out.println("Lista de contactos:\n");
	    System.out.println(cont1.toString()+"\n");
	    System.out.println(cont2.toString()+"\n");
	    System.out.println(cont3.toString()+"\n");
	    

	    // Instancia de AdminContacto
	    AdminContacto admin = new AdminContacto();
	    
	    
	    // Probar buscarMasPesado
	    Contacto masPesado = admin.buscarMasPesado(cont1, cont2);
	    if (masPesado != null) {
	        System.out.println("El contacto mas pesado entre " + cont1.getNombre() + " y " + cont2.getNombre() + " es: " + masPesado.getNombre());
	    } else { // por si acaso pesen lo mismo
	        System.out.println("Ambos contactos tienen el mismo peso.");
	    }
	    
	    // Probar compararOperadoras
	    boolean resultadoOperadoras=admin.compararOperadoras(cont1, cont3);
	    System.out.println("\n" + cont1.getNombre() + " y " + cont3.getNombre() + " tienen la misma operadora? " + resultadoOperadoras);

	    // Probar activarUsuario
	    System.out.println("Estado antes de activar: " + cont2.es_Activo_Get());
	    admin.activarUsuario(cont2);
	    System.out.println("!! solo se activa si exactamente es 'movi' la operadora "+cont2.getNombre()+" cuya operadora es: "+cont2.getTelefono().getOperadora());
	    System.out.println("Estado después de activar: " + cont2.es_Activo_Get());
		

	}

}
