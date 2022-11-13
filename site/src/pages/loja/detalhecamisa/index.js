import './index.scss'
import Header from '../../../componentes/3.HeaderLanding'
import { useParams } from 'react-router-dom';
import { API_URL } from '../../../api/config';
import { useEffect, useState } from 'react';
import {buscarCamisaPorId } from '../../../api/camisaApi';
import {toast} from 'react-toastify'
import Storage from 'local-storage' 
import Rodape from '../../../componentes/rodape-page'


export default function Index() {


    function adicionarAocarrinho(){
        let carrinho = [];
        if(Storage('carrinho')){
            carrinho = Storage ('carrinho')
        }
        if(!carrinho.find(camisa => camisa.id === id)){
            carrinho.push({
                id: id,
                qtd: 1
            })

            Storage('carrinho', carrinho);

        }
        toast.dark('Camisa Adiconada ao Carrinho ✔️')
    }

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
                        <div className='preco'> R${camisa.valor},00</div>
                        <div className='button'>
                        <button onClick={adicionarAocarrinho}> Adicionar ao Carrinho </button>
                        </div>
                    </div>
                    <div className='desc-camisa'>
                        <h4>Descrição</h4>
                        <p>{camisa.descricao}</p>
                    </div>
                </div>
                <br/>
                <br/>
                <Rodape/>
            </div>

        </main>
    )
}