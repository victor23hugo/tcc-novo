import './index.scss'
import Header from '../../../../componentes/3.HeaderLanding'
import { useParams } from 'react-router-dom';
import { API_URL } from '../../../../api/config';
import { useEffect, useState } from 'react';
import { buscarCamisa, buscarCamisaPorId } from '../../../../api/camisaApi';



export default function Index() {

    const [camisa, setCamisa] = useState([])


    function exibir(imagem){
        if(!imagem)
        return `./produto-sem-imagem.webp`
        
        else
        return `${API_URL}/${imagem}`
    }


    const { id } = useParams();

    async function carregarPagina() {
        const r = await buscarCamisaPorId(id);

        setCamisa(r);
    }

    console.log(camisa)
    useEffect(() => {
        carregarPagina();
    }, [])



    return (
        <main>
            <div>
                <Header />
            </div >
            <div className='pagina-detalhe-produto'>
                <div className='produto'>

                    <div className='imagens'>
                        <div className='opcoes'>

                        </div>
                        <div className='atual'>
                            <img src={exibir(camisa.imagem)} />
                        </div>
                    </div>
                    <div className='detalhes'>
                        <div className='nome'> {camisa.nome}</div>
                        <div className='departamento'>
                            <p>Tamanho: {camisa.tamanho}</p>
                        </div>

                        <div className='preco-label'> Valor </div>
                        <div className='preco'> {camisa.valor}</div>

                        <button> Adicionar ao Carrinho </button>
                    </div>
                    <div className='desc-camisa'>
                        <p> descriçao da camisa:</p>
                        <p>{camisa.descricao}</p>
                    </div>
                </div>
            </div>

        </main>
    )
}