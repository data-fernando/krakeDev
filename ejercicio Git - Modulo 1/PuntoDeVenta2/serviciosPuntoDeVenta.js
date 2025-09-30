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

calcularDescuentoPorVolumen=function(subTotal,cantidad){
    let porcentajeDescuentoVolumen=0

    if(cantidad>=3 && cantidad<=5 ){
        porcentajeDescuentoVolumen=0.03
    }else if(cantidad>=6 && cantidad<=11 ){
        porcentajeDescuentoVolumen=0.04
    }else if(cantidad > 12){
        porcentajeDescuentoVolumen=0.05
    }

    let valorDescuentoVolumen=subTotal*(porcentajeDescuentoVolumen)

    return valorDescuentoVolumen

}