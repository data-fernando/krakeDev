jugar=function(){
    // console.log("iniciando")
    let valorMostrado=lanzarDado()
    cambiarTexto("lblNumero",valorMostrado)
    if(valorMostrado>3){
        console.log("es mayor a 3\n GANASTE!")
    }else{
        console.log("es menor O igual 3\n EStas de MALAS!")
    }
}

//Crear funcion llamada lanzar dado

lanzarDado=function(){
    let dadoAleatorio=Math.random()
    let numeroMuktiplicado=dadoAleatorio*6
    let numeroEntero=parseInt(numeroMuktiplicado)+1
    console.log(numeroEntero)

    return numeroEntero
}