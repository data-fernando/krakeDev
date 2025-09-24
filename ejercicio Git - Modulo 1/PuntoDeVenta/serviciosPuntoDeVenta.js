calularValorDescuento=function(monto,porcentajeDescuento){
    let valorConDescuento=parseFloat(monto)*((parseInt(porcentajeDescuento))/100)
    return valorConDescuento

}

calcularIVA=function(monto){
    let valorConIVA=parseFloat(monto)*0.12
    return valorConIVA

}
calcularSubtotal=function(precioUnitario,cantidad){
    let subTotal=parseFloat(precioUnitario)*parseInt(cantidad)
    return subTotal

}

calcularTotal=function(subTotal,descuento,iva){
    let valorTotal=subTotal-descuento+iva
    return valorTotal

}