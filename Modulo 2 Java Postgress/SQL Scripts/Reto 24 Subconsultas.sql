

-- INSERT INTO public.cuentas (numero_cuenta, cedula_propietario, fecha_creacion, saldo)
-- VALUES
-- ('C0001', '12345', '2022-01-15', 1500.00),
-- ('C0002', '67890', '2023-03-10', 2500.00),
-- ('C0003', '54321', '2021-07-20', 5000.00),
-- ('C0004', '98765', '2024-05-05', 1200.00);
-- ('C0005', '12345', '2024-06-01', 800.00);

-- INSERT INTO public.usuario (cedula, nombre, apellido, tipo_cuenta, limite_credito)
-- VALUES 
-- ('12345', 'Juan', 'Pérez', 'Ahorros', 5000.00),
-- ('67890', 'María', 'Gómez', 'Corriente', 3000.00),
-- ('54321', 'Carlos', 'Ramírez', 'Crédito', 10000.00),
-- ('98765', 'Ana', 'Torres', 'Ahorros', 2000.00);

--usuario -cuentas

SELECT 
    c.numero_cuenta,
    (SELECT u.nombre 
     FROM usuario u 
     WHERE u.cedula = c.cedula_propietario) --as nombre de consulta
FROM cuentas c where c.saldo::numeric between 100 and 1000;


SELECT * --tambien valdria c.*,u.*
FROM cuentas c, usuario u
WHERE c.cedula_propietario = u.cedula
  AND c.fecha_creacion BETWEEN '2022-09-21' AND '2023-09-21';




--clientes compras


-- INSERT INTO cliente (cedula, nombre, apellido)
-- VALUES
-- ('1000000001', 'Andrea', 'Salazar'),
-- ('1000000002', 'Miguel', 'Castro'),
-- ('1000000003', 'Lucía', 'Fernández'),
-- ('1000000004', 'Jorge', 'Vega'),
-- ('1000000005', 'Paola', 'Ríos'),
--('1700000001', 'Anastasia', 'pedro'),
--('1008570001', 'Mónica', 'Walmerr');

-- INSERT INTO compras (id_compra, cedula, fecha_compra, monto)
-- VALUES
-- (1, '1000000001', '2023-01-15', 250.50),
-- (2, '1000000002', '2023-02-10', 120.00),
-- (3, '1000000003', '2023-03-05', 980.75),
-- (4, '1000000001', '2023-04-20', 450.00),
-- (5, '1000000004', '2023-05-12', 300.00),
-- (6, '1000000005', '2023-06-01', 150.25),
-- (7, '1000000002', '2023-07-18', 600.00),
-- (8, '1000000003', '2023-08-25', 75.00);

select  c.nombre,c.apellido from clientes where cedula like '%7%';

select * from cliente where cedula =(select cedula from cliente where nombre='Mónica');




--inserts
-- INSERT INTO profesores (codigo, nombre)
-- VALUES 
-- (1, 'Juan Pérez'),
-- (2, 'María Gómez'),
-- (3, 'Carlos Ramírez'),
-- (5, 'Francisco');

-- INSERT INTO estudiantes (cedula, nombre, apellido, email, fecha_nacimiento, codigo_profesor)
-- VALUES
-- ('0895768653', 'Ana', 'Torres', 'ana.torres@email.com', '2000-05-10', 1),
-- ('1895624863', 'Luis', 'Martínez', 'luis.martinez@email.com', '1999-08-21', 2),
-- ('0798645983', 'Sofía', 'López', 'sofia.lopez@email.com', '2001-01-15', 1),
-- ('6352987564', 'Pedro', 'García', 'pedro.garcia@email.com', '1998-12-30', 3),
-- ('0895769153', 'Peter', 'Correano', 'peter@email.com', '2002-05-10', 5),
-- ('0899765353', 'Rob', 'smith', 'rob@email.com', '2001-05-10', 5);



---proferores y estudiantes

--consulta
select p.codigo as codigoprofesor, e.nombre , e.apellido from profesores p,estudiantes e where e.apellido like '%n%';  
--subconsulta
--obtener los estudiante cuyo codigo de profesor sea iagual al codigo de profersor llamado "Francisco"
select * from estudiantes where codigo_profesor = (select codigo from profesores where nombre ='Francisco');


---Persona y Prestamo

--tabla no puede estar vacia

-- INSERT INTO estado_civil (codigo, descripcion)
-- VALUES
-- ('CS', 'Casado'),
-- ('SO', 'Soltero'),
-- ('VI', 'Viudo'),
-- ('DI', 'Divorciado');


-- INSERT INTO personas (cedula, nombre, apellido, estatura, fecha_nacimiento, hora_nacimiento, cantidad_ahorrada, numero_hijos, estado_civil_per)
-- VALUES
-- ('1000000001', 'Andrea', 'Salazar', 1.65, '1990-03-15', '08:30:00', 2500.50, 2, 'CS'),
-- ('1000000002', 'Miguel', 'Castro', 1.78, '1985-07-22', '14:15:00', 1200.00, 1, 'SO'),
-- ('1000000003', 'Lucía', 'Fernández', 1.70, '1992-11-05', '06:45:00', 980.75, 0, 'SO'),
-- ('1000000004', 'Jorge', 'Vega', 1.80, '1980-01-30', '23:10:00', 4500.00, 3, 'CS'),
-- ('1000000005', 'Paola', 'Ríos', 1.60, '1995-09-12', '11:00:00', 150.25, 0, 'SO'),
-- ('2000000001', 'Mónica', 'Salazar', 1.65, '1990-03-15', '08:30:00', 2500.50, 2, 'CS'),
-- ('2000000002', 'Luis', 'Martínez', 1.78, '1985-07-22', '14:15:00', 1200.00, 1, 'SO'),
-- ('2000000003', 'Sofía', 'López', 1.70, '1992-11-05', '06:45:00', 980.75, 0, 'SO'),
-- ('2000000004', 'Pedro', 'García', 1.80, '1980-01-30', '23:10:00', 4500.00, 3, 'CS'),
-- ('2000000005', 'Ana', 'Torres', 1.60, '1995-09-12', '11:00:00', 150.25, 0, 'SO'),
--('3000000001', 'Sean', 'Conor', 1.82, '1990-06-15', '07:45:00', 1200.00, 1, 'SO');




-- INSERT INTO prestamo (cedula, monto, fecha_prestamo, hora_prestamo, garante)
-- VALUES
-- ('1000000001', 5000.00, '2023-01-15', '09:00:00', 'Carlos Ramírez'),
-- ('1000000002', 3000.00, '2023-02-10', '10:30:00', 'Ana Torres'),
-- ('1000000003', 1500.00, '2023-03-05', '16:45:00', 'Pedro García'),
-- ('1000000004', 7000.00, '2023-04-20', '12:20:00', 'María Gómez'),
-- ('1000000005', 2000.00, '2023-05-12', '08:10:00', 'Luis Martínez'),
-- ('2000000001', 500.00, '2023-01-15', '09:00:00', 'Carlos Ramírez'),
-- ('2000000002', 750.00, '2023-02-10', '10:30:00', 'Andrea Salazar'),
-- ('2000000003', 300.00, '2023-03-05', '16:45:00', 'Pedro Vega'),
-- ('2000000004', 950.00, '2023-04-20', '12:20:00', 'María Gómez'),
-- ('2000000005', 200.00, '2023-05-12', '08:10:00', 'Lucía Fernández');


select p.cantidad_ahorrada,pre.monto,pre.garante from personas p, prestamo pre where pre.cedula = p.cedula and pre.monto::numeric between 100 and 1000; 

select * from persona p where p.cedula =(select cedula from personas where nombre='Sean');


----productos y ventas


-- INSERT INTO productos (codigo, nombre, descripcion, precio, stock)
-- VALUES
-- (8, 'Laptop Lenovo', 'Laptop de 15 pulgadas con procesador Intel i5', 850.00, 20),
-- (9, 'Teléfono Samsung', 'Smartphone Galaxy A52 con 128GB de almacenamiento', 450.00, 35),
-- (10, 'Auriculares Sony', 'Auriculares inalámbricos con cancelación de ruido', 120.00, 50),
-- (11, 'Monitor LG', 'Monitor LED de 24 pulgadas Full HD', 200.00, 15),
-- (12, 'Impresora HP', 'Impresora multifuncional láser', 300.00, 10);

-- INSERT INTO ventas (id_venta, codigo_producto, fecha_venta, canditad)
-- VALUES
-- (101, 8, '2023-01-15', 2),
-- (102, 2, '2023-02-10', 1),
-- (103, 3, '2023-03-05', 3),
-- (104, 4, '2023-04-20', 1),
-- (105, 9, '2023-05-12', 2),
-- (106, 10, '2023-06-01', 4),
-- (107, 11, '2023-07-18', 2),
-- (108, 12, '2023-08-25', 1);

select p.nombre,p.stock,v.canditad from productos p, ventas v where p.codigo=v.codigo_producto and (p.nombre like '%m%' or p.descripcion is null );

select p.nombre,p.stock from productos p, ventas v where p.codigo=v.codigo_producto and v.canditad=5;


---transaccion y banco 


-- DROP TABLE IF EXISTS transacciones;
-- DROP TABLE IF EXISTS banco;

-- Crear tabla banco
-- CREATE TABLE banco(
--     codigo_banco INT PRIMARY KEY NOT NULL,
--     codigo_transaccion INT,
--     detalle VARCHAR(100)
-- );

-- Crear tabla transacciones
-- CREATE TABLE transacciones(
--     codigo INT NOT NULL PRIMARY KEY,
--     numero_cuenta VARCHAR(5) NOT NULL,
--     monto MONEY NOT NULL,
--     tipo CHAR(1) NOT NULL,
--     fecha DATE NOT NULL,
--     hora TIME NOT NULL,
--     codigo_banco INT,
--     CONSTRAINT transaccion_banco_fk 
--         FOREIGN KEY (codigo_banco) REFERENCES banco(codigo_banco)
-- );

-- Primero insertar bancos
-- INSERT INTO banco (codigo_banco, codigo_transaccion, detalle) VALUES
-- (101, 22001, 'Depósito en efectivo'),
-- (102, 22003, 'Crédito por transferencia'),
-- (103, 22002, 'Retiro en cajero automático'),
-- (104, 22005, 'Crédito por pago de nómina'),
-- (105, 22004, 'Depósito en ventanilla');


-- INSERT INTO transacciones (codigo, numero_cuenta, monto, tipo, fecha, hora, codigo_banco)
-- VALUES
-- (01, '22001', 250.00, 'D', '2023-01-15', '09:00:00', 101),
-- (03, '22002', 500.00, 'C', '2023-02-10', '10:30:00', 102),
-- (02, '22003', 750.00, 'D', '2023-03-05', '14:45:00', 103),
-- (04, '22004', 1200.00, 'C', '2023-04-20', '16:20:00', 104),
-- (05, '22005', 300.00, 'D', '2023-05-12', '08:10:00', 105);


--consulta
select * from transacciones where tipo = 'C' and numero_cuenta::numeric between 22001 and 22004;

--subconsulta

select * from transacciones t,banco b where t.codigo_banco = 1 ;
select * from transacciones t,banco b where t.codigo_banco = 102;


---Plataformas videojuegos


-- INSERT INTO videojuegos (codigo, nombre, descripcion, valoracion)
-- VALUES
-- (11, 'The Legend of Zelda: Breath of the Wild', 'Juego de aventura y exploración en mundo abierto', 95),
-- (12, 'Super Mario Odyssey', 'Plataformas en 3D con exploración y coleccionables', 92),
-- (13, 'Minecraft', 'Juego sandbox de construcción y supervivencia', 90),
-- (14, 'The Witcher 3: Wild Hunt', 'RPG de mundo abierto con narrativa profunda', 94),
-- (15, 'FIFA 23', 'Simulación de fútbol con licencias oficiales', 85),
-- (16, 'Call of Duty: Modern Warfare II', 'Shooter en primera persona con campaña y multijugador', 88),
-- (17, 'Elden Ring', 'RPG de acción en mundo abierto desarrollado por FromSoftware', 96),
-- (18, 'Animal Crossing: New Horizons', 'Simulación de vida en una isla personalizada', 89),
-- (19, 'Halo Infinite', 'Shooter futurista con campaña y multijugador', 87),
-- (20, 'Fortnite', 'Battle Royale multijugador con construcción y eventos en vivo', 84);

-- INSERT INTO plataformas (id_plataforma, nombre_plataforma, codigo_videojuego)
-- VALUES
-- (101, 'Nintendo Switch', 11),
-- (102, 'Nintendo Switch', 12),
-- (103, 'PC', 13),
-- (104, 'PlayStation 4', 14),
-- (105, 'PlayStation 5', 17),
-- (106, 'Xbox Series X', 19),
-- (107, 'PC', 16),
-- (108, 'Nintendo Switch', 18),
-- (109, 'PC', 20),
-- (110, 'PlayStation 5', 15);


--consulta
select v.nombre, v.descripcion, v.valoracion, p.nombre_plataforma  
from videojuegos v,plataformas p 
where ((v.descripcion like 'guerra' and v.valoracion > 7 )
or (v.nombre like 'C%' and v.valoracion>8) ) ;

--subconsulta 

select * from plataformas p,videojuegos v 
where p.codigo_videojuego=(select v.codigo 
from videojuegos where v.nombre ='God of war');






