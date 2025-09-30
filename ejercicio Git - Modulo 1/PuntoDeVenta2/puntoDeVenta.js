

calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto; // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidad; // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
    let porcentajeDescuento; 

    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    
    //1. Recuperar el nombre del producto como String
        nombreProducto=recuperarTexto("txtProducto")
    //2. Recuperar el precio como float
        precioProducto=recuperarFloat("txtPrecio")
    //3. Recuperar cantidad como int
        cantidad=recuperarInt("txtCantidad")
    //4. Recuperar el porcentaje de descuento como int
    //Variacion

        // porcentajeDescuento=recuperarInt("txtPorcentajeDescuento")

    //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
    // Tomar en cuenta el orden de como pasa los parametos de la funcion y colocar bien
    // los parametros cuando invoca la funcion.
        valorSubtotal=calcularSubtotal(precioProducto,cantidad)

    //5. Mostrar valorSubtotal en el componente lblSubtotal
    // Utilizar mostrarTexto
        mostrarTexto("lblSubtotal",valorSubtotal)
        /*
        Caso de prueba: 
            - cantidad: 10
            - precioProducto: 5.4  
            Subtotal esperado: 54
        Si el caso de prueba es exitoso, hacer un commit
     */

    //6. Invocar a calcularValorDescuento y lo que devuelve guardar en la variable valorDescuento
        
        //valorDescuento=calularValorDescuento(valorSubtotal,porcentajeDescuento)
        valorDescuento=calcularDescuentoPorVolumen(valorSubtotal,cantidad)

    //7. Mostrar el resultado en el componente lblDescuento
        mostrarTexto("lblDescuento",valorDescuento)
    /*
        Caso de prueba: 
            - cantidad: 10 
            - precioProducto: 5.4  
            - descuento: 10
            - Descuento esperado: 5.4
        Si el caso de prueba es exitoso, hacer un commit
     */
    //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
    // El IVA debe calcularse sobre el valor del subtotal menos el descuento
        valorIVA=calcularIVA(valorSubtotal-valorDescuento)

    //9. Mostrar el resultado en el componente lblValorIVA  
        mostrarTexto("lblValorIVA",valorIVA)
        /*
            Caso de prueba: 
                - cantidad: 10 
                - precioProducto: 5.4  
                - descuento: 10

                    - valorSubtotal: 54
                    - descuento:5.4
                    - valorSubtotal 
                    - descuento: 48.6

                IVA esperado: 5.832

            Si el caso de prueba es exitoso, hacer un commit
        */

    //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
        valorTotal=calcularTotal(valorSubtotal,valorDescuento,valorIVA).toFixed(2)

    //11. Mostrar el resultado en el componente lblTotal
        mostrarTexto("lblTotal",valorTotal)

    /*
        Caso de prueba: 
            - cantidad: 10
            - precioProducto: 5.4 
            - descuento: 10

                --valorSubtotal: 5.4
                --descuento: 5.4
                --IVA: 5.832

                Total esperado: 54.432

                Si el caso de prueba es exitoso, hacer un commit
       */
            
    //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
    /*
        

        Ejemplo: 
            Valor a pagar por 20 cerveza corona con 10% de descuento: USD 48.75
        Si funciona, hacer un commit
    */
    
    let mensaje="Valor a pagar por "+cantidad+" "+nombreProducto+" es de USD: "+valorTotal
    mostrarTexto("lblMensaje",mensaje) 


}


limpiar = function () {
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */

    let cadenaVacia=""    
    mostrarTextoEnCaja("txtProducto",cadenaVacia)
    // mostrarTextoEnCaja("txtPorcentajeDescuento",cadenaVacia)
    mostrarTextoEnCaja("txtCantidad",cadenaVacia)
    mostrarTextoEnCaja("txtPrecio",cadenaVacia)    

    let numeroEncerado=0.0

    mostrarTexto("lblSubtotal",numeroEncerado)
    mostrarTexto("lblDescuento",numeroEncerado)
    mostrarTexto("lblValorIVA",numeroEncerado)
    mostrarTexto("lblTotal",numeroEncerado)   
    mostrarTexto("lblMensaje","")     
     /// encerar las validaciones
    mostrarTextoEnCaja("lblErrorProducto",cadenaVacia)
    mostrarTextoEnCaja("lblErrorCantidad",cadenaVacia)
    mostrarTextoEnCaja("lblErrorPrecio",cadenaVacia)

}
/* SI TODO FUNCIONA, HACER UN PUSH */

//VALIDACIONES


calcular2 = function () {
    let producto;
    let cantidad;
    let precio;
    let total;
    let esCamposLleno=false

    let camposValidos=false
  
    
   
    producto = recuperarTexto("txtProducto");
    console.log(typeof(producto))
    cantidad = recuperarInt("txtCantidad");
    precio = recuperarFloat("txtPrecio");
    // valor lleno condicion


    if(serValorLleno(producto,"lblErrorProducto") & serValorLleno(cantidad,"lblErrorCantidad") & serValorLleno(precio,"lblErrorPrecio") ){
         console.log("campos llenos")
         esCamposLleno=true

         if(validarNombre(producto,"lblErrorProducto") & validarCantidad(cantidad,"lblErrorCantidad") & validarPrecio(precio,"lblErrorPrecio"))
         { camposValidos=true

            if(camposValidos && esCamposLleno){
                total=calcularValorTotal();
                mostrarTexto("lblResultado", total.toFixed(2));
            }

         }else{console.log("un campo estubo malo")}

    }else{
        console.log("debe haber un campo vacio")
    }

 


}

serValorLleno = function (valorCaja, idComponenteError) {
    let esValido = false;
    let valor = valorCaja; 

    if (valor === "") {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
    } else {
        esValido = true;
    }

    console.log(valor + " valor lleno? : " + esValido);
    return esValido;
}


    validarNombre=function(valorCaja, idComponenteError){
        let numeroChar=valorCaja.length
        let esValido=false
        let error=""
        if(numeroChar>10){
            mostrarTexto(idComponenteError, "Nombre no mayor de 10 Caracteres")
            error = error + " n: " + valorCaja
        }else{
            esValido=true
            
        }
        
        return esValido

    }

     validarCantidad=function(valorCaja, idComponenteError){
        let esValido=false
        let error=""
        if(valorCaja<0 || valorCaja>100){
            mostrarTexto(idComponenteError, "Cantidad entre 0 y 100")
            error = error + " n: " + valorCaja
        }else{
            esValido=true
        }
        return esValido
    }

    validarPrecio=function(valorCaja,idComponenteError){
          let esValido=false
          let error=""
        if(valorCaja<0 || valorCaja>50){
            mostrarTexto(idComponenteError, "precio entre 0 y 50")
            error = error + " n: " + valorCaja
        }else{
            esValido=true
        }
        return esValido
    }





