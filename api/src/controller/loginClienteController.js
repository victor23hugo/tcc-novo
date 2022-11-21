import { cadastraruser,cadastrarLogin,  login, buscarPerfilPorId, buscarLoginPorId } from "../repository/loginClienteRepository.js"

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


        if(!clienteparainserir.nome)
        throw new Error('Seu nome é obrigatório!!');

        if(!clienteparainserir.nascimento)
        throw new Error('Sua data de nascimento é obrigatório!!');

        if(!clienteparainserir.cpf)
        throw new Error('Seu cpf é obrigatório!!');

        if(!clienteparainserir.telefone)
        throw new Error('Seu telefone é obrigatório!!');


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


        const respota = await cadastrarLogin(email, senha, id)

        resp.send(respota)

    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }

} )

//Carregar Informações do Perfil do Usuario por id
server.get('/usuario/perfil/:id', async (req, resp) =>{
    try {
        const id = req.params.id;

        const usuario = await buscarPerfilPorId(id);
        const login = buscarLoginPorId(id);

        resp.send({
            info: usuario,
            login: login
        })
        
    } catch(err){

        resp.status(400).send({
            erro:err.message
        })
    }
})

export default server ;
