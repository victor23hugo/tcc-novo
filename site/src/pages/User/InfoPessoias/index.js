import './index.scss'
import MenuInfo from '../../../componentes/MenuInfo'
import CardInfoPessoais from '../../../componentes/cardInfopessoais'

export default function Index(){
    return(
        
        <main className='mãe'>
                    <div className='header'>
                        <div className='espacamento'></div>
                        <img className='imagem-1' src="/images/9.png" alt="" />
                        <p>Informações Pessoias</p>
                    </div>
                    <div className='container-info'>
                        <MenuInfo/>
                        <div>
                            <CardInfoPessoais/>
                        </div>
                    </div>
        </main>
    )    
}