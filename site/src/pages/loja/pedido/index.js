import './index.scss'
import { useEffect, useState } from 'react'

import Header from '../../../componentes/3.HeaderLanding'
import CardEndereco from '../../../componentes/cardEndereco'
import { listar } from '../../../api/enderecoAPI'
import Storage from 'local-storage'
import ModalEndereco from '../../../componentes/modalEndereco'



export default function Pedido(){

    const [enderecos, setEnderecos] = useState([]);
    const [exibirEndereco, setExibirEndereco] = useState(false);

    function exibirNovoEndereco(){
            setExibirEndereco(true);
    }

    function fecharNovoEndereco(){
        setExibirEndereco(false)
        carregarEnderecos()
    }


    async function carregarEnderecos(){
        const id = Storage('cliente-logado').id;
        const r = await listar(id);
        console.log(r)
        
        setEnderecos(r)
    }

    useEffect(() =>{
        carregarEnderecos()
    }, [])
    
    return(
        <div>
            <Header/>
       
            <div className='container-1'>
            <ModalEndereco exibir={exibirEndereco} fechar={fecharNovoEndereco}/>
             <div className='total'>   
            <h1>Total:</h1>
            <h4>R$300,00</h4>
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
                    </div>

                   
            </div>
            <div className='itens'>
                    <h1>Itens</h1>
                    <hr/>
                   
                    </div>
            </div>
           

        </div>
    )
}