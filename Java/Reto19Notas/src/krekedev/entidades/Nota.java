package krekedev.entidades;

public class Nota {
	private Materia materia_Nota;
	private double calificacion;
	
	@Override
	public String toString() {
		return "\n[Nota=" + materia_Nota + ", calificacion=" + calificacion + "]\n";
	}
	
	public void mostrar() {
		System.out.println("\nMostrar nota\n"+toString());
	}
	
	

	public void setMateria_Nota(Materia materia_Nota) {
		this.materia_Nota = materia_Nota;
	}

	public void setCalificacion(double calificacion) {
		this.calificacion = calificacion;
	}

	public Materia getMateria_Nota() {
		return materia_Nota;
	}

	public double getCalificacion() {
		return calificacion;
	}

	public Nota(Materia materia_Nota, double calificacion) {
		super();
		this.materia_Nota = materia_Nota;
		this.calificacion = calificacion;
		
		
	}
	
	
	
	
	
	
	
	
	
	
}
