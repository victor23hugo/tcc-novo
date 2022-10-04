import storage from 'local-storage'
import { useNavigate, Link } from 'react-router-dom';
import './index.scss'

export default function Index(){

function sairClick(){
    storage.remove('ususario-logado');
}


    return(
        <nav className="comp-menu">
            <div>
                <div className='logo'>
                    <div></div>
                </div>

                <div className='menu-items'>
                    <Link to='/admin'>
                        <img src="/images/8.png" alt="home" />
                        <div>Admin</div>
                    </Link>
                    <Link to='/admin/cadastrar'>
                        <img src="/images/3.png" alt="cadastrar" />
                        <div>Cadastrar</div>
                    </Link>
                    <Link to='/admin/consultar'>
                        <img src="/images/6.png" alt="consultar" />
                        <div>Consultar</div>
                    </Link>
                    <Link to='/admin/pendentes'>
                        <img src="/images/5.png" alt="consultar" />
                        <div>Pedidos</div>
                    </Link>
                    <Link to='/admin/concluidos'>
                        <img src="/images/4.png" alt="consultar" />
                        <div>Entregues</div>
                    </Link>
                </div>
            </div>

            <div className='menu-items'>
                <Link to='/' onClick={sairClick}>
                    <img src="/images/7.png" alt="consultar" />
                    <div>Sair</div>
                </Link>
            </div>
        </nav>
    )
}
