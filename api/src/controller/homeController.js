import { Router } from 'express'

import {buscarCamisaImagem10, buscarCamisaPorId1} from '../repository/lojaRepository.js'

const server = Router();




//lisatr produtos home
server.get('/listar/home', async (req, resp ) =>{
    try{
            const r = await listarProdutosInicio()
            resp.send(r)
    } catch(err){
        erro: err.message
    }
})



// isso aqui tem a ver com o detalhe não sei a rota de fato
server.get('/api/camisa/:id' , async (req, resp ) =>{
    try{
        const id = req.params.id;

      const produto = await buscarCamisaPorId1(id);
      const imagem = await buscarCamisaImagem10(id);

      resp.send({
        info : produto,
        imagem: imagem 
      })

    } catch  (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



export default server;