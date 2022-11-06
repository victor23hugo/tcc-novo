import './index.scss'
import Header from '../../../componentes/3.HeaderLanding'
import Menu from '../../../componentes/MenuUser'
import Rodape from '../../../componentes/rodape-page'

export default function Index(){


    return(
        <main className='filtros-user'>
            <div className='header-filtro'>
                <Header/>
            <div className='Filtros-Camisas'>
                <div className='menu-filtro'>
                    <Menu/>
                </div>
                <div className='camisas-filtradas'>
                    Onde ficara as camisas
                </div>
            </div>
            
            </div>
            <Rodape/>
         
        </main>
    )
}