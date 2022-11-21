import './index.scss';
import Rodape from '../../../componentes/rodape-page';
import Header from '../../../componentes/3.HeaderLanding';
import { useNavigate } from 'react-router-dom';


export default function CompraFinalizada() {
     const Navigate = useNavigate();
        
    return (
        <main className='page-compra-finalizada'>
            <Header/>
            <div className='compra-finalizada'>
                <div className='conteudo'>  
                    {/* <img src='/images/medalha.png' alt='' width="50px" height="50px"/> */}
                    <div>
                        <div className='conteudo-texto'> 
                            <img src='/images/mapinha.png' alt='' width="300px" height="300px"/>
                            <form>
                                <h2>SUA COMPRA FOI REALIZADA COM SUCESSO</h2>
                                <h2>CHEGARÁ NO ENDEREÇO DE ENTREGA EM ATÉ 7 DIAS </h2>
                            </form>
                        </div>
                        
                        <div className='buttons'>
                            
                            <button onClick={ ()=> Navigate('/catalogo')}>Continuar comprando</button>
                            <button onClick={ ()=> Navigate('/')}>Voltar a loja</button>
                        </div>
                    </div>
                </div>
            </div>
            <Rodape/>
        </main>
    )
}