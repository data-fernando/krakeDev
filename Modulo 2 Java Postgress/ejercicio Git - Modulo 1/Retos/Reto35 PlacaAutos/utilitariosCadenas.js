esMayuscula=function(caracter){
    let cumpleCondicion=false
    let rangoInferior=65;///codigo ascci
    let rangoSuperior=90;///codigo ascci
    let char=caracter.charCodeAt(0)
    
    if(char<=rangoSuperior && char>=rangoInferior){
        cumpleCondicion=true
    }
    console.log(caracter+" cumple esMayuscula: "+cumpleCondicion)
    return cumpleCondicion
}
esMinuscula=function(caracter){
    let cumpleCondicion=false
    let rangoInferior=97; ///codigo ascci
    let rangoSuperior=122; ///codigo ascci
    let char=caracter.charCodeAt(0)
    
    if(char<=rangoSuperior && char>=rangoInferior){
        cumpleCondicion=true
    }
    console.log(caracter+" cumple esMinuscula: "+cumpleCondicion)

    return cumpleCondicion

}

esDigito=function(caracter){
    let cumpleCondicion=false
    let rangoInferior=48; ///codigo ascci
    let rangoSuperior=57; ///codigo ascci
    let char=caracter.charCodeAt(0)
    
    if(char<=rangoSuperior && char>=rangoInferior){
        cumpleCondicion=true
    }
    console.log(caracter+" cumple esDigito: "+cumpleCondicion)
    return cumpleCondicion

}

esGuion=function(caracter){
    let cumpleCondicion=false
    let codigoGuion=45;
    let char=caracter.charCodeAt(0)
    
    if(char==codigoGuion){
        cumpleCondicion=true
    }
    console.log(caracter+" cumple esGuion: "+cumpleCondicion)

    return cumpleCondicion

}