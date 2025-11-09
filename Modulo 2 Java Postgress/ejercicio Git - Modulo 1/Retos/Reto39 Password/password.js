ejecutarValidacion = function () {
    let password = recuperarTexto("txtPassword")
    let mensajeError = validarPassword(password)

    if(mensajeError===""){
        mensajeError="Cadena de Password correcta 😊🕯️"
    }


    mostrarTexto("lblError", mensajeError)

}

validarPassword = function (password) {
    let longitudCadena = password.length

    let almenosUnaMayuscula = false
    let almenosUnDigito = false
    let almenosUnCaracter = false

    let mensajeError = ""


    if (longitudCadena <= 16 && longitudCadena >= 8) {

        for (index =0; index <= longitudCadena; index++) {
            caracter = password.charAt(index)
            console.log("analizando caracter: " + caracter + " en posicion :" + index)

            
            if (esCaracterEspecial(caracter)) {
                almenosUnCaracter = true
            }
            if (esDigito(caracter)) {
                almenosUnDigito = true
            }
            if (esMayuscula(caracter)) {
                almenosUnaMayuscula = true
            }
          

        }

        console.log("resultado: \n"+almenosUnCaracter+" "+almenosUnDigito+" "+almenosUnaMayuscula)

        if (almenosUnCaracter == false) {
            mensajeError += " debe de haber al menos un caracter especial\n";
        }
        if (almenosUnDigito == false) {
            mensajeError += " debe de haber al menos un dígito \n";
        }
        if (almenosUnaMayuscula == false) {
            mensajeError += " debe de haber al menos una letra mayúscula \n";
        }



    } else {
        mensajeError += " no cumple el tamanio de cadena entre 8 y 16 caracteres"
        // mostrarTexto("lblError",mensajeError)
        // console.log(mensajeError)
    }
    console.log(mensajeError)

    return mensajeError



}


esMayuscula = function (caracter) {
    let cumpleCondicion = false
    let rangoInferior = 65;///codigo ascci
    let rangoSuperior = 90;///codigo ascci
    let char = caracter.charCodeAt(0)

    if (char <= rangoSuperior && char >= rangoInferior) {
        cumpleCondicion = true
    }
    console.log(caracter + " cumple esMayuscula: " + cumpleCondicion)
    return cumpleCondicion
}
esMinuscula = function (caracter) {
    let cumpleCondicion = false
    let rangoInferior = 97; ///codigo ascci
    let rangoSuperior = 122; ///codigo ascci
    let char = caracter.charCodeAt(0)

    if (char <= rangoSuperior && char >= rangoInferior) {
        cumpleCondicion = true
    }
    console.log(caracter + " cumple esMinuscula: " + cumpleCondicion)

    return cumpleCondicion

}

esDigito = function (caracter) {
    let cumpleCondicion = false
    let rangoInferior = 48; ///codigo ascci
    let rangoSuperior = 57; ///codigo ascci
    let char = caracter.charCodeAt(0)

    if (char <= rangoSuperior && char >= rangoInferior) {
        cumpleCondicion = true
    }
    console.log(caracter + " cumple esDigito: " + cumpleCondicion)
    return cumpleCondicion

}

esCaracterEspecial = function (caracter) {
    let cumpleCondicion = false;
    let char = caracter.charCodeAt(0);

    // Rango de caracteres especiales comunes en ASCII
    if (
        (char >= 33 && char <= 47) ||
        (char >= 58 && char <= 64) ||  // :;<=>?@
        (char >= 91 && char <= 96) ||  // [\]^_`
        (char >= 123 && char <= 126)   // {|}~
    ) {
        cumpleCondicion = true;
    }

    console.log(caracter + " cumple esCaracterEspecial: " + cumpleCondicion);
    return cumpleCondicion;
}
