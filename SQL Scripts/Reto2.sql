--script 1
create table
    productos (
        codigo int not null primary key,
        nombre varchar(50) not null,
        descripcion varchar(200),
        precio money not null,
        stock int not null
     
    );


--script 2
create table
    cuentas (
        numero_cuenta char(5) not null primary key,
        cedula_propietario char(5) not null,
        fecha_creacion date not null,
        saldo money not null
    );


--script 3
create table
    estudiantes(
        cedula char(10) not null primary key,
        nombre varchar(50) not null,
        apellido varchar(50) not null,
        email varchar(50) not null,
        fecha_nacimiento date not null

    );

--script 4
create table
    registros_entrada(
        codigo_registro int not null primary key,
        cedula_empleado varchar(10) not null,
        fecha date not null,
        hora time not null

    );

--script 5
create table
    videojuegos(
        codigo int not null primary key,
        nombre varchar(100) not null,
        descripcion varchar(300) ,
        valoracion int not null

    );


--script 6
create table
    transacciones(
        codigo int not null primary key,
        numero_cuenta varchar(5) not null,
        monto money not null,
        tipo char(1) not null,
        fecha date not null,
        hora time not null

    );



