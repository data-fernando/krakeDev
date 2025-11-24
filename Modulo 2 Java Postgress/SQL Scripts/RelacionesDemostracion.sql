-- seleccionar *  table
--delete from personas ----> si o solo si se quiere elimimnar todos los registros
---alter table nombreTabla
--siguiente instruccion con el not null no permite crear columna con registros vacios
--add column estadocivil_fk_cofigo char(1) not null


--Crear la columna externa


CREATE TABLE personas (
    cedula CHAR(10) NOT NULL PRIMARY KEY,
    nombre CHAR(20) NOT NULL,
    apellido CHAR(20) NOT NULL,
    estatura NUMERIC,
    fecha_nacimiento DATE,
    hora_nacimiento TIME,
    cantidad_ahorrada DECIMAL(10,2),
    numero_hijos INT
);

ALTER TABLE personas
ADD COLUMN estado_civil_per CHAR(2) NOT NULL;



create table estado_civil(

    codigo char(2) not null,
    descripcion varchar(20),

    constraint estado_civil_pk primary key (codigo)


);

ALTER TABLE personas
ADD CONSTRAINT R_personas_estado_civil
FOREIGN KEY (estado_civil_per) REFERENCES estado_civil(codigo);

---