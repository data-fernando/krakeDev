probar = function(){
   var areaRectangulo = calcularAreaRectangulo(10,5);
   console.log("area Rectangulo: "+areaRectangulo);
   var areaCuadrado = calcularAreaCuadrado(8);
   console.log("area Cuadrado: "+areaCuadrado);
   var perimetroRectangulo = calcularPerimetroRectangulo(10,5);
   console.log("perimetro Rectangulo: "+perimetroRectangulo);
   var perimetroCuadrado = calcularPerimetroCuadrado(8);
   console.log("perimetro Cuadrado: "+perimetroCuadrado);
   var promedio=calcularPromedio(10,20,15,15);
   console.log("promedio:"+promedio);
   
}


calcularAreaRectangulo=function(lado1,lado2){
   let areaRectangulo=lado1*lado2
   return areaRectangulo

}

calcularAreaCuadrado=function(ladoCuadrado){
   let areaCuadrado=ladoCuadrado*ladoCuadrado
   return areaCuadrado

}

calcularPerimetroRectangulo=function(lado1,lado2){
   let perimetroRectangulo=2*(lado1+lado2)
   return perimetroRectangulo

}

calcularPerimetroCuadrado=function(lado){
   let perimetroCuadrado=4*(lado)
   return perimetroCuadrado

}

calcularPromedio=function(lado1,lado2,lado3,lado4){
   let promedio = (lado1+lado2+lado3+lado4)/4
   return promedio
}




