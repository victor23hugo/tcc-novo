import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import adminController from './controller/adminController.js'
import lojaController from './controller/lojaController.js'
import loginClienteController from './controller/loginClienteController.js'




const server = express();
server.use(cors());
server.use(express.json());


//Liberar arquivos da storage
server.use('/storage/imgcamisas',  express.static('storage/imgcamisas'));


server.use(adminController);
server.use(lojaController);
server.use(loginClienteController);

server.listen(process.env.PORT, () => console.log(`api conectada na porta ${process.env.PORT}`))

