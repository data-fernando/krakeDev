let clientes=[
    {cedula:"1223843934",nombre:"frasncos",edad:26},
    {cedula:"4841615115",nombre:"romeo",edad:40},
    {cedula:"1897878566",nombre:"sebas",edad:42}
]
////


mostrarClientes=function(){
    let compTabla=document.getElementById("Tablaclientes")

    let contenidoTabla="<table><tr> <th>CEDULA</th> <th>NOMBRE</th> <th>EDAD</th> </tr>"
    let elementoCliente

    for(let i=0;i<clientes.length;i++){
        elementoCliente=clientes[i]
        contenidoTabla+=
        "<tr>"+
        "<td>"+elementoCliente.cedula+"</td>"+
        "<td>"+elementoCliente.nombre+"</td>"+
        "<td>"+elementoCliente.edad+"</td>"
        +"</tr>"

    }

    contenidoTabla+="</table>"
    compTabla.innerHTML=contenidoTabla

}

// mostrarClientes();

crearCliente=function(){
    let valorCedula=recuperarTexto("cedulaCliente")
    let valorNombre=recuperarTexto("nombreCliente")
    let valorEdad=recuperarInt("edadCliente")

    let nuevoCliente={}

        nuevoCliente.cedula=valorCedula
        nuevoCliente.nombre=valorNombre
        nuevoCliente.edad=valorEdad
    
    agregarCliente(nuevoCliente)
    mostrarClientes();


}

ejecutarBusqueda=function(){
    let valorCedula=recuperarTexto("cedulaA_Buscar")
    let cliente=buscarCliente(valorCedula)

    if(cliente==null){
        alert("cliente no encontrado")
    }else{
        mostrarTextoEnCaja("cedulaCliente",cliente.cedula)
        mostrarTextoEnCaja("nombreCliente",cliente.nombre)
        mostrarTextoEnCaja("edadCliente",cliente.edad)


    }

}

agregarCliente=function(cliente){
    let clienteA_Agregar=buscarCliente(cliente.cedula)

    if(clienteA_Agregar==null){
        clientes.push(cliente)
    }else {
        alert("ya esxite el cliente con esa cedula")
    }


}
//esta
buscarCliente=function(cedula){
    let elementoCliente
    let elementoEncontrado=null

    for(let i=0;i<clientes.length;i++){
        elementoCliente=clientes[i]

        if(elementoCliente.cedula==cedula){
            elementoEncontrado=elementoCliente
            break;
        }

    }
    return elementoEncontrado
}

guardarCambios=function(){
    let valorCedula=recuperarTexto("cedulaCliente")
    let valorNombre=recuperarTexto("nombreCliente")
    let valorEdad=recuperarInt("edadCliente")

    
    let datosCliente={}

        datosCliente.cedula=valorCedula
        datosCliente.nombre=valorNombre
        datosCliente.edad=valorEdad
    
    
    modificarCliente(datosCliente)
    mostrarClientes();
}

modificarCliente=function(cliente){
    let clienteEncontrado=buscarCliente(cliente.cedula)

    if(clienteEncontrado!=null){
        clienteEncontrado.nombre=cliente.nombre
        clienteEncontrado.edad=cliente.edad

    }

}