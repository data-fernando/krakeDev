

recuperarTexto=function(idComponente){
    let componente
    let valorCaja
    componente=document.getElementById(idComponente)
    valorCaja=componente.value
    return valorCaja;
}



recuperarInt=function(idComponente){

    let compEntero=recuperarTexto(idComponente)
    let valorCaja=parseInt(compEntero)
    return valorCaja
}

recuperarFloat=function(idComponente){

    let compFloat=recuperarTexto(idComponente)
    let valorCaja=parseFloat(compFloat)
    return valorCaja
}

mostrarTexto=function(idComponente,mensaje){
    let componente
    componente=document.getElementById(idComponente);
    componente.innerText=mensaje
}

mostrarImagen=function(idComponente,rutaImage){
    let componente
    componente=document.getElementById(idComponente)
    componente.src=rutaImage
}

mostrarTextoEnCaja=function(idComponente,mensaje){
    let componente=document.getElementById(idComponente)
    componente.value=mensaje

}