import storage from 'local-storage'
import {  Link } from 'react-router-dom';
import './index.scss'

export default function Index(){

function sairClick(){
    storage.remove('ususario-logado');
}


    return(
        <nav className="menu-Info">

                <div className='menu-items'>
                    <Link to='/MinhaConta'>
                        <img src="/images/8.png" alt="" />
                        <div>Minha Conta</div>
                    </Link>
                    <Link to='/InfoPessoais'>
                        <img src="/images/3.png" alt="" />
                        <div>Informações Pessoias</div>
                    </Link>
                    <Link to='/MeusPedidos'>
                        <img src="/images/6.png" alt="" />
                        <div>Meus Pedidos</div>
                    </Link>
                    <Link to='/HistPedidos'>
                        <img src="/images/5.png" alt="" />
                        <div>Histórico de Pedidos   </div>
                    </Link>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Link to ='/'>
                        <span>Sair</span>
                    </Link>
                </div>
            
        </nav>
    )
}
