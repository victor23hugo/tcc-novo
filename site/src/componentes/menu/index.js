
import { useNavigate, Link } from 'react-router-dom';
import './index.scss'

export default function Index(){

    return(
        <nav className="comp-menu">
             <div className='titulo'>CaSport</div>
             <div className="ee">
                        <Link to='/admin' className='menu-items'>
                                <img  className='img' src="/images/8.png" alt="" />
                                <div className='texto'>Home</div>
                        </Link>
                        <Link to='' className='menu-items'>
                                <img  className='img' src="/images/3.png" alt="" />
                                <div className='texto'>Cadastar</div>
                        </Link>
                        <Link className='menu-items'>
                                <img  className='img' src="/images/4.png" alt="consultar" />
                                <div className='texto'>Consultar</div>
                        </Link>
                        <Link className='menu-items'>
                                <img  className='img' src="/images/5.png" alt="consultar" />
                                <div className='texto'>Pedidos pendentes</div>
                        </Link>
                        <Link className='menu-items'>
                                <img  className='img' src="/images/6.png" alt="consultar" />
                                <div className='texto'>Pedidos concluidos</div>
                        </Link>
                        <div className='menu-items'>
                                <img  className='img' src="/images/7.png" alt="" />
                                <div className='texto'>Sair</div>
                        </div>
                </div>      
    </nav>
    )
}
