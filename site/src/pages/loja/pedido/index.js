import './index.scss'
import { useEffect, useState } from 'react'

import Header from '../../../componentes/3.HeaderLanding'
import CardEndereco from '../../../componentes/cardEndereco'
import { listar } from '../../../api/enderecoAPI'
import Storage from 'local-storage'
import ModalEndereco from '../../../componentes/modalEndereco'
import { buscarCamisaPorId } from '../../../api/camisaApi'
import { API_URL } from '../../../api/config'
import { salvarNovoPedido } from '../../../api/pedidoApi'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'



export default function Pedido() {

    const [enderecos, setEnderecos] = useState([]);
    const [exibirEndereco, setExibirEndereco] = useState(false);
    const [itens, setItens] = useState([]);
    const [ idEndereco, setIdEndereco] = useState()


    const [frete, setFrete] = useState('');
    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [vencimento, setVencimento] = useState('');
    const [cvv, setCvv] = useState('');
    const [tipo, setTipo] = useState('');
    const [parcela, setParcela] = useState('');

    const navigate = useNavigate();


    function exibirNovoEndereco() {
        setExibirEndereco(true);
    }

    function fecharNovoEndereco() {
        setExibirEndereco(false)
        carregarEnderecos()
    }

    function calcularValorTotal() {
        let total = 0;
        for (let item of itens) {
            total = total + item.camisa.valor * item.qtd;
        }
        return total;
    }

    async function carregarItens() {
        let carrinho = Storage('carrinho')
        console.log(carrinho)
        if (carrinho) {

            let arr = [];

            for (let camisa of carrinho) {
                let p = await buscarCamisaPorId(camisa.id);

                arr.push({
                    camisa: p,
                    qtd: camisa.qtd
                })

            }
            setItens(arr);
        }
    }
        async function salvarPedido() {

            
                let produtos = Storage('carrinho');
                let id = Storage('cliente-logado').id

                let pedido = 
                {
                    frete: frete,
                    idEndereco: idEndereco,
                    tipoPagamento: 'Cartão',
                    cartao: {
                        nome: nome,
                        numero: numero,
                        vencimento: vencimento,
                        codSeguranca: cvv,
                        formaPagamento: tipo,
                        parcelas: parcela
                    },
                    produtos: produtos
                }
                const r = await salvarNovoPedido(id, pedido)
                toast.dark('Pedido inserido com sucesso ')
                Storage('carrinho', [])
                navigate('/')

        }

    
    function exibir(imagem) {
        if (!imagem)
            return `./produto-sem-imagem.webp`

        else
            return `${API_URL}/${imagem}`
    }


    async function carregarEnderecos() {
        const id = Storage('cliente-logado').id;
        const r = await listar(id);
        console.log(r)

        setEnderecos(r)
    }

    useEffect(() => {
        carregarEnderecos(), carregarItens()
    }, [])

    return (
        <div>
            <Header />

            <div className='container-1'>
                <ModalEndereco exibir={exibirEndereco} fechar={fecharNovoEndereco} />
                <div className='total'>
                    <h1>Total:</h1>
                    <h4>R${calcularValorTotal()},00</h4>
                    <button onClick={salvarPedido}>Finalizar Pedido</button>
                </div>
                <br />
                <h1>Selecione o Endereço de Entrega</h1>
                <br />
                <hr />
                <br />
                {enderecos.map(item =>
                    <CardEndereco item={item} selecionar={setIdEndereco} selecionado={item.id == idEndereco}/>
                )}
                <br />
                <button onClick={exibirNovoEndereco}>Adicionar Novo Endereço</button>
                <br />
                <br />
                <br />
                <div className='info-pagamento'>
                    <h1>Informações de Pagamento</h1>
                    <br />
                    <hr />
                    <br />
                    <div className='inputs'>
                        <div className="input-box">
                            <input id="Descrição" placeholder="Nome Do Tirular " value={nome} onChange={e => setNome(e.target.value)} />
                        </div>
                        <br />
                        <div className="input-box">
                            <input id="Descrição" placeholder="CVV" value={cvv} onChange={e => setCvv(e.target.value)} />
                        </div>
                        <br />
                        <div className="input-box">
                            <input id="Descrição" placeholder="Validade" value={vencimento} onChange={e => setVencimento(e.target.value)} />
                        </div>
                        <br />
                        <div className="input-box">
                            <input id="Descrição" placeholder="Numero Do Cartão" value={numero} onChange={e => setNumero(e.target.value)} />
                        </div>

                        <br />
                        <label>Selecione a forma de pagamento</label>
                        <select value={tipo} onChange={e => setTipo(e.target.value)}>
                            <option>Selecione</option>
                            <option>Débito</option>
                            <option>Credito</option>
                        </select>

                        <label>Selecione o Numero de Parcelas</label>
                        <select value={parcela} onChange={e => setParcela(e.target.value)}>
                            <option>Selecione</option>
                            <option value="1">1X A Vista</option>
                            <option value="1">1X Sem Juros</option>
                            <option value="2">2X Sem Juros</option>
                            <option value="3">3X Sem Juroa</option>
                        </select>
                        <label>Selecione a Forma de Entrega</label>
                        <select value={frete} onChange={e => setFrete(e.target.value)}>
                            <option>Selecione</option>
                            <option value="motoboy">Via motoboy(Até 3 dias uteis)R$20,00</option>
                            <option value="sedex">Via sedex(Até 10 dias uteis) R$10,00</option>
                        </select>

                    </div>


                </div>
                <div className='itens'>
                    <h1>Itens</h1>

                    <table>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Quantidade</th>
                                <th>Preço Unitário</th>
                                <th>Total</th>
                            </tr>
                        </thead>

                        <tbody>
                            {itens.map(item =>

                                <tr>
                                    <td>
                                        <div className='celula-item'>
                                            <img src={exibir(item.camisa.imagem)} />
                                            <div>
                                                <h3>{item.camisa.nome}</h3>
                                                <h4>{item.camisa.marca}</h4>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Quantidade
                                    </td>
                                    <td>
                                        R${item.camisa.valor},00
                                    </td>
                                    <td>
                                        R${calcularValorTotal()},00
                                    </td>
                                </tr>
                            )}


                        </tbody>
                    </table>



                </div>
            </div>


        </div>
    )
}