import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})



//Listar Produtos Puma na home
export async function listarProdutosFaixa3(){
    const r = await api.get('/puma');
    return r.data;
}

//Listar Produtos Nike na home
export async function listarProdutosFaixa1(){
    const r = await api.get('/nike');
    return r.data;
}

//listar Produtos Adidas na home
export async function listarProdutosFaixa2(){
    const r = await api.get('/adidas');
    return r.data;
}

//listar as camisas Umbro na home
export async function listarProdutosFaixa4(){
    const r = await api.get('/umbro');
    return r.data
}

//Filtro Nike
 export async function filtrarProdutosNike(){
     const r = await api.get('/filtro/nike');
     return r.data;
 }

// //Filtro umbro
 export async function listarProdutosUmbro(){
     const r = await api.get('/filtro/umbro');
     return r.data;
 }

// //filtro Adidas
// export async function listarProdutosAdidas(){
//     const r = await api.get('/filtro/adidas');
//     return r.data;
// }