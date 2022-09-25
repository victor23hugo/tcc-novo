create table tb_admin_login (
id_admin_login        int primary key auto_increment,
nm_usuario    varchar (30),
ds_email    varchar(50),
ds_senha    varchar (50)
);


create table tb_cadastro_camisa(
id_camisa        int primary key auto_increment,
nm_camisa        varchar (30),
ds_descricao    varchar(1000),
qtd_camisa        int,
vl_camisa        decimal,
nm_marca        varchar(50),
ds_tamanho        varchar(20),
img_camisa        blob
);