limpiar=function(){
    let compCaja1
    compCaja1=document.getElementById("txtValor1")
    compCaja1.value="0"
    let compCaja2
    compCaja2=document.getElementById("txtValor2")
    compCaja2.value="0"

    let compResultado
    compResultado=document.getElementById("lblResultado")
    compResultado.innerText="Resultado: "

}

sumar=function(){
    let compCaja1
    compCaja1=document.getElementById("txtValor1")
    valor1=compCaja1.value
    let compCaja2
    compCaja2=document.getElementById("txtValor2")
    valor2=compCaja2.value

    let resultado
    resultado=parseInt(valor1)+parseInt(valor2)
 
    let compResultado
    compResultado=document.getElementById("lblResultado")
    compResultado.innerText="Resultado es : "+resultado

}
restar=function(){
    let compCaja1
    compCaja1=document.getElementById("txtValor1")
    valor1=compCaja1.value

    let compCaja2
    compCaja2=document.getElementById("txtValor2")
    valor2=compCaja2.value

    let resultado
    resultado=parseInt(valor1)-parseInt(valor2)
  
    let compResultado
    compResultado=document.getElementById("lblResultado")
    compResultado.innerText="Resultado es : "+resultado

}
multiplicar=function(){
    let compCaja1
    compCaja1=document.getElementById("txtValor1")
    valor1=compCaja1.value
    let compCaja2
    compCaja2=document.getElementById("txtValor2")
    valor2=compCaja2.value

    let resultado
    resultado=parseInt(valor1)*parseInt(valor2)

    let compResultado
    compResultado=document.getElementById("lblResultado")
    compResultado.innerText="Resultado es : "+resultado
}
dividir=function(){
    let compCaja1
    compCaja1=document.getElementById("txtValor1")
    valor1=compCaja1.value
    let compCaja2
    compCaja2=document.getElementById("txtValor2")
    valor2=compCaja2.value
    let resultado
    resultado=parseInt(valor1)/parseInt(valor2)
    let compResultado
    compResultado=document.getElementById("lblResultado")
    compResultado.innerText="Resultado es : "+resultado
}


