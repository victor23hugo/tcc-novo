import { Router } from "express";
import { buscarPorId } from "../repository/lojaRepository.js";

const server = Router();

import { inserirPagamento, inserirPedido, inserirPedidoItem } from "../repository/pedidoRepository.js";
import { criarNovoPedido } from "../servivce/novoProduto.js";
import {criarNotaFiscal} from '../servivce/novoProduto.js   '



server.post('/api/pedido/:idUsuario/', async (req, resp) =>{
    try{

        const { idUsuario } = req.params;
        const info = req.body;

        const novoPedido = criarNovoPedido(idUsuario, info);
        const idPedidoCriado = await inserirPedido(novoPedido);
        const idPagamentoCriado = await inserirPagamento(idPedidoCriado, info.cartao);

        for (let item of info.produtos){
            const prod = await buscarPorId(item.id);
            const idPedidoItemCriado = await inserirPedidoItem(idPedidoCriado, prod.id_camisa, item.qtd, prod.valor)
        }

        resp.status(204).send();

    } catch(err){
        console.log(err)
        resp.status(400).send({
            erro: err.message
        })
        
    }
})


export default server;