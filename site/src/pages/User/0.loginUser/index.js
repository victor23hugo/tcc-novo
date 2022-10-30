import './index.scss'
import ImagemGif from './soccer.svg'

import { useState } from 'react'
import { logar } from '../../../api/loginCliente'
import { toast } from 'react-toastify';
import localStorage from 'local-storage';
//import { useNavigate } from 'react-router-dom';

export default function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    async function logarCliente(){
        try{
            const r = await logar(email, senha);
            localStorage('cliente-logado', r);
            toast.dark('Usuário logado');
        }
        catch(err) {
            toast.error(err.message);
        }
    }


    return(
        <main>
            <div className='main-login'>
                <div className='left-login'>
                    <h1>Faça Login</h1>
                    <h1>E entre para o nosso time</h1>
                    <img className='left-login-image' src={ImagemGif} alt='soccer'/>
                </div>
                <div className='right-login'>
                    <div className='card-login'>
                        <h1>LOGIN</h1>
                        <div className='textfield'>
                            <label for='usuario'>Usuário</label>
                            <input type='text' name='usuario' placeholder='Usuário' value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className='textfield'>
                            <label for='senha'>senha</label>
                            <input type='password' name='senha' placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)} />
                        </div>
                        <button onClick={logarCliente} className='btn-login'>Login</button>
                    </div>
                </div>
            </div>


        </main>
        
            


        
    )
}