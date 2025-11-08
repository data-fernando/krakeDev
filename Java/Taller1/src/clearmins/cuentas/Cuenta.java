package clearmins.cuentas;

public class Cuenta {
	private String iD;
	private String tipo;
	private double saldo;
	
	
	public String getTipo() {
		return tipo;
	}
	
	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	
	public double getSaldo() {
		return saldo;
	}
	
	public void setSaldo(double saldo) {
		this.saldo = saldo;
	}
	
	public String getiD() {
		return iD;
	}

	public Cuenta(String iD) {
		super();
		this.iD = iD;
		this.tipo = "A";
		this.saldo = 0;
	}
	
	
	public Cuenta(String iD, String tipo, double saldo) {
		super();
		this.iD = iD;
		this.tipo = tipo;
		this.saldo = saldo;
	}

	
	@Override
	public String toString() {
		return "Cuenta [iD=" + iD + ", tipo=" + tipo + ", saldo=" + saldo + "]";
	}
	
	public void imprimirConMiEstilo() {
		System.out.println("\n*******\nCuenta\n******\n"+toString());
	}
	
	public void imprimir() {
		System.out.println("*********");
		System.out.println("\nCuentas\n");
		System.out.println("*********");
		System.out.println("\nNumero de cuenta: "+getiD());
		System.out.println("\nTipo: "+getTipo());
		System.out.println("\nSaldo: "+getSaldo());
		System.out.println("\n*********\n");
	}
	
	
	
	
	

	
	
	
	
	
	
	

}
