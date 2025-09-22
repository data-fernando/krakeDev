saludar=function(){
    let nombre=recuperarTexto("txtNombre")
    let apellido=recuperarTexto("txtApellido")
    let edad=recuperarTexto("txtEdad")
    let altura=recuperarTexto("txtAltura")
    
}


recuperarTexto=function(idComponente){
    let componente
    let valorIngresado
    componente=document.getElementById(idComponente)
    valorIngresado=componente.value
    return valorIngresado;
}



recuperarInt=function(idComponente){

    let compEntero;
    compEntero=document.getElementById(idComponente)
    let entero= parseInt(compEntero.value)
    return entero
}

recuperarFloat=function(idComponente){

    let compFloat;
    compFloat=document.getElementById(idComponente)
    let float= parseFloat(compFloat.value)
    return float
}