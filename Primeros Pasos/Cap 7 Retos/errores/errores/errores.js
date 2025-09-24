sumar=function(valor1,valor2){

    let resultado=parseInt(valor1)+parseInt(valor2);
    return resultado;
}
promediar=function(valor1,valor2){
    let total=parseInt(valor1)+parseInt(valor2);
    let promedio=total/2;
    return promedio;
}
probar=function(){
    let cmpValor1=document.getElementById("txtValor1");
    valor1=cmpValor1.value;
    let cmpValor2=document.getElementById("txtValor2");
    valor2=cmpValor2.value;

    let suma=sumar(valor1,valor2);
    let promedio=promediar(valor1,valor2);

    let cmpSuma=document.getElementById("lblSuma");
    cmpSuma.innerText=suma;

    let cmpPromedio=document.getElementById("lblPromedio");
    cmpPromedio.innerText=promedio;

    
}




/// se agrago el parse int
/// mal llamado el id del txt txtValor2 estaba txtvalor2