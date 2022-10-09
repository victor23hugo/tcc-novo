import './index.scss'
import Menu from '../../../componentes/2.MenuAdm'
import Header from '../../../componentes/1.HeaderAdm'
import { useEffect, useState } from 'react';
import { buscarCamisa } from '../../../api/camisaApi';
export default function Index() {

const [produtos, setProdutos] = useState([]);

async function carregarProdutos(){
    const r = await buscarCamisa();
    setProdutos(r) 
}

useEffect(() => {
    carregarProdutos();
} , []);





    return(
        <main className='page page-consultar'>              
           
            <Header />
            <div className='container'>    
                <Menu/>
                <div className='listar'>
                    <h1 className='produtos'>Produtos</h1>
                    
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NOME</th>
                                <th>MARCA</th>
                                <th>TAMANHO</th>
                                <th>PREÇO</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {produtos.map(item =>
                                
                                <tr>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.marca}</td>
                                <td>{item.tamanho}</td>
                                <td>{item.valor}</td>
                                <td><span>Editar</span></td>
                                <td><span>Remover</span></td>
                            </tr>
                                
                                )}
                            
                        </tbody>
                    </table>
                </div>
            </div>

        </main>
    )
}