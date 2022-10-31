import {con} from "./connection.js"




export async function inserirPedido(novoPedido) {
    const comando = `
        INSERT INTO tb_pedido (
            id_usuario,
            id_usuario_endereco,
            dt_pedido,
            cod_nota_fiscal,
            tp_frete,
            vl_frete,
            ds_status,
            tp_pagamento
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `

    const [info] = await con.query(comando, [
        novoPedido.idUsuario,
        novoPedido.idEndereco,
        novoPedido.data,
        novoPedido.notaFiscal,
        novoPedido.tipoFrete,
        novoPedido.valorFrete,
        novoPedido.status,
        novoPedido.tipoPagamento
    ]);
    return info.insertId;
}

export async function inserirPagamento(idPedido, novoPagamento) {
    const comando = `
            INSERT INTO tb_pagamento_cartao (
                id_pedido,
                nm_cartao,
                nr_cartao,
                dt_vencimento,
                cod_seguranca,
                nr_parcelas,
                ds_forma_pagamento
            )
            VALUES (?, ?, ?, ?, ?, ?, ?);
    `

    const [info] = await con.query(comando, [
        idPedido,
        novoPagamento.nome,
        novoPagamento.numero,
        novoPagamento.vencimento,
        novoPagamento.codSeguranca,
        novoPagamento.parcelas,
        novoPagamento.formaPagamento
    ]);
    return info.affectedRows;
}

export async function inserirPedidoItem(idPedido, idCamisa, qtd, preco) {
    const comando = `
        INSERT INTO tb_pedido_item (
            id_pedido,
            id_camisa,
            qtd_itens,
            vl_produto
        )
        VALUES (?, ?, ?, ?)
    `

    const [info] = await con.query(comando, [idPedido, idCamisa, qtd, preco]);
    return info.affectedRows;
}