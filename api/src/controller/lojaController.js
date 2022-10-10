import {  alterarImagem, buscarPorId, buscarProduto, inserirCamisa, buscarPorNome, buscarPorMarca, removerCamisa1 } from '../repository/lojaRepository.js';

import multer from 'multer'
import { Router } from 'express';

const server = Router();
const upload = multer({ dest: 'storage/imgcamisas'})




server.post('/camisa', async (req, resp) =>{

    try{
        const camisaParaInserir = req.body;

        if(!camisaParaInserir.nome)
        throw new Error('Nome da camisa é obrigatório!!');

        if(!camisaParaInserir.descricao)
        throw new Error('Descrição da camisa é obrigatório!!');

        if(!camisaParaInserir.quantidade)
        throw new Error('Quantidade de Camisas é obrigatório!!');

        if(!camisaParaInserir.valor)
        throw new Error('Nome do filme é obrigatório!!');

        if(!camisaParaInserir.marca)
        throw new Error('Marca da camisa é obrigatória!!');

        if(!camisaParaInserir.tamanho)
        throw new Error('Tamanho da camisa é obrigatório!!');


        const camisaInserida = await inserirCamisa(camisaParaInserir);

        resp.send(camisaInserida);

    } catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }

})



//listar camisas 
server.get('/admin/camisa', async (req, resp) =>{
    try{
        const r = await buscarProduto();
        resp.send(r);
    } 
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})


//buscar por nome 
server.get('/admin/busca', async (req, resp) =>{
    try{
        const {nome} = req.query;

        const resposta  = await buscarPorNome(nome);

        if(resposta.length == 0 )
        throw new Error('Camiseta Não Encontrada/ Não Cadastrada / Não existente')

        resp.send(resposta);
    } 
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})


//buscar por marca ARRUMAR --guilherme 
server.get('/admin/busca', async (req, resp) =>{
    try{
        const {marca} = req.query;

        const resposta  = await buscarPorMarca(marca);

        if(!resposta)
        throw new Error('Camiseta Não Encontrada/ Não Cadastrada / Não existente')

        resp.send(resposta);
    } 
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})



//buscar por id 
server.get('/admin/:id', async (req, resp) =>{
    try{
        const id = Number(req.params.id);

        const resposta  = await buscarPorId(id);

        if(!resposta)
        throw new Error('Camiseta Não Encontrada/ Não Cadastrada / Não existente')

        resp.send(resposta);
    } 
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})


//deletar camisa
server.delete('/admin/camisa/i/:id', async (req, resp ) =>{
    try{

        const id = req.params.id;

        await removerCamisa(id);


        resp.status(204).send();

    } catch (err){
        resp.status(400).send({
            erro: err.message
        })
    }

})

//inserir imagem 'camisa no form pra poder chamar'

server.put('/camisa/:id/imagem', upload.single('camisa') ,async (req, resp) =>{
    try{
        const {id} = req.params;
        const imagem = req.file.path;

        const resposta = await alterarImagem(imagem, id)
        if(resposta != 1 )
        throw new error('A imagem Nao pode ser salva.')
        
        resp.status(204).send();
    } catch (err){
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;


server.delete('/camisa/:id', async (req, resp ) =>{
    try{
        const {id} = req.params;

       const  resposta = removerCamisa1(id);


       resp.status(204).send();
    } catch (err){
        resp.status(400).send({
            erro: err.message
        })
    }
})