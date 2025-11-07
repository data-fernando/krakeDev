--PRODUCTOS
--eliminar productos de descripcion null
delete from productos where descripcion is null;

--Cuentas
delete from cuentas where cedula_propietario like '10%';

--Estudiantes
delete from estudiantes where cedula like '%05';

--Registros entradas
delete from registros_entrada where extract(month from fecha) = 6;

-- Videojuegos 
delete from videojuegos where valoracion < 7;
-- transacciones
-- transacciones de la hora 14y 18 del mes de agosto del anio actual
delete from transacciones where extract(hour from hora) between '14' and '18' AND extract(month from fecha) = 8 AND extract(year from fecha) = extract(year from current_date) ;
