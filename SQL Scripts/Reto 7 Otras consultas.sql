 --Productos
--1 money se convierte a numeric
 select * from productos where stock=10 and precio::numeric < 10; 
--2
select nombre,stock from productos where nombre like '%m%' OR descripcion like '% %'; 
--3
select nombre from productos where descripcion is null OR stock = 0;


--cuentas
--1
select numero_cuenta,saldo from cuentas where saldo::numeric > 100 AND saldo::numeric < 1000; 
--2 fecha de creacion de hace un anio desde hoy
select * from cuentas where extract(year from fecha_creacion) between extract(year from current_date- interval '1 year' ) AND extract(year from current_date );
SELECT * FROM cuentas WHERE fecha_creacion >= current_date - interval '1 year';
--3
select * from cuentas where saldo::numeric=0 OR cedula_propietario like '%2';


 --Estudiantes
--1
select nombre, apellido from estudiantes where nombre like '%M' OR apellido like '%z';
--2
select nombre from estudiantes where cedula like '%32%' or cedula like '18%';
--3
select nombre, apellido from estudiantes where cedula like '17%' or cedula like '%06';


 --registros entrada
--1
select * from registros_entrada where extract(month from fecha)=9 Or cedula_empleado like '17%';
--2
select * from registros_entrada where (extract(month from fecha)=8 AND cedula_empleado like '17%') and extract(hour from hora) between '08' and '12'; 
--3
select * from registros_entrada where ((extract(month from fecha)=8 AND cedula_empleado like '17%') and extract(hour from hora) between '08' and '12') OR ((extract(month from fecha)=9 AND cedula_empleado like '08%') and extract(hour from hora) between '09' and '13'); 



 --videojuegos
--1
select * from videojuegos where nombre like '%c%' or valoracion=7;
--2
select * from videojuegos where  (codigo between 3 and 7) OR (valoracion=7);  
--3
select * from videojuegos where ((descripcion like '%guerra%') and (valoracion>7) and (nombre like 'C%')) OR ( (valoracion>8) and (nombre like 'D%')); 
 
 
--transacciones
--1 --varchar convertir a numeric
select * from transacciones where tipo ='C' and numero_cuenta::numeric between 222001 and 22004;
--2
select * from transacciones where tipo ='D' AND fecha='25-05-20%%' AND numero_cuenta::numeric between 222007 and 22010;
--3 --convertir fecha a var mes y dia
select * from transacciones where (codigo between 1 and 5) AND (numero_cuenta::numeric between 22002 and 22004) AND (TO_CHAR(fecha, 'DD-MM') between '26-05' and '29-05');
