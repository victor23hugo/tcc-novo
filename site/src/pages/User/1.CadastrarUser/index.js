import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from "react"
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { cadastarPerfil } from "../../../api/loginCliente"




export default function Login(){

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('') ;
    const [telefone, setTelefone] = useState('');
    //const [nascimento, setNascimento] = useState();
    const [email, setEmail] = useState('') ;
    const [senha, setSenha] = useState(''); 


    const {id} = useParams();

    async function salvarUsuario(){
        try{
            if(!id){
                const r = await cadastarPerfil(nome, cpf, nascimento, telefone);
                await cadastarLogin(email, senha, r.id);

                toast.dark('Você está cadastrado!');
            }
        }  catch (err) {
            toast.error(err.response.data.erro);
        }
    }

    return(
        <main className='page-cadastrar'>

            <div className='principal-container'>
                    <h1 className='h1-1'>CADASTRE-SE</h1>
                <div className='reunir-containers'>
                    <div className='container-1'>
                        <input placeholder="Nome"  value={nome} onChange={e => setNome(e.target.value)}/>
                        <input placeholder="Telefone" value={telefone} onChange={e => setTelefone(e.target.value)}/>
                        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className='container-2'>
                        <input placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)}/>
                       
                        <input placeholder="CPF" value={cpf} onChange={e => setCpf(e.target.value)}/>
                    </div>
                </div>
                <button className='botão-proseguir' onClick={salvarUsuario}>Seguir</button>
                <Link className='voltar' to='/Login'>
                    <div>Voltar</div>
                </Link>
            </div>
        </main>
    )
}