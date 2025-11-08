-- update tabla set columna=dato where columnaID=valor
-- update tabla set columna=dato where columnaID is null
-- update tabla set columna=dato where columnaID ='char',otraColumna=12

--Productos
--actualizar stock a 0 donde descripcion es null
update productos set stock=0 where descripcion is null; 
--Cuentas
--editar el saldo a 10 donde la cedula empiece con 17
update cuentas set saldo=10.00 where cedula_propietario like '17%';

--Estudiantes
--actualizar los apellidos a hernandez dond las cedulas empiecen con 17
update estudiantes set apellido='Hernandez' where  cedula like '17%';

--Registros entradas
--editar cedula a "082345679"" donde mes sea agosto (8)
update registros_entrada set cedula_empleado = "082345679" where date between '2023-05-01' and '2025-08-31';
update registros_entrada set cedula_empleado = '082345679' where extract(month from fecha)=8;
--Videojuegos
--cambiar descriopcion a mejor puntuado donde valoraciones mayor a 9
update videojuegos set descripcion='Mejor Puntuado'  where valoracion>9;
--Transacciones
--coambiar a tipo a 'T' donde el monto sea entre 100 y 500 en el mes de septiembre entre las 14 y 20 horas
update transacciones set tipo='T' where monto::numeric between 100 and 500 and extract(month from fecha) = 9 and hora between '14:00' and '20:00';  


