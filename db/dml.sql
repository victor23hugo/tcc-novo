use casportsDB;


-- login adm

insert into tb_admin_login(ds_email, ds_senha)
						values('adm@gmail.com', '12');
select id_admin_login 		id,
       ds_email			email,
       ds_senha			senha
  from tb_admin_login
 where ds_email 		= 'adm@gmail.com'
   and ds_senha			= '12';

-- cadastrar Camisa
   -- CADASTRAR CAMISA
   insert into tb_cadastro_camisa (id_camisa, nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
                        values    ('3','Camisa curintians','corinthians é lixo!', '20', '200', 'Nike', 'P');

    select id_camisa    id,
        nm_camisa        nome,
        ds_descricao    descricao,
        qtd_camisa        quantidade,
        vl_camisa        valor,
        nm_marca        marca,
        ds_tamanho        tamanho
from tb_cadastro_camisa
where nm_camisa            = 'Camisa curintians'
and        ds_tamanho        = 'P';