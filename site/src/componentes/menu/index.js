import './index.scss'

export default function Index(){

    return(
        <nav className="comp-menu">
             <div className='titulo'>CaSport</div>
             <div className="ee">
                        <div className='menu-items'>
                                <img  className='img' src="/images/8.png" alt="" />
                                <div className='texto'>Home</div>
                        </div>
                        <div className='menu-items'>
                                <img  className='img' src="/images/3.png" alt="" />
                                <div className='texto'>Cadastar</div>
                        </div>
                        <div className='menu-items'>
                                <img  className='img' src="/images/4.png" alt="consultar" />
                                <div className='texto'>Consultar</div>
                        </div>
                        <div className='menu-items'>
                                <img  className='img' src="/images/5.png" alt="consultar" />
                                <div className='texto'>Pedidos pendentes</div>
                        </div>
                        <div className='menu-items'>
                                <img  className='img' src="/images/6.png" alt="consultar" />
                                <div className='texto'>Pedidos concluidos</div>
                        </div>
                        <div className='menu-items'>
                                <img  className='img' src="/images/7.png" alt="" />
                                <div className='texto'>Sair</div>
                        </div>
                </div>      
    </nav>
    )
}
