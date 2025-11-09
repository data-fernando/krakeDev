calcularPromedio = function (nota1, nota2, nota3) {
    let promedio;
    promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

calcular = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    let error=""
    let existeError=false
    nota1 = recuperarFloat("txtNota1");
    if(isNaN(nota1)){
        mostrarTexto("lblError1","DEBE DE INGRESAR UN NUMERO")
        error=error+" n1: "+nota1
        
        existeError=true
    }else{
        mostrarTexto("lblError1","")
    }

    nota2 = recuperarFloat("txtNota2");

    if(isNaN(nota2)){
        mostrarTexto("lblError2","DEBE DE INGRESAR UN NUMERO")
        error=error+" n2: "+nota2
        existeError=true
    }else{
        mostrarTexto("lblError2","")
    }


	nota3 = recuperarFloat("txtNota3");

    if(isNaN(nota3)){
        mostrarTexto("lblError3","DEBE DE INGRESAR UN NUMERO")
        error=error+" n3: "+nota3
        existeError=true
    }else{
        mostrarTexto("lblError3","")
    }

    if(existeError==false){
         resultado = calcularPromedio(nota1, nota2, nota3);
        resultadoFormato = resultado.toFixed(2);
        mostrarTexto("lblResultado", resultadoFormato);

    }else if(existeError=true){
        alert("Error en "+error)
    }
   
}


calcular2 = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    
    nota1 = recuperarFloat("txtNota1");
    nota2 = recuperarFloat("txtNota2");
    nota3 = recuperarFloat("txtNota3");


    if(esNotaValida(nota1,"lblError1") & esNotaValida(nota2,"lblError2")  & esNotaValida(nota3,"lblError3") ){
        resultado = calcularPromedio(nota1, nota2, nota3);
        resultadoFormato = resultado.toFixed(2);
        mostrarTexto("lblResultado", resultadoFormato);

    }else{
        mostrarTexto("lblResultado","0.0")
    }

}

    esNotaValida = function (nota, idComponenteError) {

        let esValido=false

        if (isNaN(nota)) {
            mostrarTexto(idComponenteError, "DEBE DE INGRESAR UN NUMERO")
            error = error + " n: " + nota
            
        }if(nota<0 || nota>10){
            mostrarTexto(idComponenteError, "Ingrese un numero entre 0 y 10")
         } else { 
            mostrarTexto(idComponenteError, "")
            /// la unica condicion que verifica si es valida
            esValido=true
            
        }if(esValido==false){
            mostrarTexto(idComponenteError, "")
        }
        
        return esValido


    }

