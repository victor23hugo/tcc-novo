 
import axios from 'axios'

const api = axios.create({
    baseURL: `http://localhost:5000`
})

export async function cadastrarCamisa(nome, descricao, quantidade, valor, marca, tamanho){
    
    const resposta = await api.post('/camisa', {nome, descricao, quantidade, valor, marca, tamanho  })
    return resposta.data;
}

export async function buscarCamisa(){
    
    const resposta = await api.get('/admin/camisa')
    return resposta.data;
}


export async function enviarImagemCamisa(id, imagem){
    const formData = new FormData();
    formData.append('camisa', imagem);
    const resposta = await api.put(`/camisa/${id}/imagem`, formData,  {
        headers: {
            "Content-Type": "multipart/formData"
        },
    });

    return resposta.status;
}