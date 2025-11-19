package com.krakedev.ejemploMavenFer;
//corregir la invocacion del paquete


import org.apache.logging.log4j.LogManager;
//importamos la de apache
import org.apache.logging.log4j.Logger;

public class Admin {
	//log manager de apache
//	private Logger logger=LogManager.getLogger(getClass());
	private static Logger logger=LogManager.getLogger(Admin.class);
	
	
	public void agregar() {
		//orden ascendente
	    logger.trace("Mensaje de trace");   // nivel m�s bajo
	    logger.debug("Mensaje de debug");   // depuraci�n
	    logger.info("Mensaje de info");     // informativo
	    logger.warn("Mensaje de warn");     // advertencia
	    logger.error("Mensaje de error");   // error
	    // logger.fatal("Mensaje de fatal"); // opcional, error cr�tico
	    
	    //dependiendo del xml es igual o superior al nivel que coloquemos
	    //Root level="warn"
	}


}
