import './index.scss'
import Header from '../../../componentes/3.HeaderLanding'



export default function Index() {

    return(
        <main className='info-entrega'>
            <Header/>
            <div className='titulo-entrgas'>
                <h1>Informções de Entrega</h1>
                <hr/>
            </div>
           <div className='inf-img'>
                <div className='informaçoes'>
                    <input className="form-email" type="email" placeholder="CEP:"/>
                    <input className="form-email" type="email" placeholder="Endereço:"/>
                    <input className="form-email" type="email" placeholder="Numero:"/>
                    <input className="form-email" type="email" placeholder="Complemento:"/>
                    <input className="form-email" type="email" placeholder="Ponto de referência:"/>
                </div>
                <div className='img'>
                    <img src="/images/mapinha.png" alt=""/>
                </div>
           </div>
           <div className='button'>
                <button>Avançar</button>
           </div>
        </main>
    )

}