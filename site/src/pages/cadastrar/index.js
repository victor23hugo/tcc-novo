import './index.scss'
import Menu from '../../componentes/menu'
import Cabecalho from '../../componentes/cabecalho'
import upload from '../../componentes/imgs/upload.png'
import {useState} from 'react'
import { cadastrarCamisa } from '../../api/camisaApi'

export default function Index() {
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [valor, setValor] = useState('')
    const [marca, setMarca] = useState('')
    const [tamanho, setTamanho] = useState('')

    async function salvar(){
        try {
            const novoProduto = await cadastrarCamisa(nome, descricao, quantidade, valor, marca, tamanho)
            alert('cadastrado')
        } catch (err) {
            console.log(err)
            alert(err.response.data.erro)
        }
    }

    return(
        <main className='page page-consultar'>              
           
            <Cabecalho />
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
                        <div class="continue-button">
                        <button onClick={salvar}>Cadastrar</button>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                
                    <div className='img-upload'>
                        <img src={upload} alt = "upload" width="200" height="200"/>
                    </div>
                    
                    </div>
                </div>

                


        </main>
    )
}
