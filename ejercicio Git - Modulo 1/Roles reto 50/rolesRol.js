//parte 5 

roles = [
  { cedula: "9486589874", nombre: "SANCHO", sueldo: 600, valorAPagar: 60, aporteEmpleado: 58, aporteEmpleador: 15 },
  { cedula: "1023456789", nombre: "LOPEZ", sueldo: 750, valorAPagar: 80, aporteEmpleado: 72, aporteEmpleador: 18 },
  { cedula: "8765432101", nombre: "MARTINEZ", sueldo: 500, valorAPagar: 55, aporteEmpleado: 50, aporteEmpleador: 12 },
  { cedula: "1122334455", nombre: "GOMEZ", sueldo: 820, valorAPagar: 90, aporteEmpleado: 85, aporteEmpleador: 20 },
  { cedula: "9988776655", nombre: "PEREZ", sueldo: 670, valorAPagar: 70, aporteEmpleado: 65, aporteEmpleador: 16 },
  { cedula: "3344556677", nombre: "RAMIREZ", sueldo: 940, valorAPagar: 100, aporteEmpleado: 95, aporteEmpleador: 22 }
];

buscarPorRol=function(){
    let valorCedula = recuperarTexto("txtBusquedaCedulaRol")
    let empleado = buscarEmpleado(valorCedula)


    if (empleado == null) {
        alert("empleado no encontrado")

    } else {

        mostrarTexto("infoCedula", empleado.cedula)
        mostrarTexto("infoNombre", empleado.nombre+" "+empleado.apellido)
        mostrarTexto("infoSueldo", empleado.sueldo)
        //
        mostrarTextoEnCaja("txtDescuentos", 0)
 

    }
}

calcularAporteEmpleado=function(sueldo){

    let porcentajeAporte=9.45
    let aporte=(porcentajeAporte*sueldo)/100

    return aporte
}

calcularValorA_Pagar=function(sueldo,descuento){
    
    let valorA_PagarEmpleado
    
    valorA_PagarEmpleado=sueldo-calcularAporteEmpleado(sueldo)-descuento

    return valorA_PagarEmpleado

}

calcularRol=function(){

    let valorSueldo=recuperarFloatDiv("infoSueldo")
    let valorDescuento=recuperarFloat("txtDescuentos")
    let aporteIEES=calcularAporteEmpleado(valorSueldo)
    let totalPagar=0

    if(valorDescuento>=0 && valorDescuento<=valorSueldo){
        totalPagar=calcularValorA_Pagar(valorSueldo,valorDescuento)
        habilitarComponente("btbGuardarRol")
    }else(
        alert("descuento fuera de rango , ser valor entre 0 y "+valorSueldo)
    )

    mostrarTexto("infoIESS",aporteIEES.toFixed(2))
    mostrarTexto("infoPago",totalPagar.toFixed(2))


}
//parte 6

buscarRol=function(cedula){
    
    // let valorCedula = recuperarTexto("txtBusquedaCedulaRol")
    // buscarPorRol()
    let tamanioRol=roles.length
    let rolEncontrado=null

    for(i=0;i<tamanioRol;i++){
        let rolActual=roles[i]

        if(rolActual.cedula==cedula){
            rolEncontrado=rolActual
            break
        }
    
    }

    return rolEncontrado
}

agregarRol=function(rolA_Agregar){

        roles.push(rolA_Agregar)
        alert("rol agregado correctamente")


}

calcularAporteEmpleador=function(sueldo){
    let porcentajeAporte=11.15
    let aporteEmpleador=(porcentajeAporte*sueldo)/100

    return aporteEmpleador

}

mostrarRoles = function () {

    let compTabla = document.getElementById("tablaResumen")

    let contenidoTabla = "<table><tr> <th>CEDULA</th> <th>NOMBRE</th> <th>SUELDO</th> <th>VALOR A PAGAR</th> <th>APORTE empleado</th>   <th>APORTE empleador </th>    </tr>"
    let elementoRol

    for (let i = 0; i < roles.length; i++) {
        elementoRol = roles[i]
        contenidoTabla +=
            "<tr>" +    //inicio fila
            "<td>" + elementoRol.cedula + "</td>" +
            "<td>" + elementoRol.nombre + "</td>" +
            "<td>" + elementoRol.sueldo + "</td>" +
            "<td>" + elementoRol.valorAPagar + "</td>" +
            "<td>" + elementoRol.aporteEmpleado + "</td>" +
            "<td>" + elementoRol.aporteEmpleador + "</td>" +
            "</tr>"     //fin fila

    }

    contenidoTabla += "</table>"
    compTabla.innerHTML = contenidoTabla


}


guardarRol=function(){

    let valorCedula=recuperarTextoDiv("infoCedula")
    let rolA_Guardar=buscarRol(valorCedula)
    let valorSueldo=recuperarFloatDiv("infoSueldo")
    let valorNombre=recuperarTextoDiv("infoNombre");
    let valorValorAPagar=recuperarFloatDiv("infoPago")
    ///
    let aporteEmpleado=recuperarFloatDiv("infoIESS")
    let aporteEmpleador=calcularAporteEmpleador(valorSueldo)

//   { cedula: "9486589874", nombre: "SANCHO", sueldo: 600, valorAPagar: 60, aporteEmpleado: 58, aporteEmpleador: 15 },

    if(rolA_Guardar==null){
        rolA_Guardar={}

        rolA_Guardar.cedula=valorCedula;
        rolA_Guardar.nombre=valorNombre;
        rolA_Guardar.sueldo=valorSueldo;
        rolA_Guardar.valorAPagar=valorValorAPagar;
        rolA_Guardar.aporteEmpleado=aporteEmpleado;
        rolA_Guardar.aporteEmpleador=aporteEmpleador

        //rolA_Guardar.=
        agregarRol(rolA_Guardar)

       
    }

    mostrarRoles()

}

mostrarTotales=function(){

     let totalEmpleado=0
     let totalEmpleador=0
     let totalAPagar=0

    for (let i = 0; i < roles.length; i++) {
        let totalEmpleadoActual=roles[i].aporteEmpleado
        let totalEmpleadorActual=roles[i].aporteEmpleador
        let totalAPagarActual=roles[i].valorAPagar

        totalAPagar+=totalAPagarActual
        totalEmpleado+=totalEmpleadoActual
        totalEmpleador+=totalEmpleadorActual
    
    }
    
    mostrarTexto("infoTotalPago",totalAPagar)
    mostrarTexto("infoAporteEmpresa",totalEmpleador)
    mostrarTexto("infoAporteEmpleado",totalEmpleador)


}

