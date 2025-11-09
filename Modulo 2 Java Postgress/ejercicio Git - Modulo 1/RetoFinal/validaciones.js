///longitud , no vacio , mayor o igual a 0 si es numero
esCampoLleno=function(textoEvaluado){
    let estalleno=false
    if(textoEvaluado!=""){
        estalleno=true
    }
    return estalleno
}

//es digito (char)
esDigitoChar=function(char){
    let esDigito=false
    if(char.charCodeAt(0)>=48 && char.charCodeAt(0)<=57 ){
        esDigito=true 
    }
    return esDigito
}

//contiene digito (cadena)
contieneDigitoFuncion=function(cadena){
    let contieneDigitoGeneral=false

    let contieneDigitoActual=false

    for(let i=0;i<cadena.length;i++){

        if(esDigitoChar(cadena[i])){
            contieneDigitoActual=true
            if(i==0){
            contieneDigitoGeneral=contieneDigitoActual    
            }

        }

        contieneDigitoGeneral=contieneDigitoGeneral||contieneDigitoActual
        if(contieneDigitoGeneral){
            break;
        }
    }

    return contieneDigitoGeneral

}

//esEspacio(char)
esEspacioChar=function(char){
    let esEspacio=false
    if(char.charCodeAt(0)==32){
        esEspacio=true
    }
    return esEspacio
    
}

//contieneEspacios(cadena)
contieneEspacios=function(cadena){

    let contieneEspacioGeneral=false

    let contieneEspacioActual=false

    for(let i=0;i<cadena.length;i++){

        if(esEspacioChar(cadena[i])){
            contieneEspacioActual=true
            if(i==0){
            contieneEspacioGeneral=contieneEspacioActual    
            }

        }

        contieneEspacioGeneral=contieneEspacioGeneral||contieneEspacioActual

        if(contieneEspacioGeneral){
            break
        }
    }

    return contieneEspacioGeneral
}
//esMayuscula (char)
esMayusculaChar=function(char){
    let esMayuscula=false
    if(char.charCodeAt(0)>=65 && char.charCodeAt(0)<=90 ){
        esMayuscula=true
    }
    return esMayuscula
}

//contieneMayuscula(cadena)
contieneMayuscula=function(cadena){

    let contieneMayusculaGeneral=false

    let contieneMayusculaActual=false

    for(let i=0;i<cadena.length;i++){

        if(esMayusculaChar(cadena[i])){
            contieneMayusculaActual=true
            if(i==0){
            contieneMayusculaGeneral=contieneMayusculaActual    
            }

        }

        contieneMayusculaGeneral=contieneMayusculaGeneral||contieneMayusculaActual
        
        if(contieneMayusculaGeneral){
            break;
        }
    }

    return contieneMayusculaGeneral


}

//esMinuscula (char)
esMinusculaChar=function(char){
    let esMinuscula=false
    if(char.charCodeAt(0)>=97 && char.charCodeAt(0)<=122 ){
        esMinuscula=true
    }
    return esMinuscula
}

//contieneMinuscula(cadena)
contieneMinuscula=function(cadena){

    let contieneMinusculaGeneral=false

    let contieneMinusculaActual=false

    for(let i=0;i<cadena.length;i++){

        if(esMinusculaChar(cadena[i])){
            contieneMinusculaActual=true
            if(i==0){
            contieneMinusculaGeneral=contieneMinusculaActual    
            }

        }

        contieneMinusculaGeneral=contieneMinusculaGeneral||contieneMinusculaActual

        if(contieneMinusculaGeneral){
            break;
        }
    }

    return contieneMinusculaGeneral


}


//caracteresEspaciales
esCaracterEspecial = function(char) {
    let esCaracterEspecial = false;
    if (!(/[a-zA-Z0-9]/.test(char))) {
        esCaracterEspecial = true;
    }
    return esCaracterEspecial;
}


//contiene caracterEspecial
contieneCaracterEspecial = function(cadena) {
    let contieneCaracterEspGeneral=false

    let contieneCaracterEspActual=false

    for(let i=0;i<cadena.length;i++){

        if(esCaracterEspecial(cadena[i])){
            contieneCaracterEspActual=true

            if(i==0){
            contieneCaracterEspGeneral=contieneCaracterEspActual    
            }

        }

        contieneCaracterEspGeneral=contieneCaracterEspGeneral||contieneCaracterEspActual
        if(contieneCaracterEspGeneral){
            break
        }

    }

    return contieneCaracterEspGeneral
}


//validacionNombre: campo lleno, no caracteresEspeciales, longitud minima

function validarNombre(cadena){
    let esValido=false
    let mensaje=""
    if(esCampoLleno(cadena)){

        if(isNaN(cadena)){

            if(!contieneCaracterEspecial(cadena)){

             
                esValido=true
                mostrarTexto("lblErrorNombre",mensaje)

              
            }else{
                mensaje+="no puede contener caracteres especiales"
                mostrarTexto("lblErrorNombre",mensaje)

            }

        }else{
            mensaje+="no puede ser un numero"
            mostrarTexto("lblErrorNombre",mensaje)
        }

    }else{
        mensaje+="campo no debe ser vacio"
        mostrarTexto("lblErrorNombre",mensaje)
    }

    return esValido

}
//validacionDescripcion: longitud maxima , campo lleno

validarDescripcion=function(cadena){

    let esValido=false
    let mensaje=""

    if(esCampoLleno(cadena)){

        if(isNaN(cadena)){

            if(cadena.length>=15){

                esValido=true
                mostrarTexto("lblErrorDescripcion",mensaje)

            }else{
                mensaje="longitud minima de 16 caracteres"
                mostrarTexto("lblErrorDescripcion",mensaje)
            }

        }else{

            mensaje="no puedes ser solo numeros"
            mostrarTexto("lblErrorDescripcion",mensaje)
        }

    }else{
        mensaje="no puede ser campo vacio"
        mostrarTexto("lblErrorDescripcion",mensaje)
    }


    return esValido
    
}

//validacionCategoria: no espacios, longitud minima , campo lleno , no caracteresEspeciales
validarCategoria = function (cadena) {

    let esValido = false
    let mensaje = ""
    if (esCampoLleno(cadena)) {

        if (isNaN(cadena)) {

            if (!contieneEspacios(cadena)) {

                if (!contieneCaracterEspecial(cadena)) {

                    esValido = true
                    mostrarTexto("lblErrorCategoria", mensaje)

                } else {

                    mensaje += "no puede contener caracteres especiales"
                    mostrarTexto("lblErrorCategoria", mensaje)
                }


            } else {
                mensaje += "no puede tener espacios"
                mostrarTexto("lblErrorCategoria", mensaje)
            }



        } else {
            mensaje += "no puede ser un numero"
            mostrarTexto("lblErrorCategoria", mensaje)
        }

    } else {
        mensaje += "campo no debe ser vacio"
        mostrarTexto("lblErrorCategoria", mensaje)
    }

    return esValido
}



//validacionPrecio
validarPrecio=function(precio){
    let esValido = false
    let mensaje = ""
    if (esCampoLleno(precio)) {
        if (!isNaN(precio)) {


            //limite de valores
            if (precio >= 0) {

                esValido = true
                mostrarTexto("lblErrorPrecio", mensaje)

            } else {
                mensaje +="no puede ser negativo"
                mostrarTexto("lblErrorPrecio", mensaje)
            }


        } else {
            mensaje +="no es un numero"
            mostrarTexto("lblErrorPrecio", mensaje)
        }

    } else {
        mensaje +="campoVacio"
        mostrarTexto("lblErrorPrecio", mensaje)
    }

    return esValido

}

//validacionStock

validarStock=function(stock){
    let esValido = false
    let mensaje = ""
    if (esCampoLleno(stock)) {
        if (!isNaN(stock)) {


            //limite de valores
            if (stock >= 0) {

                esValido = true
                mostrarTexto("lblErrorStock", mensaje)

            } else {
                mensaje +="no puede ser negativo"
                mostrarTexto("lblErrorStock", mensaje)
            }


        } else {
            mensaje +="no es un numero"
            mostrarTexto("lblErrorStock", mensaje)
        }

    } else {
        mensaje +="campoVacio"
        mostrarTexto("lblErrorStock", mensaje)
    }
    return esValido

}