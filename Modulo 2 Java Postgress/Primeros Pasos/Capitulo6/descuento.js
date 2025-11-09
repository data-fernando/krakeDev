//logica

calcularDescuento=function(valorReal,porcetajeDescuento){
    let valorDescuento;
    valorDescuento=valorReal*((100-porcetajeDescuento)/100)
    return valorDescuento

}

//coneccion con la pagina
testCalcularDescuento=function(){
    let compvalorReal;
    let compporcentajeDescuento;

    compvalorReal=document.getElementById("txtvalorReal")
    compporcentajeDescuento=document.getElementById("txtporcentajeDescuento")

    let valorReal
    let porcentajeDescuento
    valorReal= parseInt(compvalorReal.value) 
    porcentajeDescuento= parseInt(compporcentajeDescuento.value)

    let total
    total=calcularDescuento(valorReal,porcentajeDescuento);
    console.log("el valor con Descuento es : "+ total)

    let compH3DescuentoTitulo
    compH3DescuentoTitulo= document.getElementById("h3Descuento")
    compH3DescuentoTitulo.innerText=total
    
}