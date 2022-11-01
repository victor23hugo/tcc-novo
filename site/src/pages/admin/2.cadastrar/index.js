import './index.scss'
import Menu from '../../../componentes/2.MenuAdm'
import Header from '../../../componentes/1.HeaderAdm'
import upload from '../../../componentes/imgs/upload.png'
import {useEffect, useState} from 'react'
import { cadastrarCamisa, enviarImagemCamisa, buscarCamisaPorId, buscarImagem } from '../../../api/camisaApi'
import { useParams} from 'react-router-dom'

import { toast, ToastContainer } from 'react-toastify'
//import 'react-toastify/dist/RactToastify.css';


export default function Index() {
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [valor, setValor] = useState('')
    const [marca, setMarca] = useState('')
    const [tamanho, setTamanho] = useState('')
    const [imagem, setImagem] = useState();
    

    const { id } = useParams()

    useEffect(() =>{
         if(id) {
            carregarcamisa();
         }
    }, [])

   async function carregarcamisa(){
    const resposta = await buscarCamisaPorId(id)
    setNome(resposta.nome);
    setDescricao(resposta.descricao);
    setQuantidade(resposta.quantidade);
    setValor(resposta.valor);
    setMarca(resposta.marca);
    setTamanho(resposta.tamanho);
    setImagem(resposta.imagem);
    }

    async function salvar(){

        if(!imagem)
            throw new Error('Voçe se esqueceu da imagem broder')


        try {
            const novoProduto = await cadastrarCamisa(nome, descricao, quantidade, valor, marca, tamanho);
            const r = await enviarImagemCamisa(novoProduto.id, imagem);
            
            toast.dark('Cadastrado com sucesso✔️')
            
        } catch (err) {
            if(err.response)
            toast.error(err.response.data.erro);
            else
            toast.error(err.message);
        }
    }


function escolherImagem(){
    document.getElementById('imagemcapa').click(); 
}

function mostrarImagem(){
    if (typeof (imagem) == 'object'){
    return URL.createObjectURL(imagem);
    }    
    else {
        return buscarImagem(imagem);
    }
}

    return(
        <main className='page-consultar'>              
            <ToastContainer/>
            
            
        <div className='container'>  
        <Menu/>
            <div className='menu'> 
                <Header/> 
                <br/>
                <br/>
                <br/>
                <br/>
                <div className='Cont'>
                <div className='info-cadastro'>
                    <div className='container2'>
                    <div className='inputs'>

                        <div className='info'>
                            <div className="input-box">
                                <input id="firstname" type="text" name="firstname" placeholder="Nome do produto" value={nome} onChange={e => setNome(e.target.value)}/>
                            </div>

                            <br/>
                            <div className="input-box">
                                <input id="Descrição" type="Descrição" name="Descrição" placeholder="Descrição" value={descricao} onChange={e => setDescricao(e.target.value)} />
                            </div>
                                <br/>
                            <div className="input-box">
                                <input id="Marca" type="Marca" name="Marca" placeholder="Marca" value={marca} onChange={e => setMarca(e.target.value)} />
                            </div>
                                <br/>
                            <div className="input-box">
                                <input id="Quantidade" type="Quantidade" name="Quantidade" placeholder="Quantidade" value={quantidade} onChange={e => setQuantidade(e.target.value)} />
                            </div>
                            <br/>
                            <div className="input-box">
                                <input id="Valor" type="Valor" name="Valor" placeholder="Valor" value={valor} onChange={e => setValor(e.target.value)} />
                            </div>
                            <br/>

                            <div className="input-box">
                                <input id="Tamnaho" type="Tamnaho" name="Tamnaho" placeholder="Tamanho" value={tamanho} onChange={e => setTamanho(e.target.value) } />
                            </div>
                                <br/>
                                <br/>
                        </div>

                        <br/>

                        <div className='imagem-button'>
                            <div className='img-upload' onClick={escolherImagem}>
                            {!imagem  && 
                                    <img src={upload} alt = "" width="200" height="200"/>
                            }
                            {imagem &&
                                <img className='imagem-camisa' src = {mostrarImagem()}/>
                            }
                                <input type = 'file' id='imagemcapa' onChange={e => setImagem(e.target.files[0])}/>
                            
                            </div>

                            
                        <div className='container-button'>
                                <button onClick={salvar}>Cadastrar</button>
                                <button onClick={salvar}>Alterar</button>
                            </div>
                        </div>
                    
                    </div>
                    </div>

                </div>
                </div>
            </div>
            </div>
                    
            
        </main>
    )
}
