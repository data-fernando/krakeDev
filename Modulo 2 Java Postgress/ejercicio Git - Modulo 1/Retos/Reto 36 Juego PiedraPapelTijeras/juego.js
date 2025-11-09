let puntosJugador=0
let puntosPC=0
let puntosEmpate=0

jugar=function(seleccionado){
    let elementoPC=generarElemento()
    let rutaPC=generarRuta(elementoPC)
    mostrarImagen("imgPC",rutaPC)
    let mensajeResultado=""

    let resultado=determinarGanador(seleccionado,elementoPC)

    mostrarTexto("lblSeleccionJugador",seleccionado)

    if(resultado==0){
        mensajeResultado="EMPATE"
        puntosEmpate+=1

    }else if(resultado==1){
        mensajeResultado="GANASTE"
        puntosJugador+=1
    }else if(resultado==2){
        mensajeResultado="PERDISTE"
        puntosPC+=1
    }

    mostrarTexto("lblResultado",mensajeResultado)

    mostrarTexto("lblPuntajeJugador",puntosJugador);
    mostrarTexto("lblPuntajeEmpate",puntosEmpate);
    mostrarTexto("lblPuntajePC",puntosPC);

}



obtenerAleatorio=function(){
    let dadoAleatorio=Math.random()
    let numeroMuktiplicado=dadoAleatorio*3
    let numeroEntero=parseInt(numeroMuktiplicado)+1
    console.log(numeroEntero)

    return numeroEntero
}
generarElemento=function(){
    let elemento=""
    let valor=obtenerAleatorio()

    if(valor===1){
        elemento="piedra"

    }else if(valor===2){
        elemento="papel"
    }else if(valor===3){
        elemento="tijera"

    }
    return elemento

}

determinarGanador=function(eleccionJugador1,eleccionJugador2){
    let resultado

    if(eleccionJugador1==eleccionJugador2){
        resultado=0
    }else if( ( (eleccionJugador1=="piedra") &  !(eleccionJugador2=="papel") ) || ( (eleccionJugador1=="tijera") & !(eleccionJugador2=="piedra") )  || ( (eleccionJugador1=="papel") &  !(eleccionJugador2=="tijera") ) )  {
        resultado=1
    }else{
        resultado=2
    }

    return resultado
}

generarRuta=function(nombre){
    let ruta=""
    if(nombre=="tijera"){
        ruta="imagenes/tijera.png"
    }else if(nombre="papel"){
        ruta="imagenes/papel.png"
    }else if(nombre="piedra"){
        ruta="imagenes/piedra.png"

    }

    return ruta


}

limpiar=function(){
    const valor0=0
    const cadenaVacia=""

    mostrarImagen("imgPC","imagenes/pc.png")

    mostrarTexto("lblPuntajeJugador",valor0)
    mostrarTexto("lblPuntajeEmpate",valor0)
    mostrarTexto("lblPuntajePC",valor0)

    mostrarTexto("lblResultado",cadenaVacia)
    mostrarTexto("lblSeleccionJugador",cadenaVacia)
}