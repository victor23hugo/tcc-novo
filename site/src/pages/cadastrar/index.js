import './index.scss'
import upload from '../../componentes/imgs/icon-upload.svg'

export default function Index(){

    return(
        <main>
        <div class="princ">
            <div class="form-image">
                <img src={upload}/>
                
            </div>
            <div class="form">
                <form action="#">
                    <div class="form-header">
                        <div class="title">
                            <h1>Cadastrar novos produtos</h1>
                        </div>
                        <div class="login-boton">
                            <button><a href="../home/index.html">Voltar</a></button>
                        </div>
                    </div>
     
                    <div class="input-group">
                        <div class="input-box">
                            
                            <input id="firstname" type="text" name="firstname" placeholder="Nome do produto" required/>
                        </div>
    
                        <div class="input-box">
                            <input id="Descrição" type="Descrição" name="Descrição" placeholder="Descrição" required/>
                        </div>
    
                        <div class="input-box">
                            <input id="Marca" type="Marca" name="Marca" placeholder="Marca" required/>
                        </div>
    
                        <div class="input-box">
                            <input id="Categoria" type="Categoria" name="Categoria" placeholder="Digite a categoria" required/>
                        </div>
    
                        <div class="input-box">
                            <input id="Valor" type="Valor" name="Valor" placeholder="Valor" required/>
                        </div>
    
                        
                        <div class="input-box">
                            <input id="Tamnaho" type="Tamnaho" name="Tamnaho" placeholder="Tamanho" required/>
                        </div>
    
                        <div class="input-box">
                            <input id="Código" type="Código" name="Código" placeholder="Código do Produto" required/>
                        </div>
    
                        
    
                    </div>
    
    
                    <div class="continue-button">
                        <button><a href="#">Cadastrar</a></button>
                    </div>
    
                </form>
            </div>
        </div>
    </main>
    )
}