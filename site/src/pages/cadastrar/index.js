import './index.scss'
import upload from '../../componentes/imgs/upload2.png'
//import { useState } from 'react';

//import { enviarImagemCamisa, cadastrarCamisa} from  '../../api/camisaApi'

export default function Index(){

    

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

                            <input id="firstname" type="text" name="firstname" placeholder="Nome do produto" />
                        </div>

                        <div class="input-box">
                            <input id="Descrição" type="Descrição" name="Descrição" placeholder="Descrição" />
                        </div>

                        <div class="input-box">
                            <input id="Marca" type="Marca" name="Marca" placeholder="Marca"  />
                        </div>

                        <div class="input-box">
                            <input id="Quantidade" type="Quantidade" name="Quantidade" placeholder="Quantidade" />
                        </div>
                        <div class="input-box">
                            <input id="Valor" type="Valor" name="Valor" placeholder="Valor"  />
                        </div>


                        <div class="input-box">
                            <input id="Tamnaho" type="Tamnaho" name="Tamnaho" placeholder="Tamanho"  />
                        </div>

                        <div class="form-imagem">
                            <img src={upload} alt="imagem-upload" width="50px" height="50px"/>
                        </div>
                    </div>
                    <div class="continue-button">
                        <button>Cadastrar</button>
                    </div>

                </form>
            </div>
        </div>
    </main>
    )
}

