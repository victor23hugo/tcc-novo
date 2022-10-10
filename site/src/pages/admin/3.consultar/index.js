import './index.scss'
import Menu from '../../../componentes/2.MenuAdm'
import Header from '../../../componentes/1.HeaderAdm'
import { useEffect, useState } from 'react';
import { buscarCamisa, removerProduto } from '../../../api/camisaApi';
import { toast } from 'react-toastify'
import buscar from '../../../componentes/imgs/icon-buscar.svg'


export default function Index() {

const [produtos, setProdutos] = useState([]);

async function carregarProdutos(){
    const r = await buscarCamisa();
    setProdutos(r) 
}

useEffect(() => {
    carregarProdutos();
} , []);

async function deletarProduto(id){
    try{
        await removerProduto (id);
        toast.dark('Produto removido com sucesso ');
    }   catch (err){
        toast.error(err.response.data.erro)
    }
}





    return(
        <main className='page page-consultar'>              
           
            <Header />
            <div className='container'>    
                <Menu/>
                <div className='listar'>
                    <h1 className='produtos'>Produtos</h1>
                    <div className='caixa-busca'>
                        <input type="text" placeholder='Buscar Camisas' />
                        <img src={buscar} alt='buscar' />
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
                                <td><span  onClick={() => deletarProduto(item.id)}>Remover</span></td>
                            </tr>
                                
                                )}
                            
                        </tbody>
                    </table>
                </div>
            </div>

        </main>
    )
}