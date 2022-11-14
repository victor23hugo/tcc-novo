import './index.scss'
import Header from '../../../componentes/3.HeaderLanding'
import Menu from '../../../componentes/MenuUser'
import Rodape from '../../../componentes/rodape-page'
import CardCamisa from '../../../componentes/CardCamisa'
import { useEffect, useState } from 'react'
import { listarCamisaCatalogo } from '../../../api/camisaApi'



export default function Index() {

    
    const [camisas, setCamisas] = useState([]);
    const [filtro, setFiltro] = useState();

    async function listar() {
        const r = await listarCamisaCatalogo();
        setCamisas(r)
    }

    

    useEffect(() => {
        listar();
    }, [])



    return (
        <main className='filtros-user'>
            <div className='header-filtro'>

                <Header />
                <div className='Filtros-Camisas'>
                    <div className='menu-filtro'>
                        <Menu filtro={e => setFiltro(e.target.value)} />
                    </div>
                    <div className='camisas-filtradas'>
                        {camisas.map(item =>
                            <CardCamisa item={item} />)}
                    </div>

                </div>
                <br/>
                <div>
                                  
                </div>
            </div>
                            


        </main>
            
    )
}