import axios from 'axios'

const api = axios.create({
    baseUrl: 'http://localhost:5000'
})


export async function cadastrarCamisa(nome, descricao, quantidade, valor, marca, tamanho){
    const resposta = await api .post('/camisa', {
        
            nome: nome,
            descricao: descricao,
            quantidade: quantidade,
            valor: valor,
            marca: marca,
            tamanho: tamanho
          
    })

    return resposta.data;

}


export async function enviarImagemCamisa(id, imagem){
    const formData =    new formData();
    formData.append('imagem', imagem );

    const resposta = await api.put(`/camisa/${id}/imagem`, formData, {
        headers:{
            "Content-Type": "multipart/form-data"
        },
    });

    return resposta.status;
}