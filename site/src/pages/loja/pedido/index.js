import './index.scss'
import { useEffect, useState } from 'react'

import Header from '../../../componentes/3.HeaderLanding'
import CardEndereco from '../../../componentes/cardEndereco'
import { listar } from '../../../api/enderecoAPI'
import Storage from 'local-storage'
import ModalEndereco from '../../../componentes/modalEndereco'
import { buscarCamisaPorId } from '../../../api/camisaApi'
import { API_URL } from '../../../api/config' 



export default function Pedido(){

    const [enderecos, setEnderecos] = useState([]);
    const [exibirEndereco, setExibirEndereco] = useState(false);
    const [itens, setItens] = useState([])

    function exibirNovoEndereco(){
            setExibirEndereco(true);
    }

    function fecharNovoEndereco(){
        setExibirEndereco(false)
        carregarEnderecos()
    }

    function calcularValorTotal(){
        let total = 0;
        for (let item of itens ){
           total = total +  item.camisa.valor * item.qtd;
        }
        return total;
    }

    async function carregarItens(){
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
            setItens(arr);
        }
                 
    }
    function exibir(imagem){
        if(!imagem)
        return `./produto-sem-imagem.webp`
        
        else
        return `${API_URL}/${imagem}`
    }


    async function carregarEnderecos(){
        const id = Storage('cliente-logado').id;
        const r = await listar(id);
        console.log(r)
        
        setEnderecos(r)
    }

    useEffect(() =>{
        carregarEnderecos(), carregarItens()
    }, [])
    
    return(
        <div>
            <Header/>
       
            <div className='container-1'>
            <ModalEndereco exibir={exibirEndereco} fechar={fecharNovoEndereco}/>
             <div className='total'>   
            <h1>Total:</h1>
            <h4>R${calcularValorTotal()},00</h4>
            <button>Finalizar Pedido</button>
            </div>
                <br/>
            <h1>Selecione o Endereço de Entrega</h1>     
                 <br/>      
                    <hr/>
                <br/>
                {enderecos.map(item =>
                    <CardEndereco item={item}/>
                )}
                <br/>
                <button onClick={exibirNovoEndereco}>Adicionar Novo Endereço</button>
                <br/>
                <br/>
                <br/>
            <div className='info-pagamento'>
                 <h1>Informações de Pagamento</h1>     
                 <br/>      
                    <hr/>
                    <br/>
                    <div className='inputs'>
                    <div className="input-box">
                                <input id="Descrição" type="Descrição" name="Descrição" placeholder="Nome Do Tirular "/>
                    </div>
                    <br/>
                    <div className="input-box">
                                <input id="Descrição" type="Descrição" name="Descrição" placeholder="CVV"/>
                    </div>
                    <br/>
                    <div className="input-box">
                                <input id="Descrição" type="Descrição" name="Validade" placeholder="Validade"/>
                    </div>
                    <br/>
                    <div className="input-box">
                                <input id="Descrição" type="Descrição" name="Validade" placeholder="Numero Do Cartão"/>
                    </div>
                    <br/>
                    <select>
                    <option>Débito</option>
                        <option>Credito</option>
                    </select>
                    </div>

                   
            </div>
            <div className='itens'>
                    <h1>Itens</h1>
                    
                    <table>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Quantidade</th>
                                <th>Preço Unitário</th>
                                <th>Total</th>
                            </tr>
                        </thead>

                        <tbody>
                            {itens.map(item =>
                                
                            <tr>
                                <td>
                                    <div className='celula-item'>
                                    <img src={exibir(item.camisa.imagem)} />
                                    <div>
                                        <h3>{item.camisa.nome}</h3>
                                        <h4>{item.camisa.marca}</h4>
                                    </div>
                                    </div>
                                </td>
                                <td>
                                    Quantidade
                                </td>
                                <td>
                                   R${item.camisa.valor},00
                                </td>
                                <td>
                                R${calcularValorTotal()},00
                                </td>
                            </tr>
                            )}


                        </tbody>
                    </table>


                   
                    </div>
            </div>
           

        </div>
    )
}