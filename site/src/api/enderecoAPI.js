import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function salvar(idUsuario, cep, referencia,  logradouro, bairro, cidade, estado, numero, complemento) {
    const r = await api.post('/api/usuario/' + idUsuario + '/endereco', { cep, referencia, logradouro, bairro, cidade, estado, numero, complemento });
    return r.data;
}

export async function listar(idUsuario) {
    const r = await api.get('/api/usuario/' + idUsuario + '/endereco');
    return r.data;
}