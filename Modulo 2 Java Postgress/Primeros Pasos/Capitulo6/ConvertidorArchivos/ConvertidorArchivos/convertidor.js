//Crear una funcion llamada convertirEnEuros
//que reciba como parámetro el valor en dolares
//y RETORNE el equivalente en Pesos Mexicanos
convertirEnPesosMx=function(dolares){
    let pesosMexicanos=dolares*17.99
    return pesosMexicanos
}

mostrarPesosMX=function(){
    let compValor
    let valor
    compValor=document.getElementById("txtValor")
    valor=compValor.value
    valor=parseFloat(valor)
    valorEnPesos=convertirEnPesosMx(valor)
    
    let compEquivalente=document.getElementById("lblValor")
    // to ficxed es para redondear los decimales
    compEquivalente.innerText=valorEnPesos.toFixed(4)

    let lblTipoMoneda=document.getElementById("lblMoneda")
    lblTipoMoneda.innerText="Pesos Mexicanos"

    let compImgBandera=document.getElementById("imgBandera")
    compImgBandera.src="banderaMx.png"

}


convertirEnPesosCo=function(dolares){
    let pesosColombianos=dolares*4050
    return pesosColombianos
}

mostrarPesosCo=function(){
    let compValor
    let valor
    compValor=document.getElementById("txtValor")
    valor=compValor.value
    valor=parseFloat(valor)
    valorEnPesos=convertirEnPesosCo(valor)
    
    let compEquivalente=document.getElementById("lblValor")
    // to ficxed es para redondear los decimales
    compEquivalente.innerText=valorEnPesos.toFixed(4)

    let lblTipoMoneda=document.getElementById("lblMoneda")
    lblTipoMoneda.innerText="Pesos Colombianos"

    let compImgBandera=document.getElementById("imgBandera")
    compImgBandera.src="banderaColombia.png"



}

convertirEnEuros=function(dolares){
    let Euros=dolares*0.86
    return Euros
}

mostrarEuros=function(){
    let compValor
    let valor
    compValor=document.getElementById("txtValor")
    valor=compValor.value
    valor=parseFloat(valor)
    valorEnEuros=convertirEnEuros(valor)
    
    let compEquivalente=document.getElementById("lblValor")
    // to ficxed es para redondear los decimales
    compEquivalente.innerText=valorEnEuros.toFixed(4)

    let lblTipoMoneda=document.getElementById("lblMoneda")
    lblTipoMoneda.innerText="Euros"

    let compImgBandera=document.getElementById("imgBandera")
    compImgBandera.src="unionEuropea.jpg"



}