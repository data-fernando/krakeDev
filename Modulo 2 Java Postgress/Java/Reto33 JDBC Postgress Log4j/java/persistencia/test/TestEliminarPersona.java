package persistencia.test;

import persistencia.servicios.AdminPersonas;
import persistencia.utils.Convertidor;

public class TestEliminarPersona {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		int codigoPersona_eliminar=1;
		
		 try {

			

			AdminPersonas.eliminarPersonaBDD(codigoPersona_eliminar);
			

		} catch (Exception e) {
			// TODO Auto-generated catch block
//			e.printStackTrace();
			System.out.println("error en el sistema, al eliminar: "+e.getMessage());
			
		}
		
	}

}
