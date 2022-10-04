import axios from 'axios'
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import './index.scss';
import storage from 'local-storage'

import LoadingBar from 'react-top-loading-bar'
export default function Index(){

    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const [erro,setErro] = useState('');
    const [carregando, setCarregando] = useState(false);

    const navigate = useNavigate();

    const ref = useRef();


    async function entrarClick(){
        ref.current.continuousStart();
        try{

      const r = await axios.post('http://localhost:5000/admin/login', {email: email, senha: senha});
            console.log(r);

            //storage('admin-logado', r)

      setTimeout(() => {
        navigate('/pages/cadastrar')
      },  2000  )


      if(r.status === 401){
        setErro(r.data.erro);
        } 

    }catch(err){
        ref.current.complete(); 
        setCarregando(false);
        if(err.response.status === 401)
        {
            setErro(err.response.data.erro);
        }
    }
        }

        return(
 
            <main className="mae">
                <LoadingBar color='#f11946' ref={ref}/>
               <div className="login">
                   <div className="circulo">
                       <img className="iconUser" src="/images/1.png" alt="iconesUser"/>
                   </div>
           
                   <h1>Logar no sistema</h1>
           
                   <input className="form-email" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                   <br/><br/>
           
                   <input className="form-senha" type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)}/>
                   <br/><br/>
        
                   <button className='btn-cadastro' onClick={entrarClick} disable={carregando}>Entrar</button>
               </div>
           
               <div className='invalido'>
                   {erro}
               </div>
           
           
            </main>
            )
           }
           