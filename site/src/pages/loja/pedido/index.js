import './index.scss'
import { useEffect, useState } from 'react'

import Header from '../../../componentes/3.HeaderLanding'
import CardEndereco from '../../../componentes/cardEndereco'
import { listar } from '../../../api/enderecoAPI'
import Storage from 'local-storage'



export default function Pedido(){

    const [enderecos, setEnderecos] = useState([]);


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
                {enderecos.map(item =>
                    <CardEndereco item={item}/>
                )}
                    
                
            </div>
        </div>
    )
}