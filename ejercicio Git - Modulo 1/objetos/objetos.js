probarAtributos=function(){
    let persona={
        nombre: "pedro",
        apellido: "Morales",
        edad:24,
        estaVivo:true
    }


    console.log(persona.edad)
    console.log(persona.nombre)

    if(persona.estaVivo==false){
        console.log("noo esta vivo")
    }else{
        console.log("esta vivo")
    }

}

crearProducto=function(){
    let producto1={
        nombre:"cuerdas de guitarra",
        precio:16.6,
        stock:18

    }

    let producto2={
        nombre:"cuerdas de Bajo",
        precio:25,
        stock:9

    }

    if(producto1.stock<producto2.stock){
        console.log("producto 1 tiene: "+producto1.stock+" menor stock que producto 2: "+producto2.stock)
    }else if(producto1.stock==producto2.stock){
        console.log("producto 1 tiene: "+producto1.stock+" mismo stock que producto 2: "+producto2.stock)
    }else{
         console.log("producto 1 tiene: "+producto1.stock+" mayor stock que producto 2: "+producto2.stock)
    }

}