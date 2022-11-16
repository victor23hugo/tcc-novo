import {con} from './connection.js'





export async function login (email, senha){

    const comando = 
     ` select id_admin_login 		id,
     ds_email			email,
     ds_senha			senha
from tb_admin_login
where ds_email 		= ?
 and ds_senha			= ?`

    const [linhas] = await con.query(comando, [email, senha])
    return linhas[0];
}



export async function buscarTodosPedidos(){
    const comando = `
    
    
    select tb_pedido.id_pedido    as ID,
            nm_usuario             as Nome,
            ds_cpf                 as CPF,
            ds_status              as Situacao_do_Pedido,
date_format(dt_pedido, "%d/%m/%Y") as Data_do_Pedido,
            ds_logradouro                 as logradouro,
            ds_numero                as Numero,
            ds_cep                 as CEP,
            ds_bairro              as Bairro,
            ds_cidade              as Cidade,
            ds_estado                  as Estado,
            ds_complemento         as Complemento,
            ds_referencia          as Referencia
       from tb_pedido
 inner join tb_usuario 
         on tb_usuario.id_usuario = tb_pedido.id_usuario
 inner join tb_usuario_endereco 
         on tb_usuario_endereco.id_usuario_endereco = tb_pedido.id_usuario_endereco
      Order 
         by dt_pedido
    
    `

    const [registro] = await con.query (comando)
    return registro;
}

