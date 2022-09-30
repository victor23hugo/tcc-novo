import { con } from "./connection.js";


export async function inserirCamisa(camisa){
    const comando = `
insert into tb_cadastro_camisa (nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
                    values    (?,?,?,?,?,?);
    `

    const [resposta] = await con.query(comando, [camisa.nome, camisa.descricao, camisa.quantidade, camisa.valor, camisa.marca, camisa.tamanho]);
    camisa.id = resposta.insertId;

    return camisa;
}


export async function alterarImagem(imagem, id){
    const comando = `
    update tb_cadastro_camisa
    set img_camisa1 = ?
    where id_camisa = ?`;

            const [resposta] = await con.query(comando, [imagem, id]);
            resposta.affectedRows;
}

