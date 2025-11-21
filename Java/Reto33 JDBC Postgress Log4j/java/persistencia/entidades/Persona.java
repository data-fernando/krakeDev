package persistencia.entidades;

import java.math.BigDecimal;
import java.util.Date;
//import java.sql.Date;
//import java.sql.Time;

public class Persona {
	
	private String nombre;
	private String apellido;
	private int  edad;
	private double estatura;
	private EstadoCivil estadoCivil;
	private BigDecimal ahorros;
	private Date fecha_nacimiento; //jave util
	private Date hora_registro; //jave util
	private int cedula;

	
	
//	private Time hora_registro; sql
	
//	private Date fecha_actual;
//	private Time hora_actual;
	

	
	public int getCedula() {
		return cedula;
	}

	public void setCedula(int cedula) {
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

	public int getEdad() {
		return edad;
	}

	public void setEdad(int edad) {
		this.edad = edad;
	}

	public double getEstatura() {
		return estatura;
	}

	public void setEstatura(double estatura) {
		this.estatura = estatura;
	}

	public EstadoCivil getEstadoCivil() {
		return estadoCivil;
	}

	public void setEstadoCivil(EstadoCivil estadoCivil) {
		this.estadoCivil = estadoCivil;
	}

	public BigDecimal getAhorros() {
		return ahorros;
	}

	public void setAhorros(BigDecimal ahorros) {
		this.ahorros = ahorros;
	}

	public Date getFecha_nacimiento() {
		return fecha_nacimiento;
	}

	public void setFecha_nacimiento(Date fecha_nacimiento) {
		this.fecha_nacimiento = fecha_nacimiento;
	}

	public Date getHora_registro() {
		return hora_registro;
	}

	
	
	public void setHora_registro(Date hora_registro) {
		this.hora_registro = hora_registro;
	}


	public Persona(String nombre, String apellido, int edad, double estatura, EstadoCivil estadoCivil,
			BigDecimal ahorros) {
		super();
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = edad;
		this.estatura = estatura;
		this.estadoCivil = estadoCivil;
		this.ahorros = ahorros;
		

		
				
	}

	public Persona() {
		super();
	}
	
	
	
	
	
	
	
	

}
