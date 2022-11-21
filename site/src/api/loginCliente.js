import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function logar(email, senha) {
    const r = await api.post('/login', {email, senha });
    return r.data;
}



export async function cadastrarPerfil(nome,  nascimento, cpf, telefone){
    const resposta = await api.post('/cadastrar/user', {nome,  nascimento, cpf, telefone }) 
    return resposta.data;
}



export async function cadastrarLogin(email, senha, id){
    const resposta = await api.post('/cadastrar/login/' + id, { email, senha, id }) 
    return resposta.data;
}

export async function buscarUsuarioPorId(id){
    const resposta = await api.get('/usuario/perfil/' + id) 
    return resposta.data;
}