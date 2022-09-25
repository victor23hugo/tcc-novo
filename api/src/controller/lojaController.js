import { inserirCamisa } from "../repository/lojaRepository.js";

import { Router } from 'express'
const server = Router();


server.post('/camisa', async (req, resp) => {

    try{
        const camisaparainseirir = req.body;

        const camisa = await camisaparainseirir(inserirCamisa);

        resp.send(camisa);

    }catch(err){
        resp.send(400).send({
            erro: err.message
        })
    }

})


export default server;
