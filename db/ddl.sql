create database casportsDB;
use casportsDB;

create table tb_usuario (
id_usuario        int primary key auto_increment,
nm_usuario        varchar (100),
ds_email        varchar (100),
dt_nascimento    date,
ds_rg            varchar(50),
ds_cpf            varchar(50),
ds_senha        varchar(100)
);

create table tb_cadastro_camisa (
id_camisa        int primary key auto_increment,
nm_camisa        varchar (30),
ds_descricao    varchar(1000),
qtd_camisa        int,
vl_camisa        decimal,
nm_marca        varchar(50),
ds_tamanho        varchar(20),
img_camisa        varchar(500)
);


create table tb_admin_login (
id_admin_login        int primary key auto_increment,
ds_email    varchar(50),
ds_senha    varchar (50)
);

create table tb_pedido(
id_pedido        int primary key auto_increment,
ds_status		 varchar(35),
vl_total		 decimal,
dt_pedido		 DATE
);


create table tb_usuario_login(
id_usuario_login    int primary key auto_increment,
nm_usuario    varchar (30),
ds_email    varchar (50),
ds_senha    varchar (50)
);



create table tb_endereco (
    ID_ENDERECO              INT PRIMARY KEY AUTO_INCREMENT,
    DS_CEP                	 VARCHAR(9),
    DS_ENDERECO              VARCHAR(50),
    DS_CIDADE            	 VARCHAR(50),
    DS_BAIRRO                VARCHAR(50),
    DS_NUMERO                VARCHAR(6),
	FK_PEDIDO            	 INT,
    FOREIGN KEY (fk_pedido) REFERENCES tb_pedido (id_pedido)
);


create table tb_pagamento_cartao (
	ID_PAGAMENTO_CARTAO		INT PRIMARY KEY AUTO_INCREMENT,
	NM_TITULAR_CARTAO		VARCHAR(50),
    DS_NUMERO_CARTAO		VARCHAR(20),
    DS_CPF					VARCHAR(12),
    DT_NASCIMENTO			DATE,
    DS_VALIDADE				VARCHAR(10),
    DS_CODVERIFICACAO		VARCHAR(5),
    QTD_PARCELAS			tinyint,
    FK_PEDIDO				INT,
	
    FOREIGN KEY (fk_pedido)	REFERENCES tb_pedido (id_pedido)
);

create table tb_pagamento_boleto (
	ID_PAGAMENTO_BOLETO			INT PRIMARY KEY AUTO_INCREMENT,
    NM_CLIENTE					VARCHAR(50),
    DS_EMAIL					VARCHAR(50),
    DS_CPF						VARCHAR(12),
    DS_TELEFONE					VARCHAR(12),
    FK_PEDIDO				INT,
    
    FOREIGN KEY (fk_pedido) REFERENCES tb_pedido (id_pedido)
);

create table tb_pagamento_pix (
	ID_PAGAMENTO_PIX		INT PRIMARY KEY AUTO_INCREMENT,
    NM_CLIENTE				VARCHAR(50),
    DS_CPF					VARCHAR(12),
    FK_PEDIDO				INT,
    
    FOREIGN KEY (fk_pedido) REFERENCES tb_pedido (id_pedido)
);
