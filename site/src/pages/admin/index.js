import './index.scss'
import Menu from '../../componentes/menu'
import Cabecalho from '../../componentes/cabecalho'

export default function Index() {
    return(
        <main className='page page-consultar'>              
           
            <Cabecalho />
            <div className='container'>    
                <Menu/>
            </div>

        </main>
    )
}