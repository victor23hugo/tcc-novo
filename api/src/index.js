import cors from 'cors'
import 'dotenv/config'
import express from 'express'


const server = express();
server.use(cors());
server.use(express.json());

server.listen(process.env.PORT, () => console.log(`Api conectada na porta ${process.env.PORT}`))