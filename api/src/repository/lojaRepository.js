import { con } from './connection.js';

export async function inserirCamisa(Camisa){
    const comando = insert into tb_cadastro_camisa (id_camisa, nm_camisa, ds_descricao, qtd_camisa, vl_camisa, nm_marca, ds_tamanho)
                                            values    (?, ?, ?, ?, ?, ?, ?);
    const [resposta] = await con.query(comando, [Camisa.id, Camisa.nome, Camisa.descricao, Camisa.quantidade, Camisa.valor, Camisa.marca, Camisa.tamanho]);

    return resposta;



}
