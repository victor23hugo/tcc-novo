import './index.scss'
import Header from '../../../componentes/3.HeaderLanding'
import Rodape from '../../../componentes/rodape-page'

export default function Index(){
    return(
        <main className='page'>
            <div className='Header'>
                <Header/>
            
            <div className='info'>
                <h1>Entre em Contato Conosco</h1> 
                
            </div>
            <br/>
            <br/>
            <div className='left-info'>
                    <img src='/images/email.png' width="100px" height="100px"/>
                    <h1>Email: caSports@gmail.com</h1>
            </div>
        <br/>
        <br/>
            <div className='left-info'>
                    <img src='/images/telefone.png' width="100px" height="100px"/>
                    <h1>(11)94517-4237</h1>
            </div>
            <br/>
            <br/>
            <Rodape/>
            </div>
        </main>
    )
}