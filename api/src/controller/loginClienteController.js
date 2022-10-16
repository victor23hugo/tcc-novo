import { login } from "../repository/loginClienteRepository.js"

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


export default server ;