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



export async function listarPedidos(){
    const comando = `
    
    
    
    
    `

    const [registro] = await con.query (comando)
    return registro;
}