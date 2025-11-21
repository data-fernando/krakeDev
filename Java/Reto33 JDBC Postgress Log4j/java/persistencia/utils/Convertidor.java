package persistencia.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class Convertidor { 
	private static final String FORMATO_FECHA="yyyy-mm-dd";
	private static final String FORMATO_HORA="HH:mm";
	public static final java.sql.Date FECHA_SQL= new java.sql.Date(System.currentTimeMillis());
	public static final java.sql.Time HORA_SQL= new java.sql.Time(System.currentTimeMillis());
	private static final Logger LOGGER=LogManager.getLogger(Convertidor.class);

	
	
	public static Date convertirA_Date(String fechaEnString) throws Exception {

		SimpleDateFormat sdf=new SimpleDateFormat(FORMATO_FECHA);
		Date fechaDate=null;
		try {
			
			LOGGER.debug("convertir fecha");
			fechaDate=sdf.parse(fechaEnString);
			LOGGER.debug("fecha convertida: "+fechaDate);
			
		} catch (ParseException e) {
//			e.printStackTrace();
			LOGGER.error("corregir el formato de fecha"+e.getMessage());
			throw new Exception("mensaje error: formato fecha no es "+FORMATO_HORA+" pero fue: "+fechaEnString);
		}
		
		return fechaDate;
		
		
	}
	
	public static Date convertirA_Time(String horaEnString) throws Exception {
		
		SimpleDateFormat sdf2=new SimpleDateFormat(FORMATO_HORA);
		Date hora_retorno=null;
		
		try {
			LOGGER.debug("convertir hora");
			hora_retorno=sdf2.parse(horaEnString);
			LOGGER.debug("hora convertida: "+hora_retorno);
			
		} catch (ParseException e) {
//			e.printStackTrace();
			LOGGER.error("corregir el formato de hora"+e.getMessage());

			throw new Exception(" hora no esta en formato: "+FORMATO_HORA+" pero fue: "+horaEnString);
		}
		
		return hora_retorno;
		
	}


}
