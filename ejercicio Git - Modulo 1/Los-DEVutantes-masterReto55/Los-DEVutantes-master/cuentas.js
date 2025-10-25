cuentas=[
    {numeroCuenta:"02234567", cedula:"1714616123",nombre:"Juan",apellido:"Perez",saldo:0.0},
    {numeroCuenta:"02345211",cedula:"1281238233",nombre:"Felipe",apellido:"Caicedo",saldo:0.0}
]


///validaciones recicladas


// esDigito = function (caracter) {
//     let cumpleCondicion = false
//     let rangoInferior = 48; ///codigo ascci
//     let rangoSuperior = 57; ///codigo ascci
//     let char = caracter.charCodeAt(0)

//     if (char <= rangoSuperior && char >= rangoInferior) {
//         cumpleCondicion = true
//     }
//     console.log(caracter + " cumple esDigito: " + cumpleCondicion)
//     return cumpleCondicion

// }

// validarCedula = function (cadenaCedula) {

//     let longitudCadena = cadenaCedula.length
//     let condicionCumple = false
//     let mensajeErrorCedula = ""


//     // verifica tamanio de 10
//     if (longitudCadena == 10) {


//         for (let i = 0; i < longitudCadena; i++) {
//             let charActual = cadenaCedula[i]
//             let condicionActual = esDigito(charActual)

//             if (condicionActual == true) {
//                 if (i == 0) {
//                     condicionCumple = true
//                 }
//             }

//             console.log("char actual es: '" + charActual + "' condicion " + condicionCumple)
//             /// AL menos uno o todos

//             condicionCumple = condicionCumple && condicionActual

//         }

//         if (condicionCumple == false) {
//             mensajeErrorCedula = "No cumple condicion de todos deben ser digitos"
//         }



//     } else {
//         mensajeErrorCedula = "Numero de digitos en cedula debe ser de 10"
//     }

//     console.log("\nCONDICION GENERAL DE CEDULA ES: " + condicionCumple + "\n")

//     mostrarTexto("lblErrorCedula", mensajeErrorCedula)


//     return condicionCumple

// }

// validarNumCuenta = function (cadenaCedula) {

//     let longitudCadena = cadenaCedula.length
//     let condicionCumple = false
//     let mensajeErrorCedula = ""


//     // verifica tamanio de 8
//     if (longitudCadena == 8) {


//         for (let i = 0; i < longitudCadena; i++) {
//             let charActual = cadenaCedula[i]
//             let condicionActual = esDigito(charActual)

//             if (condicionActual == true) {
//                 if (i == 0) {
//                     condicionCumple = true
//                 }
//             }

//             console.log("char actual es: '" + charActual + "' condicion " + condicionCumple)
//             /// AL menos uno o todos

//             condicionCumple = condicionCumple && condicionActual

//         }

//         if (condicionCumple == false) {
//             mensajeErrorCedula = "No cumple condicion de todos deben ser digitos"
//         }



//     } else {
//         mensajeErrorCedula = "Numero de digitos en cuenta debe ser de 8"
//     }

//     console.log("\nCONDICION GENERAL DE Cuenta ES: " + condicionCumple + "\n")

//     mostrarTexto("lblErrorNumCuenta", mensajeErrorCedula)


//     return condicionCumple

// }


///

cargar=function(){
    mostrarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    ocultarComponente("divTransacciones");
    
}

mostrarCuentas=function(){
 

    let compTabla = document.getElementById("tablaCuentas")

    let contenidoTabla = "<table><tr>  <th>NUMERO CUENTA</th>  <th>NOMBRE</th> <th>CEDULA</th>  <th>SALDO</th> </tr>"
    let cuentaActual

    for (let i = 0; i < cuentas.length; i++) {
        cuentaActual = cuentas[i]
        contenidoTabla +=
            "<tr>" +
            "<td>" + cuentaActual.numeroCuenta + "</td>" +
            "<td>" + cuentaActual.nombre+" "+cuentaActual.apellido+ "</td>" +
            "<td>" + cuentaActual.cedula + "</td>" +
            "<td>" + cuentaActual.saldo + "</td>"
            + "</tr>"

    }

    contenidoTabla += "</table>"
    compTabla.innerHTML = contenidoTabla


    
}


buscarCuenta1=function(numeroCnt){
    let cuentaEncontrada=null
    let cuentaActual

    for(let i=0;i<cuentas.length;i++){
        cuentaActual=cuentas[i]

        if(cuentaActual.numeroCuenta==numeroCnt){
            cuentaEncontrada=cuentaActual
            break;

        }


    }
    
    return cuentaEncontrada
    

}


agregarCuenta=function(cuenta){

    let cuentaAgregar=buscarCuenta1(cuenta.numeroCuenta)

    if(cuentaAgregar==null){
        ///error aquihuba (mal el parametro del push)
        cuentas.push(cuenta)
        alert("cuenta agregada exitosamente")

       mostrarCuentas()
    }

    if(cuentaAgregar!=null){
        alert("cuenta ya registrada")        
    }

    /*
    Agrega una cuenta al arreglo, solamente si no existe otra cuenta con el mismo numero.
    No retorna nada
*/

    //Si ya existe mostrar un alert CUENTA EXISTENTE
    //Si se agrega, mostrar un alert CUENTA AGREGADA
}

agregar=function(){
    //Toma los valores de las cajas de texto, sin validaciones
    //Crea un objeto cuenta y agrega los atributos con los valores de las cajas respectivas
    //Invoca a agregarCuenta
    //Invoca a mostrarCuentas
    let valorNumCuenta=recuperarTexto("txtNumCuenta")
    let valorNombre=recuperarTexto("txtNombre")
    let valorApellido=recuperarTexto("txtApellido")
    let valorCedula=recuperarTexto("txtCedula")
    let valorSaldo=0.0

    console.log("numero cuenta caja es: "+valorNumCuenta)

    let cuenta_pa_guardar={
        numeroCuenta:valorNumCuenta,
        cedula:valorCedula,
        nombre:valorNombre,
        apellido:valorApellido,
        saldo:valorSaldo
    }

    console.log(cuenta_pa_guardar.numeroCuenta)
    agregarCuenta(cuenta_pa_guardar)

}
