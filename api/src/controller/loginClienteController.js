import { cadastraruser,cadastrarLogin,  login } from "../repository/loginClienteRepository.js"

import { Router } from "express";
const server = Router();



server.post('/login', async (req, resp) => {
    try{
        const {email, senha } = req.body;
        
        const r = await login (email, senha);
        if (!r) {
            throw new Error('Credenciais inválidas❌');
        }

        resp.send({
                id: r.id,
                nome: r.nome
        }) 
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

        resp.send({
            id: cliente.id
        })

    } catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.post('/cadastrar/login/:id', async (req, resp) =>{
    try{ 
        const id = req.params.id;
        const {email, senha} = req.body

        //await validarLoginCliente(login)

        const respota = await cadastrarLogin(email, senha, id)

        resp.send(respota)

    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }

} )







export default server ;
