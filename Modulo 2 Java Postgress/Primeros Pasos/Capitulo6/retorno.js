freir=function(alimento){
    let alimentoFrito;
    console.log("Me llega "+alimento)
    console.log("le pongo en el Sarten")
    console.log("listo")
    alimentoFrito=alimento+" frito"
    //siempre el return al final del; codigo
    return alimentoFrito
}

probarFreir=function(){

    let compComida;
    compComida=document.getElementById("txtComida")

    let comida
    let comidaLista;

    comida=compComida.value

    comidaLista=freir(comida)
    console.log("he recivido: "+comidaLista)

}