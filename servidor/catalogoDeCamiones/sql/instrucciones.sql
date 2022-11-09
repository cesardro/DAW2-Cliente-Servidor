CREATE TABLE camiones (
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    marca varchar (255),
    modelo varchar (255),
    descripcion varchar (255),
    precio float(10),
    imagen varchar(255)
);

INSERT INTO 
`camiones`(`marca`, `modelo`, `descripcion`, `precio`, `imagen`) 
VALUES ('Volvo','FH 500','Semi nuevo',58500,'volvoFH500.jpg');

INSERT INTO 
`camiones`(`marca`, `modelo`, `descripcion`, `precio`, `imagen`) 
VALUES ('Scania','R450 NTG','Siempre en garage',78500,'scania R450 NTG.webp');