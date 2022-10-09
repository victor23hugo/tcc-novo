import './index.scss'
import Menu from '../../../componentes/2.MenuAdm'
import Header from '../../../componentes/1.HeaderAdm'
import upload from '../../../componentes/imgs/upload.png'
import {useState} from 'react'
import { cadastrarCamisa, salvarImagem } from '../../../api/camisaApi'


export default function Index() {
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [valor, setValor] = useState('')
    const [marca, setMarca] = useState('')
    const [tamanho, setTamanho] = useState('')

    const [imagem1, setImagem1 ] = useState();
    const [imagem2, setImagem2] = useState();


    async function salvar(){
        try {
            const novoProduto = await cadastrarCamisa(nome, descricao, quantidade, valor, marca, tamanho)
            await salvarImagem(r.id, imagem1, imagem2);
            alert('cadastrado umildimente no banco')
        } catch (err) {
            console.log(err)
            alert(err.response.data.erro)
        }
    }

    function exibirImagem(imagem){
        if(imagem == undefined){
            return {upload};
        }

        else {
        URL.createObjectURL(imagem);
        }

         
    }
    

    async function escolherImagem(inputId){
        document.getElementById(inputId).click();
    }

    return(
        <main className='page-consultar'>              
           
            <Header/>
            <div className='container'>    
                <Menu/>
                <br/>
            
                <br/>
            </div>
                <div className='input-group'>


                <div className='inputs'>
                
                        <div class="inputs">

                            <input id="firstname" type="text" name="firstname" placeholder="Nome do produto" value={nome} onChange={e => setNome(e.target.value)}/>
                        </div>
                            <br/>
                        <div class="input-box">
                            <input id="Descrição" type="Descrição" name="Descrição" placeholder="Descrição" value={descricao} onChange={e => setDescricao(e.target.value)} />
                        </div>
                            <br/>
                        <div class="input-box">
                            <input id="Marca" type="Marca" name="Marca" placeholder="Marca" value={marca} onChange={e => setMarca(e.target.value)} />
                        </div>
                            <br/>
                        <div class="input-box">
                            <input id="Quantidade" type="Quantidade" name="Quantidade" placeholder="Quantidade" value={quantidade} onChange={e => setQuantidade(e.target.value)} />
                        </div>
                        <br/>
                        <div class="input-box">
                            <input id="Valor" type="Valor" name="Valor" placeholder="Valor" value={valor} onChange={e => setValor(e.target.value)} />
                        </div>
                        <br/>

                        <div class="input-box">
                            <input id="Tamnaho" type="Tamnaho" name="Tamnaho" placeholder="Tamanho" value={tamanho} onChange={e => setTamanho(e.target.value) } />
                        </div>
                        <br/>
                        
                    <div className='img-upload'>
                        <img src={exibirImagem(imagem1)} alt = "" width="200" height="200" onClick={() => escolherImagem('imagem1')}/>
                        <img src={exibirImagem(imagem2)} alt = "" width="200" height="200"  onClick={() => escolherImagem('imagem2')}/>

                        <input type = 'file' id = 'imagem1' onChange={e => setImagem1(e.target.files[0])} />
                        <input type = 'file' id = 'imagem2' onChange={e => setImagem2(e.target.files[0])}/>
                    </div>
                    
                    </div>
                    
                    
                    
                
                    <div class="continue-button">
                        <button onClick={salvar}>Cadastrar</button>
                    </div>

                </div>

                


        </main>
    )
}
