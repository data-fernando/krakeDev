let esNuevo=false

let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0}
]

//PARTE 1
mostrarOpcionEmpleado=function(){
    
    mostrarComponente("divEmpleado")
    ocultarComponente("divRol")
    ocultarComponente("divResumen")

    //AGREGADO EN LA PARTE 2
    mostarEmpleados()
    //AGREGADO EN PARTE 3 
    deshabilitarComponente("txtCedula")
    deshabilitarComponente("txtNombre")
    deshabilitarComponente("txtApellido")
    deshabilitarComponente("txtSueldo")

    deshabilitarComponente("btnGuardar")
    
}

mostrarOpcionRol=function(){
    mostrarComponente("divRol")
    ocultarComponente("divEmpleado")
    ocultarComponente("divResumen")
}

mostrarOpcionResumen=function(){
    mostrarComponente("divResumen")
    ocultarComponente("divEmpleado")
    ocultarComponente("divRol")
}

//PARTE 2 
mostarEmpleados=function(){
    
    let compTabla=document.getElementById("tablaEmpleados")

    let contenidoTabla="<table><tr> <th>CEDULA</th> <th>NOMBRE</th> <th>APELLIDO</th> <th>SUELDO</th> </tr>"
    let elementoEmpleado

    for(let i=0;i<empleados.length;i++){
        elementoEmpleado=empleados[i]
        contenidoTabla+=
        "<tr>"+
        "<td>"+elementoEmpleado.cedula+"</td>"+
        "<td>"+elementoEmpleado.nombre+"</td>"+
        "<td>"+elementoEmpleado.apellido+"</td>"+
        "<td>"+elementoEmpleado.sueldo+"</td>"
        +"</tr>"

    }

    contenidoTabla+="</table>"
    compTabla.innerHTML=contenidoTabla


}


//parte  3


ejecutarNuevo=function(){

    habilitarComponente("txtCedula")
    habilitarComponente("txtNombre")
    habilitarComponente("txtApellido")
    habilitarComponente("txtSueldo")

    habilitarComponente("btnGuardar")

    esNuevo=true
    console.log("esNuevo: "+esNuevo)

}

