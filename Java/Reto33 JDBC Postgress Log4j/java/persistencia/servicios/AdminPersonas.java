package persistencia.servicios;

import java.sql.Connection; //coneccionSQL
//import java.sql.Date;


import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.PreparedStatement;
import java.sql.SQLException;


import persistencia.entidades.Persona;
import persistencia.utils.ConexionBDD;

public class AdminPersonas {
	
	private static final Logger LOGGER=LogManager.getLogger(AdminPersonas.class);
	
	public static void insertarPersonaBDD(Persona persona_insertando) throws Exception {
		//se usa base de datos
		
		
		
		Connection coneccionUso=null;
		PreparedStatement ps=null;
		LOGGER.trace("Persona a insertar>>: "+persona_insertando.toString());
		
		try {
			//aqui se abre la conexxion
			
			coneccionUso=ConexionBDD.conectar();
			//codigo para insertar
			ps=coneccionUso.prepareStatement(
										//1			2	 3		4		5				6				7		8	
					"insert INTO persona(nombre,apellido,edad,ahorros,fecha_nacimiento,hora_registro,estado_cv,estatura) "
					+"values (?,?,?,?,?,?,?,?);"
					
					);
			
			ps.setString(1, persona_insertando.getNombre());
			ps.setString(2, persona_insertando.getApellido());
			ps.setInt(3, persona_insertando.getEdad());
			ps.setBigDecimal(4, persona_insertando.getAhorros());
			
//			ps.setDate(5, null);
			//ojo esto es critico: convertir la fecha correctamente de date util a date sql
			ps.setDate(5, new java.sql.Date (persona_insertando.getFecha_nacimiento().getTime()));
			
//			ps.setTime(6,null);
			
			ps.setTime(6, new java.sql.Time(persona_insertando.getHora_registro().getTime()));

			
			//estado cuvil es una clase para java , para el sql convertirlo a String "char"
			ps.setString(7, persona_insertando.getEstadoCivil().getCodigo());
			ps.setDouble(8, 180);
			
//			ps.setDate(9, Convertidor.FECHA_SQL);
			//6 con el sql
//			ps.setTime(10,Convertidor.HORA_SQL);
			
			
			ps.executeUpdate();
			
			LOGGER.info("se inserto correctamente");
			
		}catch (Exception e) {
				//system out en el catch
				LOGGER.error("error al insertar Persona",e);
//				e.printStackTrace();
				throw new Exception("error al insertar Persona");
				
				
		}finally {
			
			///aqui se cierra la coneccion dentro del finally
			try {
				coneccionUso.close();
				LOGGER.info("desconectado correctamente");
				
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				LOGGER.error("error al cerrar la conecion en la consulta",e);
//				e.printStackTrace();
				throw new Exception("error al cerrar la conecion en la consulta");
			}
		}
		
	}
	
	
	public static void actualizarPersonaBDD(Persona persona_actualizando) throws Exception {
	    Connection coneccionUso = null;
	    PreparedStatement ps = null;
	    LOGGER.trace("Persona a actualizar>>: " + persona_actualizando.toString());

	    try {
	        // abrir conexion
	        coneccionUso = ConexionBDD.conectar();

	        // sentencia SQL para actualizar
	        ps = coneccionUso.prepareStatement(
	            "UPDATE persona SET nombre = ?, apellido = ?, edad = ?, ahorros = ?, " +
	            "fecha_nacimiento = ?, hora_registro = ?, estado_cv = ?, estatura = ? " +
	            "WHERE codigo = ?;"
	        );

	        ps.setString(1, persona_actualizando.getNombre());
	        ps.setString(2, persona_actualizando.getApellido());
	        ps.setInt(3, persona_actualizando.getEdad());
	        ps.setBigDecimal(4, persona_actualizando.getAhorros());

	        // convertir fecha correctamente
	        ps.setDate(5, new java.sql.Date(persona_actualizando.getFecha_nacimiento().getTime()));

	        ps.setTime(6, new java.sql.Time(persona_actualizando.getHora_registro().getTime()));

	        ps.setString(7, persona_actualizando.getEstadoCivil().getCodigo());
	        ps.setDouble(8, persona_actualizando.getEstatura());

	        // aqui va el código de persona para el WHERE
	        ps.setInt(9, persona_actualizando.getCedula());

	        ps.executeUpdate();

	        LOGGER.info("se actualizó correctamente");

	    } catch (Exception e) {
	        LOGGER.error("error al actualizar Persona", e);
	        throw new Exception("error al actualizar Persona");
	    } finally {
	        try {
	            if (coneccionUso != null) {
	                coneccionUso.close();
	                LOGGER.info("desconectado correctamente");
	            }
	        } catch (SQLException e) {
	            LOGGER.error("error al cerrar la conexión en la consulta", e);
	            throw new Exception("error al cerrar la conexión en la consulta");
	        }
	    }
	}

	
	public static void eliminarPersonaBDD(int codigo) throws Exception {
	    Connection coneccionUso = null;
	    PreparedStatement ps = null;
	    LOGGER.trace("Persona a eliminar con código>>: " + codigo);

	    try {
	        // abrir conexión
	        coneccionUso = ConexionBDD.conectar();

	        // sentencia SQL para eliminar
	        ps = coneccionUso.prepareStatement(
	            "DELETE FROM persona WHERE codigo = ?;"
	        );

	        // asignar el código al parámetro
	        ps.setInt(1, codigo);

	        int filasAfectadas = ps.executeUpdate();

	        if (filasAfectadas > 0) {
	            LOGGER.info("se eliminó correctamente");
	        } else {
	            LOGGER.warn("no se encontró la persona con el código especificado");
	        }

	    } catch (Exception e) {
	        LOGGER.error("error al eliminar Persona", e);
	        throw new Exception("error al eliminar Persona");
	    } finally {
	        try {
	            if (coneccionUso != null) {
	                coneccionUso.close();
	                LOGGER.info("desconectado correctamente");
	            }
	        } catch (SQLException e) {
	            LOGGER.error("error al cerrar la conexión en la consulta", e);
	            throw new Exception("error al cerrar la conexión en la consulta");
	        }
	    }
	}

	
	
	
}
