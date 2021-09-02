CREATE DATABASE squad38;

CREATE TABLE consultores (
	id VARCHAR NOT NULL PRIMARY KEY,
  	nome VARCHAR(100) NOT NULL,
  	nome_social VARCHAR(100) NOT NULL,
  	imagem TEXT,
  	email VARCHAR(100) NOT NULL,
  	senha VARCHAR(100) NOT NULL
);

CREATE TABLE unidades (
	id VARCHAR NOT NULL PRIMARY KEY,
  	cep INTEGER NOT NULL,
  	rua VARCHAR(100) NOT NULL,
  	complemento VARCHAR(100),
  	numero INTEGER NOT NULL,
  	bairro VARCHAR(100) NOT NULL,
  	cidade VARCHAR(100) NOT NULL,
  	estado VARCHAR(100) NOT NULL,
  	capacidade_total INTEGER NOT NULL,
  	capacidade_reduzida INTEGER NOT NULL
);

CREATE TABLE agendamentos (
	id VARCHAR NOT NULL PRIMARY KEY,
  	unidade_id VARCHAR NOT NULL REFERENCES unidades(id),
  	consultor_id VARCHAR NOT NULL REFERENCES consultores(id),
  	data_visita DATE NOT NULL,
  	periodo_visita VARCHAR(50) NOT NULL,
  	numero_mesa INTEGER NOT NULL
);
