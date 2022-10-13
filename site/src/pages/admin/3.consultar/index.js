import './index.scss'
import Menu from '../../../componentes/2.MenuAdm'
import Header from '../../../componentes/1.HeaderAdm'
import { useEffect, useState } from 'react';
import { buscarCamisa, buscarCamisaPorNome } from '../../../api/camisaApi';
import { toast } from 'react-toastify'
import buscar from '../../../componentes/imgs/icon-buscar.svg'


export default function Index() {

const [filtro, setFiltro] = useState('');
const [produtos, setProdutos] = useState([]);

async function carregarProdutos(){
    const r = await buscarCamisa();
    setProdutos(r) 
}

useEffect(() => {
    carregarProdutos();
} , []);

async function filtrar(){
    const resp = await buscarCamisaPorNome(filtro);
    setProdutos(resp)
}





    return(
        <main className='page page-consultar'>              
           
            <Header />
            <div className='container'>    
                <Menu/>
                <div className='listar'>
                    <h1 className='produtos'>Produtos</h1>
                    <div className='caixa-busca'>
                        <input type="text" placeholder='Buscar Camisas' value={filtro} onChange={e => setFiltro(e.target.value)}/>
                        <img src={buscar} alt='buscar' onClick={filtrar} />
                    </div>
                    <br/>
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