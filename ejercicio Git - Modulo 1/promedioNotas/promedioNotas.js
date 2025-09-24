calcularPromedioNotas=function(){
    let nota1=recuperarFlotante("txtNota1")
    let nota2=recuperarFlotante("txtNota2")
    let nota3=recuperarFlotante("txtNota3")

    let promedioMostrar=calcularPromedio(nota1,nota2,nota3)

    let resultado=cambiarTexto("lblPromedio",promedioMostrar)
    
    if(promedioMostrar>0 && promedioMostrar<5){
        cambiarImagen("imgResultado","https://pa1.aminoapps.com/6667/017c6348e5f7f374decdb7ea21ee0ded9394491f_hq.gif")

        // triste
    }else if(promedioMostrar>=5 && promedioMostrar <=8)
    {   
        cambiarImagen("imgResultado","https://media.tenor.com/lQcUV4tFXqgAAAAM/achievement-success.gif")
        /// buen trabajo
        
    }else if(promedioMostrar>8 && promedioMostrar <=10){
        // excelente
        cambiarImagen("imgResultado","https://i.pinimg.com/originals/4e/29/93/4e2993fa23fefd30ccd09a17049ba745.gif")
    }else {
        /// error
        cambiarImagen("imgResultado","https://i.pinimg.com/originals/46/ce/12/46ce1235c5697ce170c6e84f4b4fb4e7.gif")
    }

}