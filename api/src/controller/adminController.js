import {login, buscarTodosPedidos} from '../repository/adminRepository.js'

import { Router } from 'express'

const server = Router();


server.post('/admin/login', async (req, resp) => {
    try{
        const {email, senha} = req.body;
        const resposta = await login (email, senha);
        if (!resposta){
            throw new Error ('Credenciais invalidas');
        }
        resp.send(resposta)
    } catch (err){
        resp.status(401).send({
            erro: err.message
        });
    }
})


server.get('/buscar/pedido', async (req, resp) => {
    try {       

        const r = await buscarTodosPedidos()
        resp.send(r)

    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})


server.get('/buscar/pedido/:id', async (req, resp) => {
    try {

        const id = req.params.id;
        
        const r = await buscarPedidosPorId(id);
        resp.send(r)

    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

export default server;  
