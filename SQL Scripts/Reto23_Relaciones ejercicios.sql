--clientes--

-- drop table usuario;
-- select * from usuario;

-- create table usuario( 
--     cedula char(10) primary key,
--     nombre varchar(25) not null,
--     apellido varchar(25)not null,
--     tipo_cuenta varchar(20),
--     limite_credito DECIMAL(10,2)

-- );


-- select * from cuentas;
-- drop table cuentas;

-- create table
--     cuentas (
--         numero_cuenta char(5) not null primary key,
--         cedula_propietario char(5) not null,
--         fecha_creacion date not null,
--         saldo money not null
--     );
	
--usuario puede tener muchas cuentas, cuentas un usuario
ALTER TABLE cuentas
ADD CONSTRAINT R_cuentas_usuario
FOREIGN KEY (cedula_propietario) REFERENCES usuario(cedula);


-----Clientes

---cliente puede tener mucha comprar, compra solo debe tener un cliente
create table cliente(
    cedula char(10) not null primary key,
    nombre varchar(50) not null,
    apellido varchar(50) not null
 
);

create table compras(
    id_compra int not null primary key,
    cedula char(10) not null,
    fecha_compra date not null DATE NOT NULL DEFAULT CURRENT_DATE,
    monto DECIMAL(10,2) not null,

    CONSTRAINT fk_compras_cliente FOREIGN KEY (cedula) REFERENCES cliente(cedula)

);


-----Productos

-- create table
--     productos (
--         codigo int not null primary key,
--         nombre varchar(50) not null,
--         descripcion varchar(200),
--         precio money not null,
--         stock int not null
     
--     );

create table ventas(
    id_venta int not null primary key,
    codigo_producto int not null,
    fecha_venta date not null DEFAULT CURRENT_DATE,
    canditad int
);


alter table ventas
add constraint ventas_producto_fk 
foreign key (codigo_producto)references productos(codigo);


----Videojuegos

-- create table
--     videojuegos(
--         codigo int not null primary key,
--         nombre varchar(100) not null,
--         descripcion varchar(300) ,
--         valoracion int not null

--     );

create table plataformas(
    id_plataforma int primary key,
    nombre_plataforma varchar(50) not null,
    codigo_videojuego int,

    --no se usa el add dentro cuando se define
    constraint plataforma_videojuegoFK 
    FOREIGN key (codigo_videojuego) references videojuegos(codigo)

);


---Estudiantes


-- create table
--     estudiantes(
--         cedula char(10) not null primary key,
--         nombre varchar(50) not null,
--         apellido varchar(50) not null,
--         email varchar(50) not null,
--         fecha_nacimiento date not null

--     );

create table profesores(
    codigo int primary key not null,
    nombre char(50) not null


);



alter table estudiantes
ADD COLUMN codigo_profesor int;  ---le quite el not null para que no tenga que recrear la tabla estudiantes

alter table estudiantes
add constraint estudiantes_profesor_fk 
foreign key (codigo_profesor)references profesores (codigo);



------Empleado
-- drop table registros_entrada;

-- create table
--     registros_entrada(
--         codigo_registro int not null primary key,
--         cedula_empleado varchar(10) not null,
--         fecha date not null,
--         hora time not null

--     );

create table empleado(
    codigo varchar(10) not null primary key,
    nombre varchar(25) not null,
    fecha date not null DEFAULT CURRENT_DATE,
    hora time not null  DEFAULT CURRENT_TIME


);

--no permitia crear sin datos en empleado pr lo que se creo la tabla de registros desde 0
ALTER TABLE registros_entrada
ADD CONSTRAINT registros_empleado_fk
foreign key (cedula) references empleado(codigo)
;




---Personas Prestamo


create table prestamo(
    cedula char(10) primary key not null, --debe ser del mismo tipo que la referencia
    monto money,
    fecha_prestamo date,
    hora_prestamo time,
    garante varchar(40),

    --TRANSACCION
    constraint prestamo_persona_fk
    foreign key (cedula) references personas(cedula)

);



---transacciones

create table banco(
    codigo_banco int primary key not null,
    codigo_transaccion int,
    detalle varchar(100),

    constraint banco_transaccion_fk 
    foreign key (codigo_transaccion) references transacciones(codigo)   

);