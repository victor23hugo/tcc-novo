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


create table tb_pedido (
	id_pedido			int primary key auto_increment,
    id_usuario			int,
    id_usuario_endereco	int,
    dt_pedido			datetime,
    cod_nota_fiscal		varchar(200),
    tp_frete			varchar(200),
    vl_frete			decimal(15,2),
    ds_status			varchar(200),
    tp_pagamento		varchar(200),
    foreign key (id_usuario) references tb_usuario (id_usuario),
    foreign key (id_usuario_endereco) references tb_usuario_endereco (id_usuario_endereco)
);

create table tb_pedido_item (
	id_pedido_item		int primary key auto_increment,
    id_pedido			int,
    id_camisa			int,
    qtd_itens			int,
    vl_produto			decimal(15,2),
    foreign key (id_pedido) references tb_pedido (id_pedido),
    foreign key (id_camisa) references tb_cadastro_camisa (id_camisa)
);

create table tb_pagamento_cartao (
	id_pagamento_cartao	int primary key auto_increment,
    id_pedido			int,
    nm_cartao			varchar(200),
    nr_cartao			varchar(200),
    dt_vencimento		varchar(200),
    cod_seguranca		varchar(200),
    nr_parcelas			int,
    ds_forma_pagamento	varchar(200),
    foreign key (id_pedido) references tb_pedido (id_pedido)
);