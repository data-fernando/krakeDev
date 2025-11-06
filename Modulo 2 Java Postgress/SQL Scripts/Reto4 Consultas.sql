--Productos
--1 empiezan con q
select * from productos where nombre like 'Q%';
--2 descripcion es null
select * from productos where descripcion is null;
--3 precio entre 2 y 3
select * from productos where precio::numeric between 2 and 3; --se convierte porque between no usa tipo "money"


--CUENTAS
--1 cuenta y saldo
select numero_cuenta,saldo from cuentas; 
--2 de hoy a 2 meses atras
select * from cuentas where fecha_creacion between '05-09-2025' and '05-11-2025'; 
--3 numero de cuenta y saldo de fecha hoy a 2 meses atras
select numero_cuenta, saldo from cuentas where fecha_creacion between '05-09-2025' and '05-11-2025'; 

--ESTUDIANTES
--1 nombre y cedula 
select nombre,cedula from estudiantes;
--2 nombres cuya cedula empieze con 17
select nombre from estudiantes where cedula like '17%';
--3 nombre apellido , donde nombre empiece con A
select nombre, apellido from estudiantes where nombre like 'A%';

--Registros Entradas
--1 todas las cedulas, fechas y horas
select cedula_empleado, fecha, hora from registros_entrada;
--2 registros de entrada donde hora este entre 7 y 14 
select * from registros_entrada where hora::time between '07:00:00' and '14:00:00';
--3 registros donde la hora sea mayor a 8
select * from registros_entrada where hora > '08:00';

--Videojuegos
--1 videojuegos cuyo nombre empiece con C
select nombre from videojuegos where nombre like 'C%';
--2 videojuegos con caloracion 9 y 10
select * from videojuegos where valoracion  between 9 and 10;
--3 cuya descripcion es null 
select * from videojuegos where descripcion  is null;

--Cuentas 
--1 transacione tipo D
select * from transacciones where tipo = 'D';
--2
select * from transacciones where monto::numeric between 200 and 2000;
--3
select codigo, monto, tipo, fecha from transacciones where fecha is not null;