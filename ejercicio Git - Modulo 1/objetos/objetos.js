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


modificarAtributos=function(){

    let cuenta = {
        numero: "5323423423",
        saldo:0.0

    }

    cuenta.saldo=100
    cuenta.saldo+=10
    console.log("saldo de la cuenta es"+cuenta.saldo+" "+modificarAtributos.name)


}

crearCliente=function(){
    let cliente={
        nombre:"juan",
        cedula:"1625489635"
    }

    let cliente1={}
    cliente1.nombre="Romeo"
    cliente1.cedula="0845963578"


}

probarincrementarSaldo=function(){
    let cta={numero:"2325242659",saldo:34.0}
    console.log(cta.saldo)

    incrementarSaldo(cta,100)


    console.log(cta.saldo)

}

probarDeterminarMayor=function(){
    let perMayor
    let per1={nombre:"Romeo",edad:45}
    let per2={nombre:"Rosa",edad:40}

    perMayor=determinarMayor(per1,per2)

    if(perMayor==null){
        console.log("ambos tienen la misma edad")
    }else{
        console.log("la persona mayor es: "+per1.nombre)
    }




}

incrementarSaldo=function(cuenta,monto){
        cuenta.saldo+=monto
}

determinarMayor=function(persona1,persona2){
    let personaMayor

    if(persona1.edad>persona2.edad){
        personaMayor=persona1
    }else if(persona1.edad<persona2.edad){
        personaMayor=persona2
    }else{
        personaMayor=null
    }

    return personaMayor
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