-- Table: producto

-- DROP TABLE producto;

CREATE TABLE producto
(
  idproducto integer NOT NULL,
  nombreproducto character varying(255),
  idcategoria integer,
  CONSTRAINT producto_pkey PRIMARY KEY (idproducto),
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





