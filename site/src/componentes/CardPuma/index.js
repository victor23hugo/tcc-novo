import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../api/config';
import './index.scss'
//import Semimg from '../imgs/produto-sem-imagem.pngproduto-sem-imagem.png'




export default function Index(props){

    const nav  = useNavigate();

    function exibir(imagem){
        if(!imagem)
        return `./produto-sem-imagem.webp`
        
        else
        return `${API_URL}/${imagem}`
    }

    function abrirDetalhes(id){
        nav ('/camisa/' + id + '/detalhe')
    }

    return(
        <main className='todos'>
                <div className='card-camisa' onClick={() => abrirDetalhes(props.item.id)}>
                    <img src ={exibir (props.item.imagem)} alt='camisa santos'/>
                    <div>
                        <div>{props.item.marca} </div>
                        <div>{props.item.nome}</div>
                        <div>R${props.item.valor},00</div>
                            <div className='button-class'>
                        </div>
                    </div>
                </div>
        </main>
    )

}