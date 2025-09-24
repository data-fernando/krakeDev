sumar=function(num1,num2,num3){
    let sumatoria
    sumatoria=num1+num2+num3
    return sumatoria
}

obtenerInfo=function(nombre,apellido,profesion){
    let resultadoObtenerInfo
    resultadoObtenerInfo=nombre+" "+apellido+" - "+profesion
    return resultadoObtenerInfo

}

mostrarResultado=function(sumando1,sumando2,resultado){
    resultadoMostarResultado="El resultado de sumar "+sumando1+" + "+sumando2+" es "+resultado
    console.log(resultadoMostarResultado)
    

}

hackearNasaEnPelicula=function(){
    //0
    let porcentaje=0
    console.log("Hackeando nasa "+porcentaje+"%")
    //20
    porcentaje=porcentaje+20
    console.log("Hackeando nasa "+porcentaje+"%")
    //40
    porcentaje=porcentaje+20
    console.log("Hackeando nasa "+porcentaje+"%")
    //60
    porcentaje=porcentaje+20
    console.log("Hackeando nasa "+porcentaje+"%")
    //80
    porcentaje=porcentaje+20
    console.log("Hackeando nasa "+porcentaje+"%")
    //90
    porcentaje=porcentaje+10
    console.log("Hackeando nasa "+porcentaje+"%")
    //99
    porcentaje=porcentaje+9
    console.log("Hackeando nasa "+porcentaje+"%")
    //

    console.log("La nasa ha sido hackeada")
}

calcularEdad=function(anio){
    let anioActual
    anioActual=new Date().getFullYear()
    let edad = anioActual-anio
    return edad
}

calcularIVA=function(precioSinIva){
    let precioConIva
    precioConIva=parseInt(precioSinIva)*(1.12)
    
    return precioConIva

}

repasar=function(){
    console.log("Esta función fue creada solo para hacer un ejemplo de una función que no recibe nada y no retorna nada")
}

repasarMas=function(){
    mensaje="En este punto debemos estar super claros en crear funciones"
    return mensaje

}

llamarAtencion=function(nombre,mensaje){
    concatenado=nombre+" "+mensaje+" !!"
    
    alert(concatenado)
    return concatenado
}