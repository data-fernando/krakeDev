cambiarFeliz=function(){
    let cmpMensaje;
    cmpMensaje=document.getElementById("txtEmoji");
    cmpMensaje.innerText ="FELIZ";
}

cambiarCansado=function(){
    let cmpMensaje;
    cmpMensaje=document.getElementById("txtEmoji");
    cmpMensaje.innerText="CANSADO";
}

// atributo "src" incorrecto para el titulo , es "innerText " 
// "cmpImagen" incorrecto en la funcion cansado --> es cmpMensaje