-- Table: producto

-- DROP TABLE producto;

CREATE TABLE producto
(
  idproducto integer NOT NULL,
  descripcionproducto character varying(255),
  nombreproducto character varying(255),
  precioproducto character varying(255),
  idcategoria integer,
  idsubcategoria integer,
  CONSTRAINT producto_pkey PRIMARY KEY (idproducto),
  CONSTRAINT fkc806358012d9a5a3 FOREIGN KEY (idsubcategoria)
      REFERENCES subcategoria (idsubcategoria) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT fkc8063580e4dce7a9 FOREIGN KEY (idcategoria)
      REFERENCES categoria (idcategoria) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);


-- Table: orden

-- DROP TABLE orden;

CREATE TABLE orden
(
  idorden integer NOT NULL,
  fechaorden date,
  idcajero integer,
  CONSTRAINT orden_pkey PRIMARY KEY (idorden),
  CONSTRAINT fk48e972aecf265c9 FOREIGN KEY (idcajero)
      REFERENCES cajero (idcajero) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);
ALTER TABLE orden
  OWNER TO postgres;



-- Table: orden_producto

-- DROP TABLE orden_producto;

CREATE TABLE orden_producto
(
  idorden integer NOT NULL,
  idproducto integer NOT NULL,
  CONSTRAINT fka6420eb51e59491d FOREIGN KEY (idproducto)
      REFERENCES producto (idproducto) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT fka6420eb595694d57 FOREIGN KEY (idorden)
      REFERENCES orden (idorden) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);
ALTER TABLE orden_producto
  OWNER TO postgres;



-- Table: categoria

-- DROP TABLE categoria;

CREATE TABLE categoria
(
  idcategoria integer NOT NULL,
  nombrecategoria character varying(255),
  CONSTRAINT categoria_pkey PRIMARY KEY (idcategoria)
)
WITH (
  OIDS=FALSE
);

ALTER TABLE categoria
  OWNER TO postgres;

-- Table: subcategoria

-- DROP TABLE subcategoria;

CREATE TABLE subcategoria
(
  idsubcategoria integer NOT NULL,
  nombresubcategoria character varying(255),
  CONSTRAINT subcategoria_pkey PRIMARY KEY (idsubcategoria)
)
WITH (
  OIDS=FALSE
);  
  
  
-- Table: cajero

-- DROP TABLE cajero;

CREATE TABLE cajero
(
  idcajero integer NOT NULL,
  apellido1 character varying(255),
  apellido2 character varying(255),
  nombre character varying(255),
  CONSTRAINT cajero_pkey PRIMARY KEY (idcajero)
)
WITH (
  OIDS=FALSE
);


--Insert categories
insert into categoria (idcategoria, nombrecategoria) values(1,'Hamburguesas');

insert into categoria (idcategoria, nombrecategoria) values(2,'Wraps');

insert into categoria (idcategoria, nombrecategoria) values(3,'Fingers');

insert into categoria (idcategoria, nombrecategoria) values(4,'Burritos');

insert into categoria (idcategoria, nombrecategoria) values(5,'Tacos');

insert into categoria (idcategoria, nombrecategoria) values(6,'Hot Dogs');

insert into categoria (idcategoria, nombrecategoria) values(7,'Cartuchos');

insert into categoria (idcategoria, nombrecategoria) values(8,'Fajitas');

insert into categoria (idcategoria, nombrecategoria) values(9,'Ensaladas');

insert into categoria (idcategoria, nombrecategoria) values(10,'Otros Productos');

insert into categoria (idcategoria, nombrecategoria) values(11,'Bebidas');

insert into categoria (idcategoria, nombrecategoria) values(12,'Postres');

insert into categoria (idcategoria, nombrecategoria) values(13,'Ordenes Xtra');



--Insert SubCategorias
insert into subcategoria (idsubcategoria, nombresubcategoria) values(1,'Naturales');

insert into subcategoria (idsubcategoria, nombresubcategoria) values(2,'Batidos');

insert into subcategoria (idsubcategoria, nombresubcategoria) values(3,'Mixtos');

insert into subcategoria (idsubcategoria, nombresubcategoria) values(4,'Smothies');

insert into subcategoria (idsubcategoria, nombresubcategoria) values(5,'Cocktail');

insert into subcategoria (idsubcategoria, nombresubcategoria) values(6,'Muy Saludables');

insert into subcategoria (idsubcategoria, nombresubcategoria) values(7,'Milk Shake');

insert into subcategoria (idsubcategoria, nombresubcategoria) values(8,'Mega Milk Shake');

insert into subcategoria (idsubcategoria, nombresubcategoria) values(9,'Premium');




--Insert productos

--Hamburguesas
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('1','Original',1,1600,'',null);


insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('2','1/4 Libra',1,1900,'',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('3','Spicy',1, 1650, '(con chile jalapeño o chipotle)',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('4','Hawaiina',1, 1650, '(con piña rostisada)',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('5','De Pollo',1, 2200, '',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('6','De Pescado',1, 2200, '',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('7','Crispy',1, 2600, '(pollo o pescado a la milanesa)',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('8','Afrodisiaca',1, 2700, '(tocineta, queso americano, papas fritas)',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('9','Vegetariana',1, 1700, '(con chile jalapeño o chipotle)',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('10','Queso Fusion',1, 2200, '(con chile jalapeño o chipotle)',null);


--Wraps
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('11','Wrap de Pollo',2,1900,'',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('12','Wrap de Pescado',2,1900,'',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('13','Wrap Vegetariano',2, 1900, '',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('14','Wrap Crispy',2, 2150, '(pollo o pescado, queso)',null);


--Fingers
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('15','Finger de Pollo',3,1900,'',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('16','Finger de Pescado',3,1900,'',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('17','Finger Vegetariano',3, 1900, '',null);

--Burritos
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('18','Burrito de Res',4,2000,'',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('19','Burrito de Pollo',4,2000,'',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('20','Burrito Vegetariano',4, 1950, 'Frijol molido, queso crema y hongos',null);



--Tacos
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('21','Taco de Res',5,1600,'',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('22','Taco de Pollo',5,1600,'',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('23','Taco Mixto',5, 1600, '(res y pollo)',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('24','Taco Vegetariano',5,1550,'(queso)',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('25','Taco con Papas',5, 2400, '',null);

--Hot Dogs
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('26','Hot Dog Original',6,900,'',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('27','Hot Dog',6,2100,'(con tortilla de taco)',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('28','Hot Dog Extremo',6, 1600, '(con salchicha gigante)',null);



--Cartuchos 
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('29','Cartucho de Res',7,2000,'',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('30','Cartucho de Pollo',7,2100,'',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('31','Cartucho de Queso',7, 1900, '',null);


--Fajitas

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('32','Fajitas de Res',8,2100,'',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('33','Fajitas de Pollo',8,2100,'',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('34','Fajitas de Cerdo',8, 2100, '',null);


--Ensaladas

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('35','Go Green',9,2000,'(Legumbres y verduras)',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('36','Fajitas de Pollo',9,2100,'(Legumbres y frutas)',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('37','Fajitas de Cerdo',9, 2100, 'Legumbres y ',null);


--Otros Productos

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('38','Salchipapas gratinadas',10,2000,'',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('39','Orden de papas o ensalada',10,1000,'',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('40','Salchitaco',10, 2500, '',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('41','Papas',10, 2100, '',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('42','Nachos',10, 2000, '',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('43','Alitas de pollo',10, 1800, '(Buffalo, BBQ, Fusión)',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('44','Gran Chalupa',10, 1800, '',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('45','Ceviche',10, 1800, '',null);

--Bebidas

--Naturales
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('46','Melón',11,700,'(En Agua)',1);
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('47','Papaya',11,700,'(En Agua)',1);
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('48','Piña',11,700,'(En Agua)',1);

--Batidos
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('49','Chocolate',11,800,'(En leche)',2);
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('50','Piña',11,800,'(En leche)',2);
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('51','Melón',11,800,'(En leche)',2);
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('52','Coco',11,800,'(En leche)',2);
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('53','Frutas',11,800,'(En leche)',2);
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('54','Papaya',11,800,'(En leche)',2);
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('55','Fresa',11,800,'(En leche)',2);

--Mixtos
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('56','Fresa + Banano',11,850,'',3);
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('57','Melón + Banano',11,850,'',3);
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('58','Naranja + Piña',11,850,'',3);
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('59','Banano + Coco',11,850,'',3);

--Smoothies
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('60','Piña',11,800,'',4);
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('61','Papaya',11,800,'',4);
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('62','Fresa',11,800,'',4);
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('63','Banano',11,800,'',4);

--Cocktail
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('64','Piña Colada',11,850,'(No Alcohol)',5);
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('65','Fruit Punch',11,850,'(No Alcohol)',5);
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('66','Piña Power',11,850,'(No Alcohol)',5);
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('67','Bloody Mary',11,850,'(No Alcohol)',5);
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('68','Fresa Colada',11,850,'(No Alcohol)',5);
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('69','Fresa Power',11,850,'(No Alcohol)',5);

--Muy Saludables
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('70','Naranja + Zanahoria',11,800,'',6);
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('71','Piña + Apio',11,800,'',6);
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('72','Papaya + Limón',11,800,'',6);

--Milk Shake
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('73','Fresa',11,1100,'',7);
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('74','Vainilla',11,1100,'',7);
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('75','Chocolate',11,1100,'',7);


--Mega Milk Shake
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('76','Piña',11,1300,'(Helado,Fruta,Chantilli)',8);
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('77','Fresa',11,1300,'(Helado,Fruta,Chantilli)',8);
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('78','Banano',11,1300,'(Helado,Fruta,Chantilli)',8);
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('79','Papaya',11,1300,'(Helado,Fruta,Chantilli)',8);
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('80','Mixto',11,1300,'(Helado,Fruta,Chantilli)',8);

--Premium

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('81','Higos',11,1300,'(Helado,Fruta,Chantilli)',9);
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('82','Melocotón',11,1300,'(Helado,Fruta,Chantilli)',9);
insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('83','Rompope',11,1300,'(Helado,Fruta,Chantilli)',9);


--Postres

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('84','Crepas',12,1000,'',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('85','Frutas',12,1000,'',null);

--Ordenes xtra

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('84','Crepas',12,1000,'',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('85','Frutas',12,1000,'',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('86','Torta 1/4 Libra',13,900,'',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('87','Torta Original',13,600,'',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('88','Tortilla de Taco',13,600,'',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('89','Orden de',13, 950, '(Res, Pollo, Pescao o Cerdo)',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('90','Queso Mozzarella',13, 350, '(con piña rostisada)',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('91','Queso Americano',13, 350, '',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('92','Croqueta de Queso',13, 350, '',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('93','Orden de Papa pequeña',13, 400, '',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('94','Orden de Ensalada',13, 400, '',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('95','Extra Pepinillo',13, 200, '',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('96','Extra Cebolla',13, 150, '',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('97','Extra jalapeño',13, 150, '',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('98','Extra aderezo',13, 100, '',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('99','Extra piña',13, 50, '',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('100','Salcicha pequeña',13, 350, '',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('101','Salcicha gigante',13, 350, '',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('102','Salcicha pequeña',13, 700, '',null);

insert into producto (idproducto,nombreproducto,idcategoria,precioProducto,descripcionProducto,idsubcategoria) values ('103','Extra Tocineta',13, 400, '',null);
