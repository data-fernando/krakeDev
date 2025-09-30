validarEstructura=function(placa){
    let longitudPlaca=placa.length
    let mensajeError=""
    let validarPlaca=false
    


    if(longitudPlaca===7){
        
        if(!esMayuscula(placa.charAt(0)) ){
            
            mensajeError += "Error en posición 0: debe ser letra mayúscula.\n";

        }else if(!esMayuscula(placa.charAt(1))){
            mensajeError += "Error en posición 1: debe ser letra mayúscula.\n";

        }else if(!esMayuscula(placa.charAt(2))){
            mensajeError += "Error en posición 2: debe ser letra mayúscula.\n";
        }   else if (!esGuion(placa.charAt(3))) {
            mensajeError += "Error en posición 3: debe ser un guion '-'.\n";
        } else if (!esDigito(placa.charAt(4))) {
            mensajeError += "Error en posición 4: debe ser un dígito.\n";
        } else if (!esDigito(placa.charAt(5))) {
            mensajeError += "Error en posición 5: debe ser un dígito.\n";
        } else if (!esDigito(placa.charAt(6))) {
            mensajeError += "Error en posición 6: debe ser un dígito.\n";
        }         
    }else if(longitudPlaca===8){
        
        if(!esMayuscula(placa.charAt(0)) ){
            mensajeError += "Error en posición 0: debe ser letra mayúscula.\n";

        }else if(!esMayuscula(placa.charAt(1))){
            mensajeError += "Error en posición 1: debe ser letra mayúscula.\n";

        }else if(!esMayuscula(placa.charAt(2))){
            mensajeError += "Error en posición 2: debe ser letra mayúscula.\n";

        // }else if(!esMayuscula(placa.charAt(3))){
        //     mensajeError += "Error en posición 3: debe ser letra mayúscula.\n";


        }else if (!esGuion(placa.charAt(3))) {    
            mensajeError += "Error en posición 3: debe ser un guion '-'.\n";
        } else if (!esDigito(placa.charAt(4))) {
            mensajeError += "Error en posición 4: debe ser un dígito.\n";
        } else if (!esDigito(placa.charAt(5))) {
            mensajeError += "Error en posición 5: debe ser un dígito.\n";
        } else if (!esDigito(placa.charAt(6))) {
            mensajeError += "Error en posición 6: debe ser un dígito.\n";
        }else if (!esDigito(placa.charAt(7))) {
            mensajeError += "Error en posición 7: debe ser un dígito.\n";
        }


        console.log("placa valida de 8 caracteres")      
    }else if(longitudPlaca<7 ||longitudPlaca>8){
        mensajeError+="no coincide con 7, 8 caranteres en tamanio"
    }
    
    if(mensajeError===""){
        mensajeError="Placa Correcta 😊"
    }
    
    return mensajeError

}       