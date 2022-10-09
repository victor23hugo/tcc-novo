 
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


export async function salvarImagem(id, imagem1, imagem2){
    let form = new FormData();
    form.append('imagens', imagem1);
    form.append('imagens', imagem2);

    const r = await api.put('/admin/camisa/' + id, form, {

        headers: {
            'Content-Type' : 'multipart/form-data'
        }
    });

    return r.data;


}
