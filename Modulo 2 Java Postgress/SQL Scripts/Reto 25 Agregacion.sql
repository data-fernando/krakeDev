--cuentas usuario
--Saldo promedio de cuentas de un usuario
select * from cuentas;
select avg(saldo::numeric) as promedioUsuario from cuentas where cedula_propietario='12345';

--Obtener numero de cuestas de cada tipo de cuentas
select * from cuentas;
select tipo ,count(*) from cuentas group by tipo;

--Clientes compras

-- Obtener el monto total de compras realizadas por cada cliente

select * from compras;
select cedula,sum(monto) as monto_Total from compras group by cedula;


--Obtener la fecha especifica de las compras

select fecha_compra, count(id_compra) as total_compras from compras where fecha_compra='2023-01-15' 
GROUP by fecha_compra;

--estudiante y profesores

-- -obtener la cantidad de estidiantes asignados a cada proferos

select p.codigo as profesor, count(est.cedula) as num_estudiantes
from profesores p , estudiantes est 
-- where p.codigo=est.est.cedula
group by p.codigo; 

--obtener la edad promedio de los estudiantes
--convertir la fecha en anios y sacar promedio
select round(avg((extract(year from CURRENT_Date)-extract(year from fecha_nacimiento)))) from estudiantes



select cedula,sum(monto::numeric)as total_montos  from prestamo group by cedula
--personas que tiene mas de un hijo
select count(cedula) from personas where numero_hijos>1;

---productos y ventas

--obtener prcio maximo de los productos
select max(precio) from productos;
--suma de productos vendidos
select sum(canditad) from ventas;




--obtener la cantidad de transaciciones tipo c
select count(tipo) from transacciones where tipo='C';


--videojuegos plataformas
select numero_cuenta,avg(monto::numeric) as promedio_de_monsts 
from transacciones group by numero_cuenta;


-- Obtener la cantidad total de plataformas deisponibles para cada videojuego
select codigo_videojuego,count(id_plataforma) from plataformas
GROUP by codigo_videojuego;

-- Obtener valoracion promedio
select round(avg(valoracion)) from videojuegos;



--- registros_entrada y empleado


--obtener la cantidad total de registros de entra realizados por cada empreado
select  cedula_empleado,count(codigo_registro) from registros_entrada
group by cedula_empleado;



-- INSERT INTO empleado (codigo, nombre, fecha, hora)
-- VALUES
-- ('11', 'Andrea Salazar', '2023-01-15', '08:00:00'),
-- ('12', 'Miguel Castro', '2023-02-10', '09:15:00'),
-- ('13', 'Lucía Fernández', '2023-03-05', '07:45:00'),
-- ('14', 'Jorge Vega', '2023-04-20', '10:30:00'),
-- ('15', 'Paola Ríos', '2023-05-12', '08:20:00'),
-- ('16', 'Carlos Ramírez', '2023-06-01', '09:00:00'),
-- ('17', 'Sofía López', '2023-07-18', '07:50:00'),
-- ('18', 'Pedro García', '2023-08-25', '08:40:00'),
-- ('19', 'Ana Torres', '2023-09-10', '09:10:00'),
-- ('20', 'Luis Martínez', '2023-10-05', '08:05:00');


-- INSERT INTO registros_entrada (codigo_registro, cedula_empleado, fecha, hora)
-- VALUES
-- (1, '11', '2023-11-01', '08:00:00'),
-- (2, '12', '2023-11-01', '08:05:00'),
-- (3, '13', '2023-11-01', '08:10:00'),
-- (4, '14', '2023-11-01', '08:15:00'),
-- (5, '15', '2023-11-01', '08:20:00'),
-- (6, '16', '2023-11-01', '08:25:00'),
-- (7, '17', '2023-11-01', '08:30:00'),
-- (8, '18', '2023-11-01', '08:35:00'),
-- (9, '19', '2023-11-01', '08:40:00'),
-- (10, '20', '2023-11-01', '08:45:00');


select min(fecha) as fecha_minima,max(fecha) as fecha_maxima  
from registros_entrada;
