modificarTexto=function(){
 let compTexto;
 compTexto=document.getElementById("titulo1");
 console.log(typeof(compTexto));
 compTexto.innerText="Texto modificado";

}

modificarImagen=function(){
 let compImagen;
 compImagen=document.getElementById("imagen1");
 console.log(typeof(compImagen));
 compImagen.src="back2.png"
 

}