movimientos=[
    {numeroCuenta:"02234567",monto:10.24,tipo:"D"},
    {numeroCuenta:"02345211",monto:45.90,tipo:"D"},
    {numeroCuenta:"02234567",monto:65.23,tipo:"C"},
    {numeroCuenta:"02345211",monto:65.23,tipo:"C"},
    {numeroCuenta:"02345211",monto:12.0,tipo:"D"},
]


cargar=function(){
    mostrarComponente("divMovimientos");
    ocultarComponente("divCuentas");
    ocultarComponente("divTransacciones");
    
}

verMovimientos = function(){
    let numeroCuenta = recuperarTexto('txtCuenta');
    filtrarMovimientos(numeroCuenta);
}

filtrarMovimientos=function(numeroCuenta){
    let movimientosCuenta=[];
    for (let i = 0; i < movimientos.length; i++) {
        let elmCuenta = movimientos[i];
        if(elmCuenta.numeroCuenta == numeroCuenta){
            movimientosCuenta.push(elmCuenta);
        }
    }
    mostrarMovimientos(movimientosCuenta);
}

/*
    Recibe un arreglo con los movimientos que va a mostrar en pantalla
*/
mostrarMovimientos=function(misMovimientos){
    let cmpTabla = document.getElementById('tablaMovimientos');
    let contenidoTabla = '<table><tr>' + 
    '<th>NUMERO CUENTA</th>' + 
    '<th>MONTO</th>' + 
    '<th>OPERACION</th>' + 
    '</tr>';

    let elementoMovimientos;
    for (let i = 0; i < misMovimientos.length; i++) {
        elementoMovimientos = misMovimientos[i];
        if(elementoMovimientos.tipo == 'D'){
            elementoMovimientos.monto *= -1;
        }
        contenidoTabla += '<tr><td>'+ elementoMovimientos.numeroCuenta + '</td>'
        + '<td>' + elementoMovimientos.monto + '</td>'
        + '<td>' + elementoMovimientos.tipo + '</td>'
        + '</tr>';
    }
    contenidoTabla += '</table>';
    cmpTabla.innerHTML = contenidoTabla;
}




