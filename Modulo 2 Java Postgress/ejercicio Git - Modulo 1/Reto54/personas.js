let personas=[
    {nombre:"Markos",edad:18},
    {nombre:"Roberto",edad:15},
    {nombre:"Kate",edad:25},
    {nombre:"Diana",edad:12},
    {nombre:"Benja",edad:5}
]



agregarPersona=function(persona){
    personas.push(persona)
    alert("persona guardada correctamente")
 
}

validarNombre=function(nombre){
    let condicionCumple=false
    if(nombre.length>=3){
        condicionCumple=true
    }
    //verificar los 2 iguales siempre!!!!!!!!
    if(condicionCumple==false){
        mostrarTexto("lblErrorNombre","longitud de nombre debe ser mayor o igual a 3 caracteres")
    }

    return condicionCumple

}

validarEdad=function(edad){ 
    let condicionCumple=false
    if(edad>=0 && edad<=100){
        condicionCumple=true
    }

    if(condicionCumple==false){
        mostrarTexto("lblErrorEdad","edad fuera de rango 0:100")
    }
     return condicionCumple

}

guardarCambios=function(){
    let valorNombre=recuperarTexto("nombrePersona")
    let valorEdad=recuperarInt("edadPersona")
    let personaAgregar={}

    if(validarNombre(valorNombre) && validarEdad(valorEdad)){

        personaAgregar.nombre=valorNombre
        personaAgregar.edad=valorEdad

        agregarPersona(personaAgregar)
        
        
        
    }else{

        alert("corregir valores de las cajas de texto"+personaAgregar)
    }

    mostrarPersonas()

}

// parte 2

//mostrar Personas

mostrarPersonas=function(){
    let compTabla=document.getElementById("Tablapersonas")

    let contenidoTabla="<table><tr> <th>NOMBRE</th> <th>EDAD</th> </tr>"
    let elementoPersona

    for(let i=0;i<personas.length;i++){
        elementoPersona=personas[i]
        contenidoTabla+=
        "<tr>"+
        "<td>"+elementoPersona.nombre+"</td>"+
        "<td>"+elementoPersona.edad+"</td>"
        +"</tr>"

    }

    contenidoTabla+="</table>"
    compTabla.innerHTML=contenidoTabla

}

encontrarMayor=function(){
    personaMayor={}
    

    for(let i=0;i<personas.length;i++){
        let personaActual=personas[i]


        if(i==0){
            personaMayor=personaActual
        }

        if(personaActual.edad>personaMayor.edad){
            personaMayor=personaActual
        }

    }
    let mensaje="Persona mayor es: "+personaMayor.nombre+" con edad: "+personaMayor.edad
    mostrarTexto("lblPersnonaMayor",mensaje)
    // return personaMayor

}

encontrarMenor=function(){
    personaMenor={}
    

    for(let i=0;i<personas.length;i++){
        let personaActual=personas[i]


        if(i==0){
            personaMenor=personaActual
        }

        if(personaActual.edad<personaMenor.edad){
            personaMenor=personaActual
        }

    }
    let mensaje="Persona menor es: "+personaMenor.nombre+" con edad: "+personaMenor.edad
    mostrarTexto("lblPersnonaMenor",mensaje)
    // return personaMayor

}