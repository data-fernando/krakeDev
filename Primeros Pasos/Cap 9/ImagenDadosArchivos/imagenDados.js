let puntos=0
let lanzamientos=5

jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado)
    modificarPuntos(resultado)
    modificarLanzamientos()
   
}

modificarPuntos=function(numero){
    puntos=puntos+numero
    cambiarTexto("lblPuntos",puntos)
    if(puntos>15){
        cambiarTexto("lblMensaje","Ganaste")

    } 
}

modificarLanzamientos=function(){
    lanzamientos=lanzamientos-1
    cambiarTexto("lblLanzamientos",lanzamientos)
    if(lanzamientos==0){
        cambiarTexto("lblMensaje","Perdiste")
       
    } else if(lanzamientos<0){
        limpiar()
    }
}

limpiar=function(){
    puntos=0
    lanzamientos=5
    cambiarTexto("lblMensaje","")
    cambiarTexto("lblPuntos","0")
    cambiarTexto("lblLanzamientos","5")
    cambiarImagen("imagDados","")
}

mostrarCara=function(numero){

    if(numero ==1 ){
        cambiarImagen("imagDados","dados1.png")
 
    } else if(numero==2){
        cambiarImagen("imagDados","dados2.png")

    } else if(numero==3){
        cambiarImagen("imagDados","dados3.png")

    }
    else if(numero==4){
        cambiarImagen("imagDados","dados4.png")
 
    } else if(numero==5){
        cambiarImagen("imagDados","dados5.png")

    } else if(numero==6){
        cambiarImagen("imagDados","dados6.png")

    }

}    
    
lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}