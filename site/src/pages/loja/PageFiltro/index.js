import './index.scss'
import Header from '../../../componentes/3.HeaderLanding'
import Menu from '../../../componentes/MenuUser'
import Rodape from '../../../componentes/rodape-page'
import CardCamisa from '../../../componentes/CardCamisa'
import { useEffect, useState } from 'react'
import { listarCamisaCatalogo } from '../../../api/camisaApi'
import { filtrarProdutosNike, listarProdutosAdidas, listarProdutosUmbro, listarProdutosPuma, listarTamanhoP, listarTamanhoM, listarTamanhoG, listarTamanhoGG } from '../../../api/filtrosApi'
import Pagination from '../../../componentes/pagination'



export default function Index() {

    
    const [camisas, setCamisas] = useState([]);
    const [filtro, setFiltro] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [camisaPorPage] = useState(5);
    const [texto, setTexto] = useState('')

    

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
                setCamisas(resp)
            } else if(filtro === '3'){
                resp = await listarProdutosAdidas()
                setCamisas(resp)
            }
            else if(filtro === '4'){
                resp = await listarProdutosPuma()
                setCamisas(resp)
            }
            else if(filtro === 'p'){
                resp = await listarTamanhoP()
                setCamisas(resp)
            }
            else if(filtro === 'm'){
                resp = await listarTamanhoM()
                setCamisas(resp)
            }
            else if(filtro === 'g'){
                resp = await listarTamanhoG()
                setCamisas(resp)
            }
            else if(filtro === 'gg'){
                resp = await listarTamanhoGG()
                setCamisas(resp)
            }
        }

        if(filtro){
            filtrar()
        }
    }, [filtro])


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
                        <div className='filtros-camisa'>
                        {currentCamisas.map(item =>
                            <CardCamisa item={item} camisas={currentCamisas}  />)}
                        </div>

                        <div className='paginacao'>
                            <Pagination
                            camisaPorPage={camisaPorPage}
                            totalCamisas={camisas.length}
                            paginate={paginate}/>
                        </div>
                    </div>

                </div>
                <Rodape/>
            </div>
                            


        </main>
            
    )
}