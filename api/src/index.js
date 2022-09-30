import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import adminController from './controller/adminController.js'
import lojaController from './controller/lojaController.js'

//



const server = express();
server.use(cors());
server.use(express.json());

//configuração dos endpoints

//Liberar arquivos da storage
server.use('/storage/imgcamisas', express.static('storage/imgcamisas'));



server.use(adminController);

server.use(lojaController);

server.listen(process.env.PORT, () => console.log(`Api conectada na porta ${process.env.PORT}`))

