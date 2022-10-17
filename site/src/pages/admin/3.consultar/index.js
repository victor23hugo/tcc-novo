import './index.scss'
import Menu from '../../../componentes/2.MenuAdm'
import Header from '../../../componentes/1.HeaderAdm'
import { useEffect, useState } from 'react';
import { buscarCamisa, buscarCamisaPorNome, deletarcamisa } from '../../../api/camisaApi';
import { toast } from 'react-toastify'
import buscar from '../../../componentes/imgs/icon-buscar.svg'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';   


export default function Index() {

const [filtro, setFiltro] = useState('');
const [produtos, setProdutos] = useState([]);


async function removerCamisa(id, nome){

    confirmAlert({
        title: 'Remover Camisa',
        message: `Tem certeza que deseja remover ${nome}?`,
        buttons: [
            {
                label: 'Confirmar',
                onClick: async () => {
                    const resposta = await deletarcamisa(id, nome);

                    if(filtro === '')
                        carregarProdutos();
                    else
                        filtrar();
                
                    alert('Camisa Removida');
                }
            },
            {
                label: 'Voltar'
            }
        ]

    })



    
}

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
                        <img className="iconUser" src="/images/lupa.png" alt="iconesUser"/>
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
                            </tr>
                        </thead>
                        <tbody>
                            {produtos.map(item =>
                                
                                <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.marca}</td>
                                <td>{item.tamanho}</td>
                                <td>{item.valor}</td>
                                <td><span>Editar</span></td>
                                <td><span onClick={() => removerCamisa(item.id, item.nome)}>Remover</span></td>
                            </tr>
                                
                                )}
                            
                        </tbody>
                    </table>
                </div>
            </div>

        </main>
    )
}