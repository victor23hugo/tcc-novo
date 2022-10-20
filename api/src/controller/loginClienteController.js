import { cadastraruser, login } from "../repository/loginClienteRepository.js"

import { Router } from "express";
const server = Router();

server.post('/login', async (req, resp) => {
    try{
        const { email, senha } = req.body;
        
        const r = await login (email, senha);
        if (!r) {
            throw new Error('Credenciais inválidas');
        }

        resp.send(r) 
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



server.post('/cadastrar/user', async (req, resp) =>{
    try{

        const clienteparainserir = req.body;

        const cliente = await cadastraruser(clienteparainserir)

        resp.send(cliente)

    } catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server ;
