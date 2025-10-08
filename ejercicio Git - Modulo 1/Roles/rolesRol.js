//parte 5 

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
    let valorDescuento=recuperarFloat("txtDescuentos")
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
    }else(
        alert("descuento fuera de rango , ser valor entre 0 y "+valorSueldo)
    )

    mostrarTexto("infoIESS",aporteIEES)
    mostrarTexto("infoPago",totalPagar.toFixed(2))


}