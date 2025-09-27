
calcularInteres = function(ingresoAnual) {
    let tasa

    if (ingresoAnual < 300000) {
        tasa = 0.16;
    } else if (ingresoAnual >= 300000 && ingresoAnual < 500000) {
        tasa = 0.15;
    } else if (ingresoAnual >= 500000 && ingresoAnual < 1000000) {
        tasa = 0.14;
    } else if (ingresoAnual >= 1000000 && ingresoAnual < 2000000) {
        tasa = 0.13;
    } else {
        tasa = 0.12; // Para ingresos de 2 millones o más
    }

    return tasa
}


calcularCapacidadPago=function(ingreso,egreso,edad){
    let cuotaMensual
    let diferencia=parseFloat(ingreso)-parseFloat(egreso)

    if(edad>50){
        cuotaMensual=0.3*(diferencia)
    } else if(edad<=50){
        cuotaMensual=0.4*(diferencia)

    }

    return cuotaMensual

}

calcularDescuento = function(precio, cantidad) {
    let tasaMultiploDescuento;

    if (cantidad < 3) {
        tasaMultiploDescuento = 1
    } else if (cantidad >= 3 && cantidad <= 5) {
        tasaMultiploDescuento = 1 - 0.02
    } else if (cantidad >= 6 && cantidad <= 11) {
        tasaMultiploDescuento = 1 - 0.03
    } else if (cantidad >= 12) {
        tasaMultiploDescuento = 1 - 0.04
    }

    let valorDescontado = precio * tasaMultiploDescuento;
    return valorDescontado;
}



determinarColesterolLDL=function(nivelCDL_Usuario){
    let resultadoColesterol
    if(nivelCDL_Usuario<100){
        resultadoColesterol="Nivel Saludable"
    } else{
        resultadoColesterol="Nivel Malo"
    }

    return resultadoColesterol

}

validarClave = function(clave) {
    let validado = false
    let longitudClave = clave.length

    if (longitudClave >= 8 && longitudClave <= 16) {
        validado = true
    }

    return validado
}

esMayuscula=function(caracter){
    let valorEsMayuscula=false
    let codigoCaracter=caracter.charCodeAt(0)

    if(codigoCaracter<=65 && codigoCaracter<=90 ){
        valorEsMayuscula=true

    }

    return valorEsMayuscula
}

esMinuscula=function(caracter){
    let valorEsMinuscula=false
    let codigoCaracter=caracter.charCodeAt(0)

    if(codigoCaracter<=97 && codigoCaracter<=122 ){
        valorEsMinuscula=true

    }

    return valorEsMinuscula
}

esDigito=function(caracter){
    let valorEsDigito=false
    let codigoCaracter=caracter.charCodeAt(0)

    if(codigoCaracter<=97 && codigoCaracter<=122 ){
        valorEsDigito=true

    }

    return valorEsDigito
}

darPermiso=function(notaMate,notaFisica,notaGeo){
    let valorDarPermsiso=false

    notaMate=parseFloat(notaMate).toFixed(2)
    notaFisica=parseFloat(notaFisica).toFixed(2)
    notaGeo=parseFloat(notaGeo).toFixed(2)

    if(notaFisica>90 || notaGeo>90 || notaMate>90){
        valorDarPermsiso=true
    }

    return valorDarPermsiso
}

otorgarPermiso=function(notaMate,notaFisica,notaGeo){
    let valorDarPermsiso=false

    notaMate=parseFloat(notaMate).toFixed(2)
    notaFisica=parseFloat(notaFisica).toFixed(2)
    notaGeo=parseFloat(notaGeo).toFixed(2)

    if((notaFisica>90 || notaMate >90) && notaGeo>80){
        valorDarPermsiso=true
    }

    return valorDarPermsiso
}

dejarPermiso=function(notaMate,notaFisica,notaGeo){
    let valorDarPermsiso=false

    notaMate=parseFloat(notaMate).toFixed(2)
    notaFisica=parseFloat(notaFisica).toFixed(2)
    notaGeo=parseFloat(notaGeo).toFixed(2)
    


    if((notaFisica>90 || notaMate >90 ||notaGeo>90) && (notaFisica>notaMate)){
        valorDarPermsiso=true
    }

    return valorDarPermsiso
}






