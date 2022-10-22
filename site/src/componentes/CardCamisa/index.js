import { API_URL } from '../../api/config';
import './index.scss'




export default function Index(props){

    function exibir(imagem){
        if(!imagem)
        return ``;
        
        else
        return `${API_URL}/${imagem}`
    }

    return(
        <main>
                <div className='card-camisa'>
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