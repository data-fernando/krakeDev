saludar=function(){
    let nombre=recuperarTexto("txtNombre")
    let apellido=recuperarTexto("txtApellido")
    let edad=recuperarInt("txtEdad")
    let altura=recuperarFloat("txtAltura")
    console.log(typeof(edad)+" "+typeof(altura))
    
}


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