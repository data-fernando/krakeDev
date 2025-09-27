promediarNotas=function(nota1,nota2,nota3){
    let promedio =(nota1+nota2+nota3)/3
    let mensaje
    if(promedio<5 && promedio>0){
        mensaje="REPROBADO"
    }else if(promedio>=5 && promedio<8){
        mensaje="BUEN TRABAJO"
    }
}