import './index.scss'
import Storage from 'local-storage'
import { useState } from 'react';
import { buscarCamisaPorId } from '../../../../api/camisaApi';




export default function Index(){

        const [itens, setItens ] = useState([])

   async function carregarCarrinho(){
        let carrinho = Storage('carrinho');
        
        if(carrinho){


            let temp = [];

         for(let camisa of carrinho ){
          let p =   await buscarCamisaPorId(camisa.id)


           temp.push({
            camisa: p,
            qtd:    camisa.qtd
           })     
         }
        }
        console.log(temp);
        setItens(temp);
    }


    return(
        <div className='pagina-carrinho'>

            <h1> Carrinho </h1>

            <div className='carrinho'>

                <div className='itens'>
                        <h1>Itens Aqui</h1>
                 
                </div>

                
                <div className='resumo'>
                    <h1> Subtotal </h1>
                    <h3> Quantidade de itens </h3>
                    <p> Valor </p>
                    <button> Fechar Pedido </button>
                </div>


            </div>

        </div>
    )
}

