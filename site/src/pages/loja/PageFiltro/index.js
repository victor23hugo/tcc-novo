import './index.scss'
import Header from '../../../componentes/3.HeaderLanding'
import Menu from '../../../componentes/MenuUser'
import Rodape from '../../../componentes/rodape-page'
import CardCamisa from '../../../componentes/CardCamisa'
import { useEffect, useState } from 'react'
import { listarCamisaCatalogo } from '../../../api/camisaApi'
import { filtrarProdutosNike, listarProdutosUmbro } from '../../../api/filtrosApi'
import Pagination from '../../../componentes/pagination'



export default function Index() {

    
    const [camisas, setCamisas] = useState([]);
    const [filtro, setFiltro] = useState();
    const [currentPage, setCurrentPage] = useState(0)
    const [camisaPorPage] = useState(5);

    async function listar() {
        const r = await listarCamisaCatalogo();
        setCamisas(r)
    }

    console.log(filtro)

    useEffect(() => {
        listar();
    }, [])


    


    useEffect(() =>{
        async function filtrar(){
            let resp = []
            if(filtro === '1'){
                resp = await filtrarProdutosNike()
                setCamisas(resp)
            }   else if(filtro === '2'){
                resp = await listarProdutosUmbro()
            }
        }
    }, [camisas])


    const indexOfLastPost = currentPage * camisaPorPage;
    const indexOfFirstPost = indexOfLastPost - camisaPorPage;
    const currentCamisas = camisas.slice(indexOfFirstPost, indexOfLastPost)


    const paginate = pageNumber => setCurrentPage(pageNumber)


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
                            <CardCamisa item={item} camisas={currentCamisas}  />)}
                    </div>

                </div>
                <br/>
                <div>
                <Pagination
                        camisaPorPage={camisaPorPage}
                        totalCamisas={camisas.length}
                        paginate={paginate}
                    />
                </div>
            </div>
                            


        </main>
            
    )
}