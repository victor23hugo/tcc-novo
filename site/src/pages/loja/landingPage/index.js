import './index.scss'
import Header from '../../../componentes/3.HeaderLanding'
import Card from '../../../componentes/CardCamisa'

export default function Index() {
    return(


        <main className="admin-home">
            <div className='header-landing-page'>
              <Header/>
              
            <div className='faixa-1'>
                    <img className="camisas" src="/images/11.png" alt="r"/>
                    <div className='card-class'>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                   
                        
                        
                    </div>
            </div>
            </div>
                
        </main>
    )}