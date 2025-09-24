convertir=function(){
    let compCaja1
    compCaja1=document.getElementById("txtValor1")
    valor1=compCaja1.value
 

    let resultado
    resultado=(parseInt(valor1))*(9/5)
    resultado=resultado+32
 
    let compResultado
    compResultado=document.getElementById("lblResultado")
    compResultado.innerText="Resultado en grados Fahrenheires : "+resultado

}