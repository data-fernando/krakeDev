recorrerCadena=function(cadena){

    let caracter

    for(let posicion=0;posicion<cadena.length;posicion++){
        caracter=cadena.charAt(posicion)
        console.log("paracter "+caracter+" esta en la posicion "+posicion)

    }



}

invertirCadena=function(cadena){

    let caracter
    let tamanioCadena=cadena.length
    let invertido=""

    for(let posicion=tamanioCadena;posicion>=0;posicion--){
        caracter=cadena.charAt(posicion)
        invertido=invertido+caracter
        console.log("paracter "+caracter+" esta en la posicion "+posicion)

    }
    return invertido



}





ejecutarPrueba1=function(){
    let mensaje=recuperarTexto("txtCadena")
    // recorrerCadena(mensaje)
    let mensajeInvertido=invertirCadena(mensaje)
    mostrarTexto("lblMensajeInvertido",mensajeInvertido)
    

}