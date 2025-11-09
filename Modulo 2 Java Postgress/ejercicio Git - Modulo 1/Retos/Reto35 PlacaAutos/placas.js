probarFuncion=function(){

    placa=recuperarTexto("txtPlaca") 
    mensajeError=validarEstructura(placa)

    mostrarTexto("lblMensaje",mensajeError)



}

