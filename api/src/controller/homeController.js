import { Router } from 'express'
import { Adidas, listarPorNome, listarTamanhoG, listarTamanhoGG, listarTamanhoM, listarTamanhoP, teste, testeNike, Umbro } from '../repository/homeRepositoy.js';

import { buscarCamisaImagem10, buscarCamisaPorId1, listarProdutosAdidas, listarProdutoscatalogo, listarProdutosInicio, listarProdutosNike, listarProdutosPuma, listarProdutosUmbro } from '../repository/lojaRepository.js'

const server = Router();




//lisatr produtos home
server.get('/listar/home', async (req, resp) => {
    try {
        const r = await listarProdutosInicio()
        resp.send(r)
    } catch (err) {
        erro: err.message
    }
})

//LISTAR TODOS OS PRODUTOS
server.get('/listar/catalogo', async (req, resp) => {
    try {
        const r = await listarProdutoscatalogo()
        resp.send(r)
    } catch (err) {
        erro: err.message
    }
})


//Filtro de camisas Puma
server.get('/filtro/puma', async (req, resp) => {
    try {
        const r = await listarProdutosPuma()
        resp.send(r)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


//listando as camisas Puma na Home
server.get('/puma', async (req, resp) => {

    try {
        const r = await teste();
        resp.send(r)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.get('/nike', async (req, resp) => {
    try {
        const r = await testeNike();
        resp.send(r)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/adidas', async (req, resp) =>{
    try{

        const r = await Adidas();
        resp.send(r)

    } catch (err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/umbro', async (req, resp) =>{
    try{

        const r = await Umbro();
        resp.send(r)

    } catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
})




//filtro de camisa Adidas
server.get('/filtro/adidas', async (req, resp) => {
    try {
        const r = await listarProdutosAdidas()
        resp.send(r)
    } catch (err) {
        erro: err.message
    }
})


//Filtro camisas Nike
server.get('/filtro/nike', async (req, resp) => {
    try {
        const r = await listarProdutosNike()
        resp.send(r)
    } catch (err) {
        erro: err.message
    }
})

//Filtro camisas UMbro
server.get('/filtro/umbro', async (req, resp) => {
    try {
        const r = await listarProdutosUmbro()
        resp.send(r)
    } catch (err) {
        erro: err.message
    }
})



// isso aqui tem a ver com o detalhe n??o sei a rota de fato
server.get('/api/camisa/:id', async (req, resp) => {
    try {
        const id = req.params.id;

        const produto = await buscarCamisaPorId1(id);
        const imagem = await buscarCamisaImagem10(id);

        resp.send({
            info: produto,
            imagem: imagem
        })

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/filtro/tamanho/p', async (req, resp) => {
    try {
        const r = await listarTamanhoP()
        resp.send(r)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/filtro/tamanho/m', async (req, resp) => {
    try {
        const r = await listarTamanhoM()
        resp.send(r)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

// server.get('/busca', async (req, resp) => {
//     try {
//         const { nome } = req.query;
        
//         const resposta = await listarPorNome(nome);

//         if (resposta.length == 0)
//             resp.status(404).send()
//         else
//             resp.send(resposta);
//     } catch (err) {
//         resp.status(400).send({
//             erro: err.message
//         })
//     }
// })

server.get('/filtro/tamanho/g', async (req, resp) => {
    try {
        const r = await listarTamanhoG()
        resp.send(r)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/filtro/tamanho/gg', async (req, resp) => {
    try {
        const r = await listarTamanhoGG()
        resp.send(r)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;