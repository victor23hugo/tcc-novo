import './index.scss'
import Menu from '../../componentes/menu'
import Cabecalho from '../../componentes/cabecalho'

export default function Index() {
    return(
        <main className='page page-home'>
            <Menu/>
            <div className='container'>    
                <Cabecalho />
            </div>

        </main>
    )
}