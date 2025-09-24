//logica

calcularUtilidad=function(ingresos,gastos){
    let resultadoUtilidad;
    resultadoUtilidad=ingresos-gastos
    return resultadoUtilidad

}

//coneccion con la pagina
testCalcularUtilidad=function(){
    let compIngreso;
    let compGasto;

    compIngreso=document.getElementById("txtIngreso")
    compGasto=document.getElementById("txtGasto")

    let ingreso
    let gasto
    ingreso= parseInt(compIngreso.value) 
    gasto= parseInt(compGasto.value)

    let utildad
    utildad=calcularUtilidad(ingreso,gasto);
    console.log("la utilidad es : "+ utildad)
    let compH3UtilidadTitulo
    compH3UtilidadTitulo= document.getElementById("h3Utilidad")
    compH3UtilidadTitulo.innerText=utildad
    
}