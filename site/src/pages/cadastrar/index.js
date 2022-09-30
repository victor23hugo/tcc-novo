import './index.scss'
import upload from '../../componentes/imgs/upload2.png'
import { useState } from 'react';

import { enviarImagemCamisa, cadastrarCamisa} from  '../../api/camisaApi'

export default function Index(){

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [valor, setValor] = useState('');
    const [tamaho, setTamanho] = useState('');
    const [marca, setMarca] = useState('');
    const [imagem, setImagem] = useState('');
    
   async function salvarClick(){
        try{
            const r = await cadastrarCamisa(nome, descricao, quantidade, valor, tamaho, marca);
            alert('Camisa cadastrada com sucesso ');

        } catch (err){
            alert(err.message);
        }
    }

    return(
        <main>
        <div class="princ">
            <div class="form-image">

          <h4>Espaço reservado para menu</h4>

            </div>
            <div class="form">
                <form action="#">
                    <div class="form-header">
                        <div class="title">
                            <h1>Cadatrar novos produtos</h1>
                        </div>
                        <div class="login-boton">
                            <button>Voltar</button>
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="input-box">

                            <input id="firstname" type="text" name="firstname" placeholder="Nome do produto" value={nome} onChange={e => setNome(e.target.value)}/>
                        </div>

                        <div class="input-box">
                            <input id="Descrição" type="Descrição" name="Descrição" placeholder="Descrição" value={descricao} onChange={e => setDescricao(e.target.value)}/>
                        </div>

                        <div class="input-box">
                            <input id="Marca" type="Marca" name="Marca" placeholder="Marca"  value={marca} onChange={e => setMarca(e.target.value)}/>
                        </div>

                        <div class="input-box">
                            <input id="Quantidade" type="Quantidade" name="Quantidade" placeholder="Quantidade"  value={quantidade} onChange={e => setQuantidade(e.target.value)}/>
                        </div>
                        <div class="input-box">
                            <input id="Valor" type="Valor" name="Valor" placeholder="Valor"  value={valor} onChange={e => setValor(e.target.value)}/>
                        </div>


                        <div class="input-box">
                            <input id="Tamnaho" type="Tamnaho" name="Tamnaho" placeholder="Tamanho"  value={tamaho} onChange={e => setTamanho(e.target.value)}/>
                        </div>

                        <div class="form-imagem">
                            <img src={upload} alt="imagem-upload" width="50px" height="50px"/>
                        </div>
                    </div>
                    <div class="continue-button">
                        <button onClick={salvarClick}>Cadastrar</button>
                    </div>

                </form>
            </div>
        </div>
    </main>
    )
}

