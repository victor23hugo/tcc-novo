import './index.scss'
import { API_URL } from '../../api/config'
import { useState } from 'react'
import Storage from 'local-storage'




export default function CarrinhoComp(props, carregarCarrinho, removerItem){

    

    //arrumar
    function remover(){
        alert('passou aqui')
        removerItem(props.id)
    }
    
    const [qtdProduto, setTQtdProduto] = useState(props.item.qtd);
    

    function exibir(imagem){
        if(!imagem)
        return `./produto-sem-imagem.webp`
        
        else
        return `${API_URL}/${imagem}`
    }

    function subTotal(){
        const subtotal = qtdProduto * props.item.camisa.valor
        return subtotal
    }

    function alterarQuantidade(novaQtd){
        setTQtdProduto(novaQtd)

        let carrinho = Storage('carrinho');
        let itemStorage =  carrinho.find(item => item.id == info.id)
        itemStorage.qtd = novaQtd;

        Storage('carrinho', carrinho);

        carregarCarrinho()
        console.log(carrinho)
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
                    <select onChange={e => alterarQuantidade(e.target.value)} value={qtdProduto}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className='subtotal'>
                    <div>Subtotal</div>
                    <div>R${subTotal()},00</div>
                </div>
                <div className='excluir' onClick={remover}>
                    excluir
                </div>
            </div>
        </div>
    </div>
    )
}