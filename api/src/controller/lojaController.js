import { alterarImagem, inserirCamisa, salvarProdutoImagem } from '../repository/lojaRepository.js';

import multer from 'multer'

import { Router } from 'express';
const server = Router();

const upload = multer({dest: 'storage/imgcamisas'})




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

        resp.status(200).send(camisaInserida)

    } catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }

})





server.put ('admin/camisa/:id', upload.array('imagens'), async (req, resp) =>{
    try{
        const id = req.params.id;
        const imagens = req.files;

        for(const imagem of imagens){

           await salvarProdutoImagem (id, imagem.path);
        }

        resp.status(204).send();

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
} )





export default server;
