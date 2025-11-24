package persistencia.utils;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import persistencia.servicios.AdminPersonas;

public class ConexionBDD {
	
//    "jdbc:postgresql://localhost:5432/Base_JDBC_JAVA",
//    "postgres",//USUARIO por defecto 
//    "1234" // contrasenia
	private final static String DRIVER="org.postgresql.Driver";
															//NNOMBRE base de datos
	private final static String URL="jdbc:postgresql://localhost:5432/Base_JDBC_JAVA";
	private final static String USUARIO="postgres";
	private final static String CLAVE="1234";
	private static final Logger LOGGER=LogManager.getLogger(ConexionBDD.class);

	
	
	
	public static Connection conectar() throws Exception {
		
		Connection conexion=null;
		try {
			
			Class.forName(DRIVER);
			conexion=DriverManager.getConnection(URL,USUARIO,CLAVE);
			LOGGER.debug("Conecion a BDD exitosa: BDD "+URL);
			
			
		} catch (Exception e) {
			LOGGER.error("error en la conexxion bdd"+e.getLocalizedMessage());
//			e.printStackTrace();
			///da error si no se agrega trows en el metodo
			throw new Exception("Error de infraestructura, error parametros sql , clave o contrasenia de coneccion");
		
		} 
		
		
		
		return conexion;
	}

}
