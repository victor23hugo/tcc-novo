import './index.scss'
import { API_URL } from '../../api/config'
import { useState } from 'react'



export default function CarrinhoComp(props){

    //const [subtotal, setSubtotal] = useState(0);

    function exibir(imagem){
        if(!imagem)
        return `./produto-sem-imagem.webp`
        
        else
        return `${API_URL}/${imagem}`
    }


    return(
        <div className='comp-carrinho-item'>
        <div className='produto-container'>
            <div className='produto-box'>
                <div className='imagens'>
                    <div className='atual'>
                    <img src={exibir(props.item.camisa.imagem)} />
                    </div>
                </div>
                <div className='detalhes'>
                    <div className='nome'> {props.item.camisa.nome} </div>
                    <br/>
                    <div className='departamento'> {props.item.camisa.marca} </div>

                    <div className='preco-label'> Preço </div>
                    <div className='preco'> R${props.item.camisa.valor},00</div>
                </div>
            </div>
            <div className='qtd-box'>
                <div className='qtd'>
                    <label>Qtd.</label>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className='subtotal'>
                    <div>Subtotal</div>
                    <div></div>
                </div>
                <div className='excluir'>
                    excluir
                </div>
            </div>
        </div>
    </div>
    )
}