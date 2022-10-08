import './index.scss'
import Menu from '../../../componentes/2.MenuAdm'
import Header from '../../../componentes/1.HeaderAdm'

export default function Index() {
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
                            <tr>
                                <td>01</td>
                                <td>São Paulo</td>
                                <td>ADIDAS</td>
                                <td>G</td>
                                <td>200</td>
                                <td><span>Editar</span></td>
                                <td><span>Remover</span></td>
                            </tr>
                            <tr>
                                <td>02</td>
                                <td>Santos</td>
                                <td>UMBRO</td>
                                <td>G</td>
                                <td>300</td>
                                <td><span>Editar</span></td>
                                <td><span>Remover</span></td>
                            </tr>
                            <tr>
                                <td>03</td>
                                <td>Plameiras</td>
                                <td>PUMA</td>
                                <td>P</td>
                                <td>199</td>
                                <td><span>Editar</span></td>
                                <td><span>Remover</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </main>
    )
}