cuentas = [
    { numeroCuenta: "02234567", cedula: "1714616123", nombre: "Juan", apellido: "Perez", saldo: 0.0 },
    { numeroCuenta: "02345211", cedula: "1281238233", nombre: "Felipe", apellido: "Caicedo", saldo: 0.0 }
]

cargar = function () {
    mostrarComponente("divTransacciones");
    ocultarComponente("divCuentas");
    ocultarComponente("divMovimientos");

}

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
        contenidoTabla += "<tr><td>" + "CUENTA" + "</td><td>" + "</td></tr>" +
            "<tr><td>" + "CEDULA" + "</td><td></td></tr>" +
            "<tr><td>" + "NOMBRE" + "</td><td></td></tr>" +
            "<tr><td>" + "SALDO" + "</td><td></td></tr></table>"

    } else {
        contenidoTabla += "<tr><td>" + "CUENTA" + "</td><td>" + cuentaBuscada.numeroCuenta + "</td></tr>" +
            "<tr><td>" + "CEDULA" + "</td><td>" + cuentaBuscada.cedula + "</td></tr>" +
            "<tr><td>" + "NOMBRE" + "</td><td>" + cuentaBuscada.nombre + " " + cuentaBuscada.apellido + "</td></tr>" +
            "<tr><td>" + "SALDO" + "</td><td>" + cuentaBuscada.saldo + "$" + "</td></tr></table>"
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
    let numeroDeCuenta = recuperarInt("idBuscar")
    let monto = recuperarFloat("idCantidad")
    let deposito
    if (monto > 0) {
        deposito = depositar(numeroDeCuenta, monto)
        if (deposito != null) {
            alert("TRANSACCION EXITOSA")
            ejecutarBusqueda()
            let movimiento = {};
            
        }
    }
}
//Cuando se realiza un depósito de forma exitosa, se debe crear un objeto movimiento
//con el tipo C, que corresponde a CREDITO, el número de cuenta a la que se hizo el depósito
//y el monto que se depositó. Este objeto movimiento se agrega al arreglo movimientos

//Cuando se realiza un retiro de forma exitosa, se debe crear un objeto movimiento
//con el tipo D, que corresponde a DEBITO, el número de cuenta a la que se hizo el retiro
//y el monto que se retiró. Este objeto movimiento se agrega al arreglo movimientos


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
        }
    }
}

ejecutarRetiro = function () {
    //Toma el numero de cuenta ingresado en la caja de texto
    //Toma el monto ingresado en la caja de texto
    //invoca a ejecutarRetirar
    //Muestra un mensaje TRANSACCION EXITOSA
    //Muestra en pantalla el nuevo saldo de la cuenta
    let numeroDeCuenta = recuperarInt("idBuscar")
    let monto = recuperarFloat("idCantidad")
    ejecutarRetirar(numeroDeCuenta, monto)
}