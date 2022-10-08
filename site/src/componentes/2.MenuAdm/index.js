import storage from 'local-storage'
import {  Link } from 'react-router-dom';
import './index.scss'

export default function Index(){

function sairClick(){
    storage.remove('ususario-logado');
}


    return(
        <nav className="comp-menu">
        
                <div className='logo'>
                    <h1>CaSport</h1>
                </div>

                <div className='menu-items'>
                    <Link to='/admin/BemVindo'>
                        <img src="/images/8.png" alt="" />
                        <div>Admin</div>
                    </Link>
                    <Link to='/admin/cadastrar'>
                        <img src="/images/3.png" alt="" />
                        <div>Cadastrar</div>
                    </Link>
                    <Link to='/admin/consultar'>
                        <img src="/images/6.png" alt="" />
                        <div>Consultar</div>
                    </Link>
                    <Link to='/admin/pedidos'>
                        <img src="/images/5.png" alt="" />
                        <div>Pedidos</div>
                    </Link>
                    <Link to='/admin/entregues'>
                        <img src="/images/4.png" alt="" />
                        <div>Entregues</div>
                    </Link>
                </div>
        

            <div className='menu-items'>
                <Link to='/' onClick={sairClick}>
                    <img src="/images/7.png" alt="" />
                    <div>Sair</div>
                </Link>
            </div>
            
        </nav>
    )
}
