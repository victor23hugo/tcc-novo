import server from "../controller/adminController.js";
import { con } from "./connection.js";

//inserir camisa no banco
export async function inserirCamisa(camisa){
    const comando = `
insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
                    values    (?,?,?,?,?,?);
    `

    const [resposta] = await con.query(comando, [camisa.nome, camisa.descricao, camisa.quantidade, camisa.valor, camisa.marca, camisa.tamanho]);
    camisa.id = resposta.insertId;
    console.log(resposta)

    return camisa;
}



//listar Camisas
export async function buscarProduto(){

    const comando = 
    `
    select id_camisa as id,
    nm_camisa	as nome,
    nm_marca	as marca,
    vl_camisa	as valor,
    qtd_camisa  as quantidade,
    ds_tamanho  as tamanho
from tb_cadastro_camisa 
group 
by id_camisa,
    nm_camisa	,
    nm_marca	,
    vl_camisa	,
    qtd_camisa  ,
    ds_tamanho	;
    
    `
    const [registros] = await con.query(comando);
    return registros;

}

// Enviar imagem
export async function alterarImagem(imagem , id ){

    const comando = `

    update tb_cadastro_camisa
        set img_camisa =        ?
        where id_camisa =       ?

    `
    const [resposta] = await con.query(comando, [imagem, id]);
    return resposta.affectedRows
}


//buscar por nome
export async function buscarPorNome(nome){

    const comando = 
    `
    select id_camisa	,
    nm_camisa	as nome,
    nm_marca	as marca,
    vl_camisa	as valor,
    qtd_camisa  as quantidade,
    ds_tamanho  as tamanho
from tb_cadastro_camisa 
    where nm_camisa like  ?`;


    const [registros] = await con.query(comando, [`%${nome}%`]);
    return registros;

}



//buscar por marca Arrumar 
export async function buscarPorMarca(marca){

    const comando = 
    `
    select id_camisa	,
    nm_camisa	as nome,
    nm_marca	as marca,
    vl_camisa	as valor,
    qtd_camisa  as quantidade,
    ds_tamanho  as tamanho
from tb_cadastro_camisa 
    where nm_marca like  ?`;


    const [registros] = await con.query(comando, [`%${marca}%`]);
    return registros;

}
//Arrumar  <...> -guilherme



//buscar por id 
export async function buscarPorId(id){

    const comando = 
    `
    select id_camisa	,
    nm_camisa	as nome,
    nm_marca	as marca,
    ds_descricao as descricao,
    img_camisa   as imagem,
    vl_camisa	as valor,
    qtd_camisa  as quantidade,
    ds_tamanho  as tamanho
from tb_cadastro_camisa 
    where id_camisa = ?`;


    const [registros] = await con.query(comando, [id]);
    return registros[0];

}

//remover Camisa Funcionando 
export async function removerCamisa1 (id){
    const comando = `
    
    delete from tb_cadastro_camisa
    where id_camisa = ? `

    const [resposta] = await con.query (comando, [id]);
    return resposta.affectedRows;
}


 
       



export async function buscarCamisaPorId1(id){

    const comando = 
    `
    select id_camisa as id,
    nm_camisa	as nome,
    nm_marca	as marca,
    vl_camisa	as valor,
    qtd_camisa  as quantidade,
    ds_tamanho  as tamanho
from tb_cadastro_camisa 
    where id_camisa = ?
    `
    const [registros] = await con.query(comando, [id]);
    return registros[0];

}

export async function buscarCamisaImagem10(idCamisa){
        const comando = `
        
        select img_camisa as imagem
        from tb_cadastro_camisa
        where id_camisa = ?
        
        `
    const [registros] = await con.query(comando, [idCamisa]);
    return registros.map(item => item.imagem)

}    


//listar produtos na home

export async function listarProdutosInicio(){
    const comando = `


        select id_camisa        id ,
        nm_camisa               nome,
        vl_camisa               valor,
        nm_marca                marca,
        ds_descricao            descricao,
        img_camisa	            imagem
        from tb_cadastro_camisa


    `

    const [registros] = await con.query (comando);
    return registros;
}

export async function listarProdutosPuma(){
    const comando = `


        select id_camisa        id ,
        nm_camisa               nome,
        vl_camisa               valor,
        nm_marca                marca,
        ds_descricao            descricao,
        img_camisa	            imagem
        from tb_cadastro_camisa
        where nm_marca = 'Puma'
    `

    const [registros] = await con.query (comando);
    return registros;
}


export async function alterarcamisa1(id, camisa){

    const comando = `
    
    update tb_cadastro_camisa
        set nm_camisa		= ?,
	        ds_descricao	= ?,
	        qtd_camisa		= ?,
            vl_camisa		= ?,
            nm_marca		= ?,
            ds_tamanho		= ?
            where id_camisa = ?;

    `
        const [resposta ] = await con.query (comando, [camisa.nome, camisa.descricao, camisa.quantidade, camisa.valor, camisa.marca, camisa.tamanho, id])
        return resposta.affectedRows;
}