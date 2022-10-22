import './index.scss'
import Header from '../../../../componentes/3.HeaderLanding'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { buscarCamisa } from '../../../../api/camisaApi';



export default function Index(){

    const [camisa, setCamisa] = useState({})



    const {id} = useParams();

    async function carregarPagina(){
       const r = await  buscarCamisa(id);
        console.log(r)
    }

    useEffect(() => {
        carregarPagina();
    }, [])



    return(
        <main>
            <div>
         <Header/>
                </div >
                <div className='pagina-detalhe-produto'>
            <div className='produto'>

                <div className='imagens'>
                    <div className='opcoes'>
                    
                    </div>
                    <div className='atual'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhsrEc-Ujxdi9hqK201FH9tmvDb8PAry6ycw&usqp=CAU'/>
                    </div>
                </div>
                <div className='detalhes'>
                    <div className='nome'> Camisa Santos 2022 </div>
                    <div className='departamento'> 
                    <p>Tamanho: G</p>                    
                     </div>
                    
                    <div className='preco-label'> Valor </div>
                    <div className='preco'> R$ 600kwanzas </div>
                    
                    <button> Adicionar ao Carrinho </button>
                </div>
                <div className='desc-camisa'>
                <p>Camisa muito bem desenvolvida pela marca <br/>ele acertaram em cheio nessa parte</p>
                </div>
            </div>
        </div>
        
        </main>
    )
}