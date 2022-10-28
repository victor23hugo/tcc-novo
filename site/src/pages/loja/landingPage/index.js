import './index.scss'
import Header from '../../../componentes/3.HeaderLanding'
import Cardcaimsa from '../../../componentes/CardCamisa'
import { listarCamisaHome } from '../../../api/camisaApi'
import { useEffect, useState } from 'react'
//import { listarCamisaHome } from '../../../../api/camisaApi'
//import Header from '../../../componentes/3.HeaderLanding'
//import Cardcaimsa from '../../../componentes/CardCamisa'

export default function Index() {
        const [camisas, setCamisas] = useState([]);

   async function listar(){
            const r = await listarCamisaHome();
            setCamisas(r)
    }




    useEffect(() =>{
        listar();
    }, [])






    return(


        <main className="landing-page">
            <div className='header-landing-page'>
              <Header/>

                <div className='faixa-1'>
                        <img className="camisas" src="/images/11.png" alt="r"/>
                </div>

                <div className='mini-faixa'>
                    <div className='nike-faixa'>
                        <img className="Nike" src="/images/nike.png" alt="r"/>
                    </div>
                    <div className='adidas-faixa'>
                        <img className="Adidas" src="/images/adidas.png" alt="r"/>
                    </div>
                    <div className='puma-faixa'>
                        <img className="Puma" src="/images/puma.png" alt="r"/>
                    </div>
                    <div className='umbro-faixa'>
                        <img className="Umbro" src="/images/umbro.png" alt="r"/>
                    </div>
                </div>

                <div className='faixa-2'>
                    <br/>
                    <br/>
                    <div className='cards'>
                        {camisas.map(item =>
                         <Cardcaimsa item={item}/> 

                            )}
                     
                       
                    </div>
                </div>

                <div className='faixa-3'>
        
                </div>

                <div className='mini-faixa2'>
                    <div className='collum'>
                        <div className='circulo'>
                            <img className="caixa" src="/images/caixa.png" alt="r"/>
                        </div>
                        <div className='texto'> 
                            <h1>Frete Grátis</h1>
                            <p>para todo o Brasil</p>
                        </div>
                    </div>
                    <div className='collum'>
                        <div className='circulo'>
                            <img className="seta" src="/images/seta.png" alt="r"/>
                        </div>
                        <div className='texto'> 
                            <h1>30 Dias</h1>
                            <p>para troca</p>
                        </div>
                    </div>
                    <div className='collum'>
                        <div className='circulo'>
                            <img className="cartao" src="/images/cartao.png" alt="r"/>
                        </div>
                        <div className='texto'> 
                            <h1>10x Sem Juros </h1>
                            <p>No cartão de crédito</p>
                        </div>
                    </div>
                    <div className='collum'>
                        <div className='circulo'>
                        <img className="medalha" src="/images/medalha.png" alt="r"/>
                        </div>
                        <div className='texto'> 
                            <h1>Produtos </h1>
                            <p>Paraguai</p>
                        </div>
                    </div>
                </div>

                <div className='faixa-4'>
                    
                </div>

                <div className='faixa-5'>
                    
                </div>

                <div className='mini-faixa3'>
                        
                </div>

                <div className='fale-conosco'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div  className='rodape'>
                    
                </div>
            </div>
        </main>
    )
}