//No se olvide de respirar, mantenga la calma y demuestre lo que sabe

let palabraSecreta = ""
let intentosJugador=0
let coincidencias=0
let numerrores=0

//paso 0
esMayuscula = function (caracter) {
    let cumpleCondicion = false
    let rangoInferior = 65;///codigo ascci
    let rangoSuperior = 90;///codigo ascci
    let char = caracter.charCodeAt(0)

    if (char <= rangoSuperior && char >= rangoInferior) {
        cumpleCondicion = true
    }
    console.log(caracter + " cumple esMayuscula: " + cumpleCondicion)
    return cumpleCondicion
}

//paso 1 
guardarPalabra = function () {
   
    let palabraSecretaANALISIS = recuperarTexto("txtSecreta")
    let tamanio=palabraSecretaANALISIS .length
    let condicionCumple = false



    console.log("palabra 'guardarPlabra()' es: "+palabraSecretaANALISIS)
    console.log("tamanio palabra: "+tamanio)


    if (tamanio != 5) {
        alert("palabra debe ser exactamente de 5 caracteres")
    }else{
            let charActual=""
            let condicionActual=false

            for (i=0;i<=tamanio;i++) { 

                charActual=palabraSecretaANALISIS.charAt(i)

                if(esMayuscula(charActual)){
                    condicionActual=true
                    if(i==0){
                        condicionCumple=true
                    }
                }

                console.log("char actual es: '"+charActual+"' condicion "+condicionCumple)

                condicionCumple=condicionCumple&&condicionActual
            }
            console.log("Cumple condicion general: "+condicionActual)
    }


    if(condicionCumple==true){
        
        palabraSecreta=palabraSecretaANALISIS

        console.log("se guardo la palabra correctamente "+palabraSecreta)

    }

}

//paso 2
mostrarLetra=function(letra,posicion){

    if(posicion==0){
        mostrarTexto("div0",letra)
    }

    if(posicion==1){
        mostrarTexto("div1",letra)
    }
    
    if(posicion==2){
        mostrarTexto("div2",letra)
    }
    if(posicion==3){
        mostrarTexto("div3",letra)
    }
    if(posicion==4){
        mostrarTexto("div4",letra)
    }

}

//paso 3

validar=function(letra){
    let palabraSecretaLocal=palabraSecreta
    let tamanio=palabraSecretaLocal.length
    let letrasEncontrada=0
    // let existeEnPalabra=false

    for(i=0;i<=tamanio;i++){
        if(letra==palabraSecretaLocal.charAt(i)){
            mostrarLetra(letra,i);
            letrasEncontrada++;

            ///
            

        }
        
    }

    if(letrasEncontrada==0){
        numerrores++;
    }

    //paso 5 ?
    coincidencias+=letrasEncontrada

    console.log("letras enncontradas: "+letrasEncontrada)
}

//paso 4 / 5

ingresarLetra = function () {
    let letraIngresada = recuperarTexto("txtLetra");

    intentosJugador++;

    if(esMayuscula(letraIngresada)==false){
        alert("ingresar letra mayusculas")
    }else{

        validar(letraIngresada)  //mostrar letra
        mostrarAhorcado()
    }

    console.log("--------------------------------\n")
    console.log("intentos: " + intentosJugador + "\nconincidencias: " + coincidencias+"\nerrores: "+numerrores)

    if (coincidencias==5) {
        mostrarImagen("ahorcadoImagen","ganador.gif")
        alert("HAS GANADO")
        
    }

    if(numerrores==10){
        mostrarImagen("ahorcadoImagen","gameOver.gif")
        alert("HAS perdido")
    }



}

mostrarAhorcado=function(){
    console.log("errores : "+numerrores)
    if(numerrores==0){
    }
    if(numerrores==1){
        mostrarImagen("ahorcadoImagen","Ahorcado_01.png")
    }

    if(numerrores==2){
        mostrarImagen("ahorcadoImagen","Ahorcado_02.png")
    }
    if(numerrores==3){
        mostrarImagen("ahorcadoImagen","Ahorcado_03.png")
    }

    if(numerrores==4){
        mostrarImagen("ahorcadoImagen","Ahorcado_04.png")
    }

    if(numerrores==5){
        mostrarImagen("ahorcadoImagen","Ahorcado_05.png")
    }

    if(numerrores==6){
        mostrarImagen("ahorcadoImagen","Ahorcado_06.png")
    }

    if(numerrores==7){
        mostrarImagen("ahorcadoImagen","Ahorcado_07.png")
    }
    if(numerrores==8){
        mostrarImagen("ahorcadoImagen","Ahorcado_08.png")
    }
    if(numerrores==9){
        mostrarImagen("ahorcadoImagen","Ahorcado_09.png")
    }


}

