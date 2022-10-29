import './index.scss'

export default function Index(){

    return(
        <main>
            <div  className='rodape'>

                <div className='ajuda'>
                    <div className='Casport'>
                        <h1 className='casport'>Casport</h1>
                    </div>

                    <p className='redes-sociais'>Redes Sociais</p>

                    <div className='img-redes-socias'>
                    <div className='face'>
                        <img className="instagram" src="/images/instagram.png" alt=""/>
                    </div>
                    <div className='insta'>
                        <img className="facebook" src="/images/facebook.png" alt=""/>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className='ajuda'>
                    <div className='Marcas-casport'>
                        <p>Marcas</p>
                        <p>Nike</p>
                        <p>Adidas</p>
                        <p>Umbro</p>
                        <p>Puma</p>
                    </div>
                    <hr className='reta-final'/>
                </div>
                <div className='ajuda'>
                    <div className='ajuda-casport'>
                        <p>Ajuda</p>
                        <p>duvidas frequentes</p>
                        <p>Política de privacidade</p>
                    </div>
                    <hr className='semi-final'/>
                </div>
                <div className='ajuda'>
                    <div className='sobre-casport'>
                            <p>Sobre nós</p>
                            <p>Nosso time</p>
                        <div className='formas-de-pagamento'>
                            <p>Formas de pagamento</p>
                            <div className='img-pagamento'>
                                <img className="master" src="/images/master.png" alt=""/>
                                <img className="visa" src="/images/visa.png" alt=""/>
                                <img className="boleto" src="/images/boleto.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <hr className='final'/>
                </div>

            </div>

        </main>
    )
}
