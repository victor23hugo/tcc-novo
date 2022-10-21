import './index.scss'
import Menu from '../../../componentes/2.MenuAdm'
import Header from '../../../componentes/1.HeaderAdm'
import upload from '../../../componentes/imgs/upload.png'
import {useState} from 'react'
import { cadastrarCamisa, enviarImagemCamisa } from '../../../api/camisaApi'

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



    async function salvar(){

        if(!imagem)
            throw new Error('Voçe se esqueceu da imagem broder')
        try {
            const novoProduto = await cadastrarCamisa(nome, descricao, quantidade, valor, marca, tamanho);
            const r = await enviarImagemCamisa(novoProduto.id, imagem);
            
            alert('Cadastrado com sucesso!')
        } catch (err) {
            if(err.response)
            toast(err.response.data.erro);
            else
            toast(err.message);
        }
    }


function escolherImagem(){
    document.getElementById('imagemcapa').click(); 
}

function mostrarImagem(){
    return URL.createObjectURL(imagem);
}

    return(
        <main className='page-consultar'>              
            <ToastContainer/>
            
            
        <div className='container'>  
        <Menu/>
            <div className='menu'> 
                <Header/> 
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

                            
                        <div>
                                <button onClick={salvar}>Cadastrar</button>
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
