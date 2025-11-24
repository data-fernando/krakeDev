package cmc.evaluacion.entidades;

public class Cuota {
	
	private int numero;
	
	private double cuota,capital,inicio,interes,abonoCapital,saldo;
	
	

	public double getCuota() {
		return cuota;
	}

	public void setCuota(double cuota) {
		this.cuota = cuota;
	}

	public double getCapital() {
		return capital;
	}

	public void setCapital(double capital) {
		this.capital = capital;
	}

	public double getInicio() {
		return inicio;
	}

	public void setInicio(double inicio) {
		this.inicio = inicio;
	}

	public double getAbonoCapital() {
		return abonoCapital;
	}

	public void setAbonoCapital(double abonoCapital) {
		this.abonoCapital = abonoCapital;
	}

	public double getSaldo() {
		return saldo;
	}

	public void setSaldo(double saldo) {
		this.saldo = saldo;
	}
	
	

	public double getInteres() {
		return interes;
	}

	public void setInteres(double interes) {
		this.interes = interes;
	}

	public Cuota(int numero) {
		super();
		this.numero = numero;
	}

	@Override
	public String toString() {
		return "\n\t"+numero+ " |\t" + cuota + " |\t" +inicio + " |\t" + abonoCapital + " |\t" + saldo;
	}
	
	public void mostrarPrestamo() {
		System.out.println(toString());
		
	}


	
	

}
