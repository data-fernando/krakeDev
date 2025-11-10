package krekedev.entidades;

public class Materia {
	private String codigo_materia;
	private String nombre_materia;
	
	
	public String getCodigo_materia() {
		return codigo_materia;
	}
	public String getNombre_materia() {
		return nombre_materia;
		
		
	}
	public Materia(String codigo_materia, String nombre_materia) {
		super();
		this.codigo_materia = codigo_materia;
		this.nombre_materia = nombre_materia;
	}
	@Override
	public String toString() {
		return "[codigo=" + codigo_materia + ", nombre_materia=" + nombre_materia + "]";
	}
	
	
	
	
	
	
	
	
}
