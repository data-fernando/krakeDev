probarCondicionales = function () {
    // 1. calcularInteres
    console.log("\nCASO 1 | calcularInteres ! \n")
    
    console.log("Interés para ingreso de $450,000:", calcularInteres(450000)); 
    console.log("Interés para ingreso de $20,000,000:", calcularInteres(2000000)); 

    // 2. calcularCapacidadPago
    console.log("\nCASO 2 | calcularCapacidadPago ! \n")

    console.log("Capacidad de pago para ingreso $2000, egreso $800, edad 45:", calcularCapacidadPago(2000, 800, 45)); 
    console.log("Capacidad de pago para ingreso $1400, egreso $800, edad 55:", calcularCapacidadPago(1400, 800, 55)); 

    // 3. calcularDescuento
    console.log("\nCASO 3 | calcularDescuento ! \n")
    console.log("Descuento aplicado a $ 100 por 4 unidades:", calcularDescuento(100, 4)); 
    console.log("Descuento aplicado a $ 98 por 16 unidades:", calcularDescuento(98, 16)); 

    // 4. determinarColesterolLDL

    console.log("\nCASO 4 | determinarColesterolLDL ! \n")
    console.log("Colesterol LDL para nivel 95:", determinarColesterolLDL(95)); 
    console.log("Colesterol LDL para nivel 130:", determinarColesterolLDL(130)); 

    // 5. validarClave
    console.log("\nCASO 5 | validarClave ! \n")
    console.log("¿Clave 'Segura123' es válida?:", validarClave("Segura123"));
    console.log("¿Clave 'hola' es válida?:", validarClave("hola"));

    // 6. esMayuscula
    console.log("\nCASO 6 | esMayuscula ! \n")
    console.log("¿'A' es mayúscula?:", esMayuscula("A")); 
    console.log("¿'a' es mayúscula?:", esMayuscula("a"));

    // 7. esMinuscula
    console.log("\nCASO 7 | esMinuscula ! \n")
    console.log("¿'g' es minúscula?:", esMinuscula("g")); 
    console.log("¿'6' es minúscula?:", esMinuscula("6"));

    // 8. esDigito
    console.log("\nCASO 8 | esDigito ! \n")
    console.log("¿'5' es dígito?:", esDigito("5"));
    console.log("¿'w' es dígito?:", esDigito("w")); 

    // 9. darPermiso
    console.log("\nCASO 9 | darPermiso ! \n")
    console.log("¿Dar permiso con notas 91, 85, 70?:", darPermiso(91, 85, 70));
    console.log("¿Dar permiso con notas 89, 87, 84?:", darPermiso(89, 87, 84));

    // 10. otorgarPermiso
    console.log("\nCASO 10 | otorgarPermiso ! \n")
    console.log("¿Otorgar permiso con notas 92, 88, 81?:", otorgarPermiso(92, 88, 81)); 
    console.log("¿Dar permiso con notas 89, 87, 84?:", otorgarPermiso(89, 87, 84));

    // 11. dejarPermiso
    console.log("\nCASO 11 | dejarPermiso ! \n")
    console.log("¿Dejar salir con notas 87, 84, 91?:", dejarPermiso(87, 84, 91)); 
    console.log("¿Dejar salir con notas 98, 99, 95?:", dejarPermiso(98, 99, 95)); 
    


}