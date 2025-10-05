generarNumero=function(){
        let numero=Math.random()*100
        numero=Math.floor(numero)
        return numero 

}

generarAleatorio=function(){
    let aleatorios=[]
    let mensajeError=""
    let cajaNumero=recuperarInt("txtNumeroCaja")

    if(cajaNumero<5 || cajaNumero>20){
        mensajeError=" numero debe ser entre 5 y 20"
    }else{

        for(let i=0;i<cajaNumero;i++){
            let numero=generarNumero
            aleatorios.push(numero)
        }
        


    }

    mostrarTexto("lblMensajeValidacion",mensajeError)
    // console.log("mensaje error "+mensajeError)
    
    // console.log(aleatorios+"\n"+"-------------")

    return aleatorios


}

mostrarResutados=function(arregloNumeros){
    let tamanio=arregloNumeros.length

    codigoInterno="<table><th>ARREGLOS DE NUMEROS</th>"

    for(let i=0;i<tamanio;i++){
        let elemento=generarNumero()
        codigoInterno+="<tr><td>"+elemento+"</td></tr>"
    }

    codigoInterno+="</table>"

    let compSeccionMostrar=document.getElementById("contenidoDinamico")
    compSeccionMostrar.innerHTML=codigoInterno


}

probarFuncion=function(){
    let arreglo=generarAleatorio()

    mostrarResutados(arreglo)


}


