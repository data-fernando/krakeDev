
--Productos
---  5 valores
insert into productos values
(1, 'Papel', 'Hoja A4 para imprimir', 4, 50),
(2, 'Lapiz', 'Lapiz HB escolar', 0.5, 100),
(3, 'Borrador', 'Borrador blanco suave', 0.75, 80),
(4, 'Cuaderno', 'Cuaderno universitario 100 hojas', 2.5, 60),
(5, 'Marcador', 'Marcador permanente negro', 1.2, 40);

--otros 3 valores
insert into productos(codigo, nombre, precio, stock) values
(6, 'Tijera', 4, 50),
(7, 'Regla', 1.5, 70),
(8, 'Pegamento', 2, 90);

--CUENTAS
-- 10 valores
 insert into cuentas values
('5645', '17986', '06-05-2025', 300),
('5646', '17987', '07-05-2025', 250),
('5647', '17988', '08-05-2025', 400),
('5648', '17989', '09-05-2025', 150),
('5649', '17990', '10-05-2025', 500),
('5650', '17991', '11-05-2025', 350),
('5651', '17992', '12-05-2025', 275),
('5652', '17993', '13-05-2025', 600),
('5653', '17994', '14-05-2025', 425),
('5654', '17995', '15-05-2025', 320);

 --ESTUDIANTES
 --8 valores

insert into estudiantes values
('1564587987', 'Gonzalo', 'Gonzalez', 'gonzo', '2002-03-15'),
('1564587988', 'Maria', 'Lopez', 'mlopez', '2001-07-22'),
('1564587989', 'Juan', 'Perez', 'jperez', '2003-01-10'),
('1564587990', 'Lucia', 'Martinez', 'lmartinez', '2002-11-05'),
('1564587991', 'Carlos', 'Ramirez', 'cramirez', '2000-09-18'),
('1564587992', 'Ana', 'Torres', 'atorres', '2001-12-30'),
('1564587993', 'Luis', 'Vega', 'lvega', '2003-06-08'),
('1564587994', 'Sofia', 'Castro', 'scastro', '2002-04-25');


--REGISTROS_ENTRADA
 --10 valores
insert into registros_entrada values 
(1, '1849789592', '18-09-2025', '15:36:21'),
(2, '1849789593', '18-09-2025', '15:40:10'),
(3, '1849789594', '18-09-2025', '15:45:00'),
(4, '1849789595', '18-09-2025', '15:50:30'),
(5, '1849789596', '18-09-2025', '15:55:45'),
(6, '1849789597', '18-09-2025', '16:00:00'),
(7, '1849789598', '18-09-2025', '16:05:15'),
(8, '1849789599', '18-09-2025', '16:10:25'),
(9, '1849789600', '18-09-2025', '16:15:35'),
(10,'1849789601', '18-09-2025', '16:20:45');

--VIDEOJUEGOS
--5 inserts
insert into videojuegos values 
(1, 'Fin del Mundo', 'juego de superviviencia en un mundo Zombie', 4),
(2, 'Escape Lunar', 'aventura espacial con acertijos', 5),
(3, 'Reino Perdido', 'exploración de tierras mágicas', 3),
(4, 'Cazadores Nocturnos', 'acción táctica en ciudades oscuras', 4),
(5, 'Código Final', 'rompecabezas de lógica y estrategia', 5);
--agregar otros 3
insert into videojuegos(codigo,nombre,valoracion) values 
(6, 'House of Fear', 5),
(7, 'Pixel Rush', 4),
(8, 'Guardianes del Tiempo', 5);


--  TRANSACCIONES -columna tipo acepta solo C o solo D , 10 valores
insert into transacciones values 
(1, '93847', 60.50, 'C', '15-11-2024', '16:24:05'),
(2, '93848', 120.00, 'D', '16-11-2024', '10:15:30'),
(3, '93849', 75.25, 'C', '17-11-2024', '11:45:00'),
(4, '93850', 200.00, 'D', '18-11-2024', '14:20:10'),
(5, '93851', 50.00, 'C', '19-11-2024', '09:30:45'),
(6, '93852', 90.75, 'D', '20-11-2024', '13:10:20'),
(7, '93853', 110.00, 'C', '21-11-2024', '15:00:00'),
(8, '93854', 30.00, 'D', '22-11-2024', '08:45:15'),
(9, '93855', 85.60, 'C', '23-11-2024', '17:25:40'),
(10,'93856', 150.00, 'D', '24-11-2024', '12:35:55');
