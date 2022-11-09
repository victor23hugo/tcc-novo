import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})



//Filteo de camisas Puma 
export async function listarProdutosPuma(){
    const r = await api.get('/filtro/puma');
    return r.data;
}


//Filtro Nike
// export async function listarProdutosNike(){
//     const r = await api.get('/filtro/nike');
//     return r.data;
// }

// //Filtro umbro
// export async function listarProdutosUmbro(){
//     const r = await api.get('/filtro/umbro');
//     return r.data;
// }

// //filtro Adidas
// export async function listarProdutosAdidas(){
//     const r = await api.get('/filtro/adidas');
//     return r.data;
// }