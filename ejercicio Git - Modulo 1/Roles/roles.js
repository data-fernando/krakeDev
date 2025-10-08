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

    

    // si es nuevo == true

    habilitarComponente("txtCedula")
    habilitarComponente("txtNombre")
    habilitarComponente("txtApellido")
    habilitarComponente("txtSueldo")

    habilitarComponente("btnGuardar")

    esNuevo=true
    console.log("esNuevo: "+esNuevo)

}



buscarEmpleado=function(cedula){
    let elementoEmpleado
    let elementoEncontrado=null

    for(let i=0;i<empleados.length;i++){
        elementoEmpleado=empleados[i]

        if(elementoEmpleado.cedula==cedula){
            elementoEncontrado=elementoEmpleado
            break;
        }

    }
    return elementoEncontrado
}


agregarEmpleado=function(empleado){
    let empleadoA_Agregar=buscarEmpleado(empleado.cedula)
    let existeEmpleado=false

    if(empleadoA_Agregar==null){
        empleados.push(empleado)
        existeEmpleado=true
    }else {
        alert("ya esxite el empleado con esa cedula: "+empleadoA_Agregar.cedula)
        

    }

    return existeEmpleado


}


//validaciones para funcion guardar
//validacion es digito
esDigito = function (caracter) {
    let cumpleCondicion = false
    let rangoInferior = 48; ///codigo ascci
    let rangoSuperior = 57; ///codigo ascci
    let char = caracter.charCodeAt(0)

    if (char <= rangoSuperior && char >= rangoInferior) {
        cumpleCondicion = true
    }
    console.log(caracter + " cumple esDigito: " + cumpleCondicion)
    return cumpleCondicion

}

validarCedula=function(cadenaCedula){

    let longitudCadena = cadenaCedula.length
    let condicionCumple = false
    let mensajeErrorCedula=""
    

    // verifica tamanio de 10
    if(longitudCadena==10){


        for(let i=0;i<longitudCadena;i++){
            let charActual=cadenaCedula[i]
            let condicionActual=esDigito(charActual)

            if(condicionActual==true){
                if(i==0){
                    condicionCumple=true
                }
            }

            console.log("char actual es: '"+charActual+"' condicion "+condicionCumple)
                /// AL menos uno o todos

            condicionCumple=condicionCumple&&condicionActual

        }

        if (condicionCumple == false) {
            mensajeErrorCedula = "No cumple condicion de todos deben ser digitos"
        }

        
        
    }else{
        mensajeErrorCedula="Numero de digitos en cedula debe ser de 10"
    }

    console.log("\nCONDICION GENERAL DE CEDULA ES: "+condicionCumple+"\n")
    
    mostrarTexto("lblErrorCedula",mensajeErrorCedula)
    

    return condicionCumple

}


esMayuscula = function (caracter) {
    let cumpleCondicion = false
    let rangoInferior = 65;///codigo ascci
    let rangoSuperior = 90;///codigo ascci
    let char = caracter.charCodeAt(0)

    if (char <= rangoSuperior && char >= rangoInferior) {
        cumpleCondicion = true
    }
    console.log(caracter + " cumple esMayuscula: " + cumpleCondicion)
    return cumpleCondicion
}

validarNombreO_Apellido = function (cadenaNombreApellido) {

    let longitudCadena = cadenaNombreApellido.length
    let condicionCumple = false
    let mensajeErrorCadena = ""


    // verifica tamanio de 3
    if (longitudCadena >= 3) {


        for (let i = 0; i < longitudCadena; i++) {
            let charActual = cadenaNombreApellido[i]
            let condicionActual = esMayuscula(charActual)

            if (condicionActual == true) {
                if (i == 0) {
                    condicionCumple = true
                }
            }else if(condicionActual==false){
                condicionCumple=false
                break;
            }

            console.log("char actual es: '" + charActual + "' condicion " + condicionCumple)
            /// AL menos uno o todos

            condicionCumple = condicionCumple && condicionActual

            

        }

        if (condicionCumple == false) {
            mensajeErrorCadena = "No cumple condicion de todos deben ser Mayusculas"

        }

    } else {
        mensajeErrorCadena = "Numero caracteres en este campo debe ser mayor a 3"
    }


    console.log(mensajeErrorCadena)
    // mostrarTexto("lblErrorCedula", mensajeErrorCedula)
    
    let valorNombre_local=recuperarTexto("txtNombre");//lblErrorNombre
    let valorApellido_local=recuperarTexto("txtApellido")//lblErrorApellido
    let nombreComponenteError;

    if(cadenaNombreApellido===valorNombre_local){
        nombreComponenteError="lblErrorNombre"
    }else if(cadenaNombreApellido===valorApellido_local){
        nombreComponenteError="lblErrorApellido"
    }else {
        mensajeErrorCadena="otro error"
    }

    console.log("\nCONDICION GENERAL DE CADENA "+ cadenaNombreApellido +" ES: "+condicionCumple+"\n")

    mostrarTexto(nombreComponenteError,mensajeErrorCadena)


    return condicionCumple

}

validarFloat=function(valorFlotante){
    let valorA_Validar=valorFlotante
    let condicionCumple = false
    let mensajeErrorFloat=""
     if(valorA_Validar>400 && valorA_Validar<5000){
        condicionCumple=true
     }else{
        mensajeErrorFloat="valor debe ser entre 400 y 5000"
     }
    mostrarTexto("lblErrorSueldo",mensajeErrorFloat)

    console.log("\nCONDICION GENERAL DE SUELDO ES: "+condicionCumple+"\n")
    
    return condicionCumple

    

}



guardar=function(){
    let valorCedula=recuperarTexto("txtCedula");//lblErrorCedula
    let valorNombre=recuperarTexto("txtNombre");//lblErrorNombre
    let valorApellido=recuperarTexto("txtApellido")//lblErrorApellido
    let valorSueldo=recuperarFloat("txtSueldo")//lblErrorSueldo

   
    
    if (validarCedula(valorCedula) & validarNombreO_Apellido(valorNombre) & validarNombreO_Apellido(valorApellido) & validarFloat(valorSueldo)) {

        console.log("EJECUTADO VALORES CORRECTOS")

        let nuevoEmpleado = {
            cedula: valorCedula,
            nombre: valorNombre,
            apellido: valorApellido,
            sueldo: valorSueldo
        }

        let empleadoAgregado=agregarEmpleado(nuevoEmpleado)

        if(empleadoAgregado==true){
            alert("EmpleadoGuardado Correctamente");
            
        }

        mostrarOpcionEmpleado();
    
    }


}

