cuentas = [
    { numeroCuenta: "02234567", cedula: "1714616123", nombre: "Juan", apellido: "Perez", saldo: 0.0 },
    { numeroCuenta: "02345211", cedula: "1281238233", nombre: "Felipe", apellido: "Caicedo", saldo: 0.0 }
]

movimientos = [
    { numeroCuenta: "02234567", monto: 10.24, tipo: "D" },
    { numeroCuenta: "02345211", monto: 45.90, tipo: "D" },
    { numeroCuenta: "02234567", monto: 65.23, tipo: "C" },
    { numeroCuenta: "02345211", monto: 65.23, tipo: "C" },
    { numeroCuenta: "02345211", monto: 12.0, tipo: "D" },
]

cargarCuentas = function () {
    mostrarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    ocultarComponente("divTransacciones");

}

cargarTrans = function () {
    mostrarComponente("divTransacciones");
    ocultarComponente("divCuentas");
    ocultarComponente("divMovimientos");

}

cargarMov = function () {
    mostrarComponente("divMovimientos");
    ocultarComponente("divCuentas");
    ocultarComponente("divTransacciones");

}

//MOVIMIENTOS
verMovimientos = function () {
    let numeroCuenta = recuperarTexto('txtCuenta');
    filtrarMovimientos(numeroCuenta);
}

filtrarMovimientos = function (numeroCuenta) {
    let movimientosCuenta = [];
    for (let i = 0; i < movimientos.length; i++) {
        let elmCuenta = movimientos[i];
        if (elmCuenta.numeroCuenta == numeroCuenta) {
            movimientosCuenta.push(elmCuenta);
        }
    }
    mostrarMovimientos(movimientosCuenta);
}

/*
    Recibe un arreglo con los movimientos que va a mostrar en pantalla
*/
mostrarMovimientos = function (misMovimientos) {
    let cmpTabla = document.getElementById('tablaMovimientos');
    let contenidoTabla = '<table><tr>' +
        '<th>NUMERO CUENTA</th>' +
        '<th>MONTO</th>' +
        '<th>OPERACION</th>' +
        '</tr>';

    let elementoMovimientos;
    for (let i = 0; i < misMovimientos.length; i++) {
        elementoMovimientos = misMovimientos[i];
        if (elementoMovimientos.monto > 0 && elementoMovimientos.tipo == 'D') {
            elementoMovimientos.monto *= -1;
        }
        contenidoTabla += '<tr><td>' + elementoMovimientos.numeroCuenta + '</td>'
            + '<td>' + elementoMovimientos.monto + '</td>'
            + '<td>' + elementoMovimientos.tipo + '</td>'
            + '</tr>';
    }
    contenidoTabla += '</table>';
    cmpTabla.innerHTML = contenidoTabla;
}


//TRANSACCIONES

buscarCuenta = function (numeroCuenta) {
    let seEcontroCuenta = false;
    let cuentaEncontrada;
    /*
        Busca la cuenta en el arreglo en función del número de cuenta,
        si existe retorna el objeto cuenta, caso contrario retorna null. 
    */
    for (let i = 0; i < cuentas.length; i++) {
        cuentaEncontrada = cuentas[i];
        let numeroDeCuenta = cuentaEncontrada.numeroCuenta
        if (numeroCuenta == numeroDeCuenta) {
            seEcontroCuenta = true
            break
        } else {
            seEcontroCuenta = false
        }
    }
    if (seEcontroCuenta == true) {
        return cuentaEncontrada
    } else {
        return null
    }
}

ejecutarBusqueda = function () {
    //toma el numero de cuenta de la caja de texto
    //invoca a buscarCuenta y guarda el resultado en una variable
    //Si el resultado es diferente de null, muestra en pantalla, caso contrario muestra un alert
    let numeroDeCuenta = recuperarInt("idBuscar")
    let cuentaBuscada = buscarCuenta(numeroDeCuenta)
    let contenidoTabla = "<table>"
    let cmpTabla = document.getElementById("tabla")
    if (cuentaBuscada == null) {
        alert("LA CUENTA NO EXISTE")
        contenidoTabla += "<tr><th>" + "CUENTA" + "</th><td>" + "</td></tr>" +
            "<tr><th>" + "CEDULA" + "</th><td></td></tr>" +
            "<tr><th>" + "NOMBRE" + "</th><td></td></tr>" +
            "<tr><th>" + "SALDO" + "</th><td></td></tr></table>"

    } else {
        contenidoTabla += "<tr><th>" + "CUENTA" + "</th><td>" + cuentaBuscada.numeroCuenta + "</td></tr>" +
            "<tr><th>" + "CEDULA" + "</th><td>" + cuentaBuscada.cedula + "</td></tr>" +
            "<tr><th>" + "NOMBRE" + "</th><td>" + cuentaBuscada.nombre + " " + cuentaBuscada.apellido + "</td></tr>" +
            "<tr><th>" + "SALDO" + "</th><td>" + cuentaBuscada.saldo + "$" + "</td></tr></table>"
    }
    cmpTabla.innerHTML = contenidoTabla
}

depositar = function (numeroCuenta, monto) {
    let cuentaAfectada;
    //invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
    //Al saldo actual de la cuenta afectada, le suma el monto que recibe como parámetro
    cuentaAfectada = buscarCuenta(numeroCuenta)
    if (cuentaAfectada != null)
        cuentaAfectada.saldo += monto
    return cuentaAfectada.saldo

}

ejecutarDeposito = function () {
    //Toma el numero de cuenta ingresado en la caja de texto
    //Toma el monto ingresado en la caja de texto
    //invoca a depositar
    //Muestra un mensaje TRANSACCION EXITOSA
    //Muestra en pantalla el nuevo saldo de la cuenta
    let numeroDeCuenta = recuperarTexto("idBuscar")
    let monto = recuperarFloat("idCantidad")
    let deposito
    if (monto > 0) {
        deposito = depositar(numeroDeCuenta, monto)
        if (deposito != null) {
            alert("TRANSACCION EXITOSA")
            ejecutarBusqueda()
            mostrarCuentas()
            let objetoMov = {}
            objetoMov.numeroCuenta = numeroDeCuenta
            objetoMov.monto = monto
            objetoMov.tipo = "C"
            movimientos.push(objetoMov)
        }
    }
}

retirar = function (numeroCuenta, monto) {
    let cuentaAfectada;
    //invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
    //Al saldo actual de la cuenta afectada, le resta el monto que recibe como parámetro
    cuentaAfectada = buscarCuenta(numeroCuenta)
    if (cuentaAfectada != null)
        cuentaAfectada.saldo -= monto
    return cuentaAfectada.saldo
}

ejecutarRetirar = function (numeroCuenta, monto) {
    let cuentaAfectada;
    //invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
    //Valida si la cuenta tiene el saldo suficiente para retirar el monto
    //Si el saldo es suficiente,al saldo actual de la cuenta afectada, le resta el monto que recibe como parámetro
    //Si el saldo no es suficiente, muestra un alert SALDO INSUFICIENTE
    //Si logra retirar muestra un mensaje TRANSACCION EXITOSA y muestra en pantalla el nuevo saldo de la cuenta
    cuentaAfectada = buscarCuenta(numeroCuenta)
    if (cuentaAfectada.saldo < monto) {
        alert("SALDO INSUFICIENTE")
    } else {
        let retiro = retirar(numeroCuenta, monto)
        if (retiro != null) {
            alert("TRANSACCION EXITOSA")
            ejecutarBusqueda()
            mostrarCuentas()
            let objetoMov = {}
            objetoMov.numeroCuenta = numeroCuenta
            objetoMov.monto = monto
            objetoMov.tipo = "D"
            movimientos.push(objetoMov)
        }
    }
}

ejecutarRetiro = function () {
    //Toma el numero de cuenta ingresado en la caja de texto
    //Toma el monto ingresado en la caja de texto
    //invoca a ejecutarRetirar
    //Muestra un mensaje TRANSACCION EXITOSA
    //Muestra en pantalla el nuevo saldo de la cuenta
    let numeroDeCuenta = recuperarTexto("idBuscar")
    let monto = recuperarFloat("idCantidad")
    ejecutarRetirar(numeroDeCuenta, monto)
}

//CUENTAS
mostrarCuentas = function () {


    let compTabla = document.getElementById("tablaCuentas")

    let contenidoTabla = "<table><tr>  <th>NUMERO CUENTA</th>  <th>NOMBRE</th> <th>CEDULA</th>  <th>SALDO</th> </tr>"
    let cuentaActual

    for (let i = 0; i < cuentas.length; i++) {
        cuentaActual = cuentas[i]
        contenidoTabla +=
            "<tr>" +
            "<td>" + cuentaActual.numeroCuenta + "</td>" +
            "<td>" + cuentaActual.nombre + " " + cuentaActual.apellido + "</td>" +
            "<td>" + cuentaActual.cedula + "</td>" +
            "<td>" + cuentaActual.saldo + "$" + "</td>"
            + "</tr>"

    }

    contenidoTabla += "</table>"
    compTabla.innerHTML = contenidoTabla



}


buscarCuenta1 = function (numeroCnt) {
    let cuentaEncontrada = null
    let cuentaActual

    for (let i = 0; i < cuentas.length; i++) {
        cuentaActual = cuentas[i]

        if (cuentaActual.numeroCuenta == numeroCnt) {
            cuentaEncontrada = cuentaActual
            break;

        }


    }

    return cuentaEncontrada


}


agregarCuenta = function (cuenta) {

    let cuentaAgregar = buscarCuenta1(cuenta.numeroCuenta)

    if (cuentaAgregar == null) {
        ///error aquihuba (mal el parametro del push)
        cuentas.push(cuenta)
        alert("cuenta agregada exitosamente")

        mostrarCuentas()
    }

    if (cuentaAgregar != null) {
        alert("cuenta ya registrada")
    }

    /*
    Agrega una cuenta al arreglo, solamente si no existe otra cuenta con el mismo numero.
    No retorna nada
*/

    //Si ya existe mostrar un alert CUENTA EXISTENTE
    //Si se agrega, mostrar un alert CUENTA AGREGADA
}

agregar = function () {
    //Toma los valores de las cajas de texto, sin validaciones
    //Crea un objeto cuenta y agrega los atributos con los valores de las cajas respectivas
    //Invoca a agregarCuenta
    //Invoca a mostrarCuentas
    let valorNumCuenta = recuperarTexto("txtNumCuenta")
    let valorNombre = recuperarTexto("txtNombre")
    let valorApellido = recuperarTexto("txtApellido")
    let valorCedula = recuperarTexto("txtCedula")
    let valorSaldo = 0.0

    console.log("numero cuenta caja es: " + valorNumCuenta)

    let cuenta_pa_guardar = {
        numeroCuenta: valorNumCuenta,
        cedula: valorCedula,
        nombre: valorNombre,
        apellido: valorApellido,
        saldo: valorSaldo
    }

    console.log(cuenta_pa_guardar.numeroCuenta)
    agregarCuenta(cuenta_pa_guardar)

}
//fin CUENTAS


/*
    En este archivo se deben colocar todas las funciones de cuentas, movimientos y transacciones
    IMPORTANTE: NO DUPLICAR FUNCIONES, si existe una misma función en varios archivos,
    dejar solo una de ellas, ejemplo la función buscarCuenta
*/

//OCULTAR Y MOSTRAR LOS DIVS, para que cada opción muestre solo su parte


//Cuando se realiza un depósito de forma exitosa, se debe crear un objeto movimiento
//con el tipo C, que corresponde a CREDITO, el número de cuenta a la que se hizo el depósito
//y el monto que se depositó. Este objeto movimiento se agrega al arreglo movimientos

//Cuando se realiza un retiro de forma exitosa, se debe crear un objeto movimiento
//con el tipo D, que corresponde a DEBITO, el número de cuenta a la que se hizo el retiro
//y el monto que se retiró. Este objeto movimiento se agrega al arreglo movimientos