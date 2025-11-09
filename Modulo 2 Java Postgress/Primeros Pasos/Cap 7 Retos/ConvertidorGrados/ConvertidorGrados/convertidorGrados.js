//Crear una funcion llamada convertirCelsiusAFarenheit 
//que reciba como parámetro la temperatura en grados celsius
//y RETORNE la temperatura en grados farenheit
convertidorGrados=function(gradosCel){
    let gradosFaren=gradosCel*1.8+32
    return gradosFaren
}

mostrarConversion=function(){
    let compCelcius
    compCelcius=document.getElementById("txtCelsius")

    let valorTomado=compCelcius.value 
    let valorMostrar=convertidorGrados(valorTomado)

    let compCelciusLbl=document.getElementById("lblFarenheit")
    compCelciusLbl.innerText=parseFloat(valorMostrar).toFixed(2)

    let compImagen=document.getElementById("imgBandera")
    compImagen.src="ok.jpg"

}

reiniciarCajaTxt=function(){

     let compCelcius
    compCelcius=document.getElementById("txtCelsius")

    compCelcius.value=""
    

    let compCelciusLbl=document.getElementById("lblFarenheit")
    compCelciusLbl.innerText=""

    let compImagen=document.getElementById("imgBandera")
    compImagen.src="pensando.jpg"

}

