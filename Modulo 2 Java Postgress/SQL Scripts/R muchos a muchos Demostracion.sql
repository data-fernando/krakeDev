create table proveedor(
	codigo_proveedor varchar(5) not null primary key,
	nombre_proveedor char(30) not null,
	telefono char(10) not null
);

INSERT INTO proveedor (codigo_proveedor, nombre_proveedor, telefono)
VALUES ('P001', 'Distribuidora Andina', '0987654321');

INSERT INTO proveedor (codigo_proveedor, nombre_proveedor, telefono)
VALUES ('P002', 'Comercial Quito', '0223456789');

INSERT INTO proveedor (codigo_proveedor, nombre_proveedor, telefono)
VALUES ('P003', 'Importadora Global', '0991122334');

INSERT INTO proveedor (codigo_proveedor, nombre_proveedor, telefono)
VALUES ('P004', 'Ferretería El Martillo', '0234567890');

INSERT INTO proveedor (codigo_proveedor, nombre_proveedor, telefono)
VALUES ('P005', 'Agroinsumos del Valle', '0976543210');

--------Creacio de la tabla muchos a muchos

create table producto_x_proveedor(
	pp_codigo_productos int not null,
	pp_codigo_proveedor varchar(5) not null  ,
	precio numeric not null,

	constraint pk_producto_proveedor primary  key (pp_codigo_productos,pp_codigo_proveedor),
	   CONSTRAINT fk_producto FOREIGN KEY (pp_codigo_productos) REFERENCES productos(codigo),
    CONSTRAINT fk_proveedor FOREIGN KEY (pp_codigo_proveedor) REFERENCES proveedor(codigo_proveedor)

);


--insercion

INSERT INTO producto_x_proveedor (pp_codigo_productos, pp_codigo_proveedor, precio)
VALUES (1, 'P001', 3.80),
(2, 'P002', 0.45),
(3, 'P003', 0.70),
(4, 'P004', 2.40),
(5, 'P005', 1.10),
(8, 'P003', 830.00),
(9, 'P002', 440.00),
(10, 'P001', 115.00),
(11, 'P004', 195.00),
(12, 'P005', 290.00);

--consulta

select * from producto_x_proveedor;

--no se repite la conbinacion de las clave foraneas que ahora son clave primarias


---consulta donde una las 2 tablas de muchos a mcuho por medio de la relacio intermedia
select pp.* from productos pro , proveedor prv, producto_x_proveedor pp
where pp.pp_codigo_productos=pro.codigo
and pp.pp_codigo_proveedor=prv.codigo_proveedor
and pro.nombre='Cuaderno';
