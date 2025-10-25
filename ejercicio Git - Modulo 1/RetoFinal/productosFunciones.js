    // nombre: "Laptop Lenovo IdeaPad 3",
    // descripcion: "Portátil con procesador AMD Ryzen 5, 8GB RAM y SSD de 256GB.",
    // categoria: "Tecnología",
    // precio: 549.99,
    // stock: 12


let index_global=-1 ///para editar

mostrarIndice=function(){
    mostrarTexto("valorIndice",index_global)
}


//buscar elemento por nombre
buscarElementoxNombre = function () {
    let nombre = recuperarTexto("txtbuscarXnombre")
    let mensaje=""

    if (nombre != "") {

        let productoEncontrado = null
        let i_producto = null
        for (let i = 0; i < productos.length; i++) {
            let productoActual = productos[i]
            if (productoActual.nombre == nombre) {

                productoEncontrado = productoActual
                i_producto = i
                mensaje=""
                mostrarTexto("lblErrorBuscarXnombre",mensaje)   
                break
            }
        }
        if (productoEncontrado != null) {
            mostrarProductoXindice(i_producto)

            mostrarTexto("lblErrorBuscarXnombre",mensaje)    
        } else {
            mensaje+="Producto no encontrado por nombre"
            mostrarTexto("lblErrorBuscarXnombre",mensaje)
        }


    }else{
        
        mensaje+="Escriba el nombre del producto a buscar"
        mostrarTexto("lblErrorBuscarXnombre",mensaje)
    }

}



//mostrar elemento por indice
mostrarProductoXindice=function(i){
    productoActual=productos[i]
    mostrarTextoEnCaja("nombreCaja",productoActual.nombre)
    mostrarTextoEnCaja("descripcionCaja",productoActual.descripcion)
    mostrarTextoEnCaja("categoriaCaja",productoActual.categoria)
    mostrarTextoEnCaja("precioCaja",productoActual.precio)
    mostrarTextoEnCaja("stockCaja",productoActual.stock)
    index_global=i //ayudar a editar si necesario

    mostrarIndice();//ver si cambia el indice

}
//agregar elemento
agregarProducto=function(productoAgr){
    productos.push(productoAgr)
    alert("ProductoAgregadoCorrectamente")
    index_global=productos.length-1

    mostrarIndice();//ver si cambia el indice

}

//actualizar elemento

actualizarProducto=function(productoAct){
    buscarElementoxNombre(productoAct.nombre) // cambia el indice global foco si existe diferente a -1

    if(index_global!==-1){
        productos[index_global]=productoAct
        mostrarIndice();//ver si cambia el indice
        alert("Producto Actualizado Correctamente")
    }else{
        alert("producto a actualizar no capturado")
    }
    

}

//eliminar elemento por indice

eliminar=function(index) {
  const confirmar = confirm("¿Estás seguro de que deseas eliminar este producto: "+productos[index].nombre+" ?");
  if (confirmar) {
    productos.splice(index, 1); 
    mostrarProductos();
    alert("Producto eliminado correctamente.");
    limpiarNuevo()

  } else {
    alert("Operación cancelada.");
  }
}


//valorInventarioTotal global,stockInventarioTotal  global,numero de productos total
let numeroProductos=0
let valorInventario=0
let stockTotal=0


calcularValores=function(){

    for(let i=0;i<productos.length;i++){

        let productoActual=productos[i]

        numeroProductos=i+1
        valorInventario+=(productoActual.stock)*(productoActual.precio).toFixed(2)
        stockTotal+=productoActual.stock
    }    

    mostrarTexto("lblnumPro",numeroProductos)
    mostrarTexto("lblValorInventario",valorInventario)
    mostrarTexto("lblsumaStock",stockTotal)
}


// mostrarTabla

mostrarProductos=function(){
    let compTabla=document.getElementById("tablaProductos")

    let contenidoTabla="<table><tr> <th>NOMBRE</th> <th>DESCRIPCION</th> <th>CATEGORIA</th> <th>Stock</th> <th>PRECIO</th> <th>Precio+IVA</th> <th>Acciones</th>   </tr>"
    let elementoProducto

    for(let i=0;i<productos.length;i++){
        elementoProducto=productos[i]
        contenidoTabla+=
        "<tr>"+
        "<td>"+elementoProducto.nombre+"</td>"+
        "<td>"+elementoProducto.descripcion+"</td>"+
        "<td>"+elementoProducto.categoria+"</td>"+
        "<td>"+elementoProducto.stock+"</td>"+
        "<td>"+elementoProducto.precio+"</td>"+
        "<td>"+((elementoProducto.precio)*1.12).toFixed(2)+"</td>"+
        "<td>"+
            "<input type='button' id='editarItemBoton' value='editar' onclick='mostrarProductoXindice("+i+")'/>"+
            "<input type='button' id='eliminarItemBoton' value='eliminar' onclick='eliminar("+i+")'/>"

        +"</td>"
        +"</tr>"

    }

    contenidoTabla+="</table>";
    compTabla.innerHTML=contenidoTabla;

    mostrarIndice();
    calcularValores()

}
///agregarNuevoLimpiar
limpiarNuevo=function(){
    cadenaVacia=""

    mostrarTextoEnCaja("nombreCaja",cadenaVacia)
    mostrarTextoEnCaja("descripcionCaja",cadenaVacia)
    mostrarTextoEnCaja("categoriaCaja",cadenaVacia)
    mostrarTextoEnCaja("precioCaja",cadenaVacia)
    mostrarTextoEnCaja("stockCaja",cadenaVacia)

    index_global=-1

    mostrarIndice();//ver si cambia el indice

    mostrarTexto("lblErrorNombre",cadenaVacia)
    mostrarTexto("lblErrorDescripcion",cadenaVacia)
    mostrarTexto("lblErrorCategoria",cadenaVacia)
    mostrarTexto("lblErrorPrecio",cadenaVacia)
    mostrarTexto("lblErrorStock",cadenaVacia)

    mostrarTexto("lblErrorBuscarXnombre",cadenaVacia)

}





// guardar
guardar=function(){
    let valorNombre=recuperarTexto("nombreCaja")
    let valorDescripcion=recuperarTexto("descripcionCaja")
    let valorCategoria=recuperarTexto("categoriaCaja")
    let valorPrecio=recuperarFloat("precioCaja")
    let valorStock=recuperarInt("stockCaja")

    let validacionNombre=validarNombre(valorNombre)
    let validacionDescripcion=validarDescripcion(valorDescripcion)
    let validacionCategoria=validarCategoria(valorCategoria)
    let validacionPrecio=validarPrecio(valorPrecio)
    let validacionStock=validarStock(valorStock)

    let productoTrabajo={}

    if(validacionNombre & validacionDescripcion & validacionCategoria & validacionPrecio & validacionStock ){

        productoTrabajo.nombre=valorNombre
        productoTrabajo.descripcion=valorDescripcion
        productoTrabajo.categoria=valorCategoria
        productoTrabajo.precio=valorPrecio
        productoTrabajo.stock=valorStock

        //agregarnuevo
        if(index_global==-1){
            agregarProducto(productoTrabajo)

        }else{
            actualizarProducto(productoTrabajo)
        }

    }

    mostrarProductos()
    


}




