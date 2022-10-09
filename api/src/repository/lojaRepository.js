import server from "../controller/adminController.js";
import { con } from "./connection.js";


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




export async function buscarProduto(){

    const comando = 
    `
    select id_camisa	 as id,
            nm_camisa	as nome,
            vl_camisa	as valor,
            qtd_camisa  as quantidade,
            ds_tamanho  as tamanho
    from tb_cadastro_camisa 
    group 
        by id_camisa,
            nm_camisa	,
            vl_camisa	,
            qtd_camisa  ,
            ds_tamanho	;
    
    `
    const [registros] = await con.query(comando);
    return registros;

}

export async function removerCamisa(idCamisa){

    const comando = `
    
    delete from tb_cadastro_camisa
            where id_camisa = ?
    
    `


}

export async function salvarCamisaImagem(idCamisa, imagemPath) {
    const comando = `
            insert into tb_camisa_imagem(id_camisa, ds_imagem)
                                values (?, ?)    
    `

    const [resp] = await  con.query(comando, [idCamisa, imagemPath]) 

}
