probarFunciones=function(){
    saludar();
    saludarPersona("Juan");
    saludarJugador("CristianoRonaldo","CR7")
}

saludar=function(){
    console.log("hola")
}

saludarPersona=function(nombre){
    console.log("hola "+nombre)
}

saludarJugador=function(nombre,alias){
    console.log("hola "+nombre+", "+alias)
}


probarSaludarPersona=function(){
    let compNombre;
    let nombre;
    compNombre=document.getElementById("txtNombre")
    nombre=compNombre.value
    saludarPersona(nombre)

}

probarSaludarJugador=function(){
    let compNombre;
    let compApodo;
    let nombre;
    let apodo;
    compNombre=document.getElementById("txtNombre")
    nombre=compNombre.value
    compApodo=document.getElementById("txtApodo")
    apodo=compApodo.value

    saludarJugador(nombre,apodo)
}

saludarAmigo=function(nombre,apellido,alias){
    alert("hola "+nombre+" "+apellido+", alias: el "+alias)
}


testSaludarAmigo=function(){
    let compNombre;
    let compApellido;
    let compApodo;

    let nombre;
    let apellido;
    let apodo;

    compNombre=document.getElementById("txtNombre")
    nombre=compNombre.value

    compApellido=document.getElementById("txtApellido")
    apellido=compApellido.value

    compApodo=document.getElementById("txtApodo")
    apodo=compApodo.value

    saludarAmigo(nombre,apellido,apodo)

}