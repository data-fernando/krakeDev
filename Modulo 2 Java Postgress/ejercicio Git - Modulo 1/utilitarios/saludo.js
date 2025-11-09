saludar=function(){
    let nombre=recuperarTexto("txtNombre")
    let apellido=recuperarTexto("txtApellido")
    let edad=recuperarInt("txtEdad")
    let altura=recuperarFloat("txtAltura")


    let mensajeBienvenida="Bienvenido "+nombre+" "+apellido;

    mostrarTexto("lblResultado",mensajeBienvenida)
    mostrarImagen("imgSaludo","../imagenes/nyan-cat-gif.gif")
    mostrarTextoEnCaja("txtNombre","")
    
}
