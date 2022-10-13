import './index.scss'
import {  Link } from 'react-router-dom';


export default function Index() {
    return(
        <main className='comp-cabeçalho'>
            <h1 className='espaçar'>caSports</h1>
            <div className='reunir-navegações'>
                <Link>Início</Link>
                <Link>Catálogo</Link>
                <Link>Entrar em contato</Link>
            </div>
            <div className='reunir-imagens'>
                <img className='imagens' src="/images/lupa.png" alt="" />
                <img className='imagens' src="/images/sacola.png" alt=""/>
                <img className='imagens' src="/images/user.png" alt="" />
            </div>
        </main>
    )
}