package krekedev.entidades;

import java.util.ArrayList;


public class Estudiante {
	private String nombre_Estudiante;
	private String apellido;
	private String cedula;
	//agregado personalmente;
	
	
	
	private ArrayList<Nota> notas_estudiante=new ArrayList<Nota>();
	
	
	public void agregarNota(Nota nota_Agregar) {
		
		  Materia materia = nota_Agregar.getMateria_Nota();
		    String codigoMateria = materia.getCodigo_materia();

		    // Validar si ya existe una nota para esa materia
		    Nota notaExistente = buscarNotaPorCodigo(codigoMateria);
		    if (notaExistente != null) {
		        System.out.println("Ya existe una nota para la materia con código: " + codigoMateria);
		        return;
		    }

		    // Validar rango de calificación
		    double calificacion = nota_Agregar.getCalificacion();
		    if (calificacion < 0 || calificacion > 10) {
		        System.out.println("La calificación está fuera de rango: " + calificacion);
		        return;
		    }

		    // Si pasa ambas validaciones, agregar la nota
		    notas_estudiante.add(nota_Agregar);
		    System.out.println("Nota agregada correctamente.");
		    
	}
	
	
	
	public Nota buscarNotaPorCodigo(String codigo){
		Nota notaEncontrada;
		
		for(int i=0;i<notas_estudiante.size();i++) {
			notaEncontrada=notas_estudiante.get(i);
			
			//Metodo content Equals para comparar strings :: String.equals(variableString)
			// caso contrario solo camparara su refeerencia a memoria
			if(notaEncontrada.getMateria_Nota().getCodigo_materia().contentEquals(codigo)) {
				return notaEncontrada;
			}
		}
		
		return null;
		
	}
	
	
	public void modificarNota(String codigo,double nuevaNota) {
		
		
		   if (nuevaNota < 0 || nuevaNota > 10) {
		        System.out.println("La nueva calificación está fuera de rango: " + nuevaNota);
		        return;
		    }

		    Nota nota = buscarNotaPorCodigo(codigo);
		    if (nota == null) {
		        System.out.println("No se encontró una nota para la materia con código: " + codigo);
		        return;
		    }

		    nota.setCalificacion(nuevaNota);
		    System.out.println("Nota modificada correctamente.");
		
	}
	
	
	public double calcularPromedioNotasEstudiante() {
		double sumatoria=0;
		int n=0;
		Nota notaActual;
		
		for(int i=0;i<notas_estudiante.size();i++) {
			notaActual=notas_estudiante.get(i);
			sumatoria+=notaActual.getCalificacion();
			n++;
			
		}
		double resultado=sumatoria/n;
		
		return resultado;

	}
	
	
	public int buscarIndicePorCodigo(String codigo){
		int indiceDevuelto;
		Nota notaEncontrada;
		
		for(int i=0;i<notas_estudiante.size();i++) {
			notaEncontrada=notas_estudiante.get(i);
			indiceDevuelto=i;
			
			//Metodo content Equals para comparar strings :: String.equals(variableString)
			// caso contrario solo camparara su refeerencia a memoria
			
			if(notaEncontrada.getMateria_Nota().getCodigo_materia().contentEquals(codigo)) {
				return indiceDevuelto;
			}
		}
		
		return -1;
		
	}
	
	

	public String getNombre_Estudiante() {
		return nombre_Estudiante;
	}

	public String getApellido() {
		return apellido;
	}

	public String getCedula() {
		return cedula;
	}

	public ArrayList<Nota> getNotas_estudiante() {
		return notas_estudiante;
	}
	
	///
	
	///
	public void mostrar() {
		System.out.println("\nMostrar Atributos Estidiantes\n"+toString());
	}



	@Override
	public String toString() {
		return "\n[nombre_estudiante=" + nombre_Estudiante + ", cedula=" + cedula
				+ ", notas_estudiante=" + notas_estudiante.toString() + "]\n";
	}



	public Estudiante( String cedula,String nombre_Estudiante, String apellido) {
		super();
		this.nombre_Estudiante = nombre_Estudiante;
		this.apellido = apellido;
		this.cedula = cedula;
	}
	
	
	
	
}
