package krekedev.entidades;

import java.util.ArrayList;


public class Curso {
	//instanciar siempre la lista para que no de null
	private ArrayList<Estudiante> listaEstudiante=new ArrayList<Estudiante>()  ;
	
	
	
	public Estudiante buscarEstudiantePorCedula(String cedula_busqueda){
		Estudiante personaEncontrada;
		
		
		for(int i=0;i<listaEstudiante.size();i++) {
			personaEncontrada=listaEstudiante.get(i);
			
			//Metodo content Equals para comparar strings :: String.equals(variableString)
			// caso contrario solo camparara su refeerencia a memoria
			if(personaEncontrada.getCedula().contentEquals(cedula_busqueda)) {
				return personaEncontrada;
			}
		}
		
		return null;
		
	}
	
	public void matricularEstudiante(Estudiante estudianteA_Matricular) {
		
		Estudiante estudianteBuscadoResultado=buscarEstudiantePorCedula(estudianteA_Matricular.getCedula());
		
		if(estudianteBuscadoResultado==null) {
			listaEstudiante.add(estudianteA_Matricular);
		}
		
		
	}
	
	
	public double calcularPromedioCurso() {
		double sumatoria=0;
		int n=0;
		double notaActual;
		
		for(int i=0;i<listaEstudiante.size();i++) {
			notaActual=listaEstudiante.get(i).calcularPromedioNotasEstudiante();
			sumatoria+=notaActual;
			n++;
			
		}
		double resultado=sumatoria/n;
		
		return resultado;

	}
	
	
	
	
	
	
	
	
	
	
	

	public ArrayList<Estudiante> getListaEstudiante() {
		return listaEstudiante;
	}

	public void setListaEstudiante(ArrayList<Estudiante> listaEstudiante) {
		this.listaEstudiante = listaEstudiante;
	}

	@Override
	public String toString() {
		return "[listaEstudiante=" + listaEstudiante + "]";
	} 
	public void mostrar() {
		System.out.println("\nCurso\n"+toString()); 
	}
	
	
	
	
	
	
}
