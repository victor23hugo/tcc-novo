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
                    <br/>
                        <MenuInfo/>
                        <br/>
                        <div className='card'>
                            <br/>
                            <h1>Informaçoes da Conta</h1>
                            <br/>
                            <br/>
                            <br/>

                                <div className='info'>
                                    <div>Nome: Gilberto</div>
                                    <div>Numero de Telefone: 9999-9999 </div>
                                    <div>CPF: 555555555-55</div>
                                    <div>Data de Nascimento</div>
                                </div>

                        </div>
                    </div>
        </main>
    )    
}