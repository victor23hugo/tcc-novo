import './index.scss'
import Storage from 'local-storage'
import { useEffect, useState } from 'react';
import { buscarCamisaPorId } from '../../../api/camisaApi';
import CarrinhoComp from '../../../componentes/carrinhoComp/indesx';
import Header from '../../../componentes/3.HeaderLanding'
import Rodape from '../../../componentes/rodape-page'
import {  Link } from 'react-router-dom';




export default function Index(){

    const [itens, setItens] = useState([]);

    //arrumar
    function calcularValorTotal(){
        let total = 0;
        for (let item of itens ){
           total = total +  item.camisa.valor * item.qtd;
        }
        return total;
    }

    //arrumar
    async function removerItem(id){
        alert('passou aqui tb')
        let carrinho = Storage('carrinho');
        carrinho = carrinho.filter(item => item.id != id);

        Storage('carrinho', carrinho);
        await carregarCarrinho();
    }

    function qtdItens() {
        return itens.length;
    }

       async function 
       carregarCarrinho(){
            let carrinho = Storage('carrinho')
            console.log(carrinho)
            if(carrinho){

                    let arr = [];
                                                                                                        
                for(let camisa of carrinho){
                 let p =   await buscarCamisaPorId(camisa.id);
                                                                                                        
                 arr.push({
                    camisa: p,
                    qtd: camisa.qtd
                 })

                } 
                console.log(arr);
                setItens(arr);
            }
                     
        }


        useEffect(() =>{
            carregarCarrinho(), calcularValorTotal()
        }, [])

    return(
        <div className='pagina-carrinho'>

           <Header/>

            <div className='carrinho'>
                <br/>
                <br/>
                <div className='itens'>


                {itens.map (item =>
                    <CarrinhoComp item={item} removerItem={removerItem} carregarCarrinho={carregarCarrinho}/>
                    )}
                 
                </div>

                
                <div className='resumo'>
                    <h1> Subtotal </h1>
                    <h3> ({qtdItens()} Camisas Adicionadas) </h3>
                    <p> R${calcularValorTotal()},00 </p>
                    <div className='button'>
                    <Link to='/pedido'>
                    <button> Fechar Pedido </button>
                    </Link>
                    </div>
                </div>
                            

            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <Rodape/>
        </div>
    )
}

