import { alterarImagem, inserirCamisa } from '../repository/lojaRepository.js';

import multer from 'multer'

import { Router } from 'express';
const server = Router();

const upload = multer({dest: 'storage/imgcamisas'})




server.post('/camisa', async (req, resp) =>{
console.log('bateu aqui')
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



server.put('/camisa/:id/imagem', upload.single('imagem') ,async(req,resp) =>{

    try{
        const { id } = req.params;
        const imagem = req.file.path;
        
        
        const resposta = await alterarImagem(imagem, id);
        resp.status(204).send();

        if(resposta != 1)
        throw new Error ('A imagem nao pode ser salva.')


    } catch (err){
        resp.status(400).send({
            erro:  err.message 
        })
        
    }


})





export default server;
