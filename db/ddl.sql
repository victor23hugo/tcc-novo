create database casportsDB;
use casportsDB;

create table tb_usuario (
id_usuario        int primary key auto_increment,
nm_usuario        varchar (100),
dt_nascimento    date,
ds_cpf            varchar(50),
ds_telefone		varchar(50)
);

create table tb_login_usuario (
	id_login_usuario	int primary key auto_increment,
    id_usuario			int,
    ds_email			varchar(800),
    ds_senha			varchar(800),
    bt_trocar			boolean,
    cod_reset			varchar(20),
    dt_expiracao_cod	datetime,
    foreign key (id_usuario) references tb_usuario (id_usuario)
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



select id_usuario_endereco		id,
	   ds_referemcia			referencia,
	   ds_cep					cep,
       ds_logradouro			logradouro,
       ds_bairro				bairro,
       ds_cidade				cidade,
       ds_estado				estado,
       ds_complemento			complemento
	from tb_usuario_endereco
where id_usuario =1;

insert into tb_usuario_endereco (id_usuario, ds_referencia, ds_cep, ds_logradouro, ds_bairro, ds_cidade, ds_estado, ds_numero, ds_complemento)
						values(1, 'CASA', '12345-678', 'Av.Um', 'Bairro Um', 'São Paulo', 'SP', '4000b', 'bloco A, apt. 2');

insert into tb_usuario_endereco (id_usuario, ds_cep, ds_logradouro, ds_bairro, ds_cidade, ds_estado, ds_numero, ds_complemento)
						values('5', '98765-432', 'Av.Dez', 'Bairro Dez', 'São Paulo', 'SP', '1000b', 'bloco B, apt. 5');

select * from tb_usuario_endereco;

create table tb_usuario_endereco (
    id_usuario_endereco      int primary key auto_increment,
    id_usuario               int,
    ds_referencia			 varchar(100),
    ds_cep              	 varchar(50),
    ds_logradouro            varchar(400),
    ds_bairro                varchar(100),
    ds_cidade                varchar(100),
	ds_estado            	 varchar(100),
    ds_numero				 varchar(100),
    ds_complemento			 varchar(200),
FOREIGN KEY (id_usuario) REFERENCES tb_usuario (id_usuario)
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

create table tb_camisa_imagem (
id_camisa_imagem		int primary key auto_increment,
id_camisa			int,
ds_imagem			varchar (800),
foreign key (id_camisa) references tb_cadastro_camisa (id_camisa)
);
