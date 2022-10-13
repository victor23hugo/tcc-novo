import { Link } from 'react-router-dom'
import './index.scss'


export default function Login(){
    return(
        <main className='page-cadastrar'>

            <div className='principal-container'>
                    <h1 className='h1-1'>CADASTRE-SE</h1>
                <div className='reunir-containers'>
                    <div className='container-1'>
                        <input placeholder="Nome"/>
                        <input placeholder="Telefone"/>
                        <input placeholder="Email"/>
                    </div>
                    <div className='container-2'>
                        <input placeholder="Senha"/>
                        <input placeholder="Data de nascimento"/>
                        <input placeholder="CPF"/>
                    </div>
                </div>
                <button className='botão-proseguir'>Seguir</button>
                <Link className='voltar' to='/Login'>
                    <div>Voltar</div>
                </Link>
            </div>
        </main>
    )
}