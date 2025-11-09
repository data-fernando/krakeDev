let notas=[]
let promedio=0

agregarElementos=function(){
    notas.push(5)
    notas.push(10)
    console.log(notas.length)
    recorrerArreglo()
}


agregarNota=function(nota){
    notas.push(nota)

}


probarAgregar=function(){
    let notarecuperada=recuperarTexto("txtNota")
    // sale error por que se llama funcion con el . , no es necesario
    // notas.agregarNota(notarecuperada)
    agregarNota(notarecuperada)
    console.log("arreglo: "+notas)

    recorrerArreglo()
}

calcularPromedio=function(){
    let notaRecorrido=notas
    let tamanio=notaRecorrido.length
    let suma=0

    for(i=0;i<tamanio;i++){
        notaActual=notaRecorrido[i]
        suma+=notaActual
    }

    promedio=suma/tamanio

    mostrarTexto("lblPromedio",promedio)

    return promedio
}

recorrerArreglo=function(){
    let notaRecorrido=notas
    let tamanio=notaRecorrido.length
    let arreglo=""


    for(i=0;i<tamanio;i++){
        arreglo+=" "+notaRecorrido[i]
        
    }

    console.log("arreglo es : "+arreglo)

    mostrarTexto("lblArreglo",arreglo)

}


