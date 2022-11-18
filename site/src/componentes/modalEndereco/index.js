import { useState } from 'react'
import './index.scss'
import { salvar } from '../../api/enderecoAPI';
import Storage from 'local-storage'
import {toast} from 'react-toastify'


export default function ModalEndereco({exibir, fechar}){

    const [referencia, setReferencia] = useState('');
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

    async function salvarClick(){
        try{
        const id = Storage('cliente-logado').id
        const r = await salvar(id, cep, referencia, logradouro, bairro, cidade, estado, numero, complemento);
        toast.dark('endereco cadastardo✔️')
        fechar();
        } 
        catch(err){
                toast.error(err.respose.data.erro)
                }

                
}



    return(
        <div className='comp-modal-endereco'>
            <div className={`modal-endereco ${exibir ? 'exibir' : ''}`}>
                <div className='conteudo'>
                <div className='fechar'>
                    <span onClick={fechar}>X</span>
                    </div>
                    <h1> Informaçoes De Entrega </h1>
                    
                    
                    <div className='form'>
                        <div>
                            
                            <label> Referência: </label>
                            <input type='text' value={referencia} onChange={e => setReferencia(e.target.value)}/>
                        </div>
                        <div>
                            <label> &nbsp; </label>
                        </div>
                        <div>
                            <label> CEP: </label>
                            <input type='text' value={cep} onChange={e => setCep(e.target.value)}/>
                        </div>
                        <div>
                            <label> Rua: </label>
                            <input type='text' value={logradouro} onChange={e => setLogradouro(e.target.value)}/>
                        </div>
                        <div>
                            <label> Número: </label>
                            <input type='text' value={numero} onChange={e => setNumero(e.target.value)}/>
                        </div>
                        <div>
                            <label> Complemento: </label>
                            <input type='text' value={complemento} onChange={e => setComplemento(e.target.value)}/>
                        </div>
                        <div>
                            <label> &nbsp; </label>
                        </div>
                        <div>
                            <label> Bairro: </label>
                            <input type='text' value={bairro} onChange={e => setBairro(e.target.value)}/>
                        </div>
                        <div>
                            <label> Cidade: </label>
                            <input type='text' value={cidade} onChange={e => setCidade(e.target.value)}/>
                        </div>
                        <div>
                            <label> Estado: </label>
                            <input type='text' value={estado} onChange={e => setEstado(e.target.value)}/>
                        </div>
                        <div>
                            <label></label>
                            <br/>
                            <div className='btn'>
                                <button onClick={salvarClick} > Salvar </button>
                                <div className='localizacao'>
                                <img src='/images/local.png' alt='localizacao' width='150px' height='150px'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
    
}