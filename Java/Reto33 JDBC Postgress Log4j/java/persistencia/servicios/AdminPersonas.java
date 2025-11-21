package persistencia.servicios;

import java.math.BigDecimal;
import java.sql.Connection; //coneccionSQL
//import java.sql.Date;


import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import persistencia.entidades.EstadoCivil;
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
	
	
	//consulta BDD
	public static ArrayList<Persona> buscarPerX_NombreBDD(String nombreA_Buscar) throws Exception {
			ArrayList<Persona> personas=new ArrayList<Persona>();
			
			Connection coneccionUso = null;
		    PreparedStatement ps = null;
		    ResultSet rs=null;
		    
			
		    try {
		    	coneccionUso = ConexionBDD.conectar();
		    	ps=coneccionUso.prepareStatement(
		    			"select * from persona where nombre like ?"
		    			);
		    	
		    	ps.setString(1, "%"+nombreA_Buscar+"%");
		    	rs=ps.executeQuery();
		    	
//		    	if(rs.next()) {
//		    		//// ejecutar este if si se consulta con clave primaria
//		    	}
		    	
		    	while(rs.next()) {
		    		String nombre =rs.getString("nombre");
		    		int cedula=rs.getInt("codigo");
		    		Persona p=new Persona();
		    		p.setCedula(cedula);
		    		p.setNombre(nombre);
		    		personas.add(p);
		    	}
		    	
		    	
		    }catch  (Exception e)  {
		    	
		        LOGGER.error("error al consultar Personas", e.getMessage());
		        throw new Exception("error al consultar Personas");
		    	
		    	
		    }finally {
		    	
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
		    
			
			return personas;
			
	}
	
	
	public static ArrayList<Persona> buscarMenores_EdadBDD(int edad_buscar) throws Exception {
		ArrayList<Persona> personas=new ArrayList<Persona>();
		
		Connection coneccionUso = null;
	    PreparedStatement ps = null;
	    ResultSet rs=null;
	    
		
	    try {
	    	coneccionUso = ConexionBDD.conectar();
	    	ps=coneccionUso.prepareStatement(
	    			"select * from persona where edad < ?"
	    			);
	    	
	    	ps.setInt(1, edad_buscar);
	    	rs=ps.executeQuery();
	    	
//	    	if(rs.next()) {
//	    		//// ejecutar este if si se consulta con clave primaria
//	    	}
	    	
	    	while(rs.next()) {
	    		//recuperar nombres de las columnas
	    		String nombre =rs.getString("nombre");
	    		int edad=rs.getInt("edad");
	    		int cedula=rs.getInt("codigo");
	    		String apellido =rs.getString("apellido");
	    		
	    		
	    		Persona p=new Persona();
	    		p.setCedula(cedula);
	    		p.setNombre(nombre);
	    		p.setApellido(apellido);
	    		p.setEdad(edad);
	    		personas.add(p);
	    	}
	    	
	    	
	    }catch  (Exception e)  {
	    	
	        LOGGER.error("error al consultar Personas por edad", e.getMessage());
	        throw new Exception("error al consultar Personas");
	    	
	    	
	    }finally {
	    	
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
	    
		
		return personas;
		
}

	
	public static Persona buscarX_PrimaryKey(int codigo_persona) throws Exception {
		Persona persona_encontrada=new Persona();
		
		Connection coneccionUso = null;
	    PreparedStatement ps = null;
	    ResultSet rs=null;
	    
	    try {
	    	coneccionUso = ConexionBDD.conectar();
	    	ps=coneccionUso.prepareStatement(
	    			"select * from persona where codigo = ?;"
	    			);
	    	
	    	ps.setInt(1, codigo_persona);
	    	rs=ps.executeQuery();
	    	
	    	LOGGER.info("antes de rs next");
	    	
	    	if(rs.next()) {
	    		//manejar tipo money de la base de datos
	    		//Seria crear una libreria para convertir money a big int
	    		
		    		String ahorrosStr = rs.getString("ahorros"); // devuelve "0,00 €"
		    		// limpiar el formato local
		    		ahorrosStr = ahorrosStr.replace("€", "").replace(",", ".").trim();
		    		BigDecimal ahorros_valido = new BigDecimal(ahorrosStr);
		    	persona_encontrada.setAhorros(ahorros_valido);

	    		
	    		persona_encontrada.setApellido(rs.getString("apellido"));
	    		persona_encontrada.setCedula(rs.getInt("codigo"));
	    		persona_encontrada.setEdad(rs.getInt("edad"));
	    		persona_encontrada.setEstadoCivil(new EstadoCivil(rs.getString("estado_cv"),null));
	    		persona_encontrada.setEstatura(rs.getDouble("estatura"));
	    		persona_encontrada.setFecha_nacimiento(null);
	    		persona_encontrada.setNombre(rs.getString("nombre"));
	    		persona_encontrada.setHora_registro(null);
	    		
	    	}
	    	
	    	LOGGER.info("consulta por Primary key exitosa");
	    	
	    	
	    }catch  (Exception e)  {
	    	e.printStackTrace();
	        LOGGER.error("\nerror al consultar Persona por primarykey", e.getMessage()+"\n");
	
	        throw new Exception("error al consultar Persona por primarykey");
	    	
	    	
	    }finally {
	    	
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
	    
		
		return persona_encontrada;
		
}
	
	
	
}
