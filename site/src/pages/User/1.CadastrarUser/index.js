import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from "react"
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { cadastrarPerfil, cadastrarLogin } from "../../../api/loginCliente"
import Header from '../../../componentes/3.HeaderLanding'





export default function Login(){

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('') ;
    const [telefone, setTelefone] = useState('');
    const [nascimento, setNascimento] = useState();
    const [email, setEmail] = useState('') ;
    const [senha, setSenha] = useState(''); 


    const {id} = useParams();

    async function salvarUsuario(){
        try{
        
                const r = await cadastrarPerfil(nome, nascimento, cpf, telefone);
                await cadastrarLogin(email, senha, r.id);

                toast.dark('Você está cadastrado!');
                
          
        }  catch (err) {
            toast.error(err.response.data.erro);
        }
    }

    return(
        
        <main className='page-cadastrar'>
                <Header/>
           <br/>
           <br/>
            <div className='unir'>
                
            <br/>
                <div className='card'>
                    <br/>
                    <h1 className='h1-1'>CADASTRE-SE</h1>
                <div className='reunir-containers'>
                    <div className='container-2'>
                        <input placeholder="Nome"  value={nome} onChange={e => setNome(e.target.value)}/>
                        <input placeholder="Telefone" value={telefone} onChange={e => setTelefone(e.target.value)}/>
                        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className='container-2'>
                        <input placeholder="Senha" type="password" value={senha} onChange={e => setSenha(e.target.value)}/>
                       
                        <input placeholder="CPF" value={cpf} onChange={e => setCpf(e.target.value)}/>
                        <input placeholder="Nascimento" type="date" value={nascimento} onChange={e => setNascimento(e.target.value)}/>
                    </div>
                    
                </div>
                <br/>

                <div className='button'>
                <button className='botão-proseguir' onClick={salvarUsuario}><a>Concluir Cadastro</a></button>
                <br/>
                <Link className='voltar' to='/Login'>
                    <div>Voltar</div>
                </Link>
                </div>
                
                </div>

                </div>
        
        </main>
    )
}