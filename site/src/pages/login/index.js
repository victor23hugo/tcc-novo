import './index.scss'
import ImagemGif from './soccer.svg'

export default function Login(){

    return(
        <main>
            <div className='main-login'>
                <div className='left-login'>
                    <h1>Faça Login</h1>
                    <h1>E entre para o nosso time</h1>
                    <img className='left-login-image' src={ImagemGif} alt='soccer'/>
                </div>
                <div className='right-login'>
                    <div className='card-login'>
                        <h1>LOGIN</h1>
                        <div className='textfield'>
                            <label for='usuario'>Usuário</label>
                            <input type='text' name='usuario' placeholder='Usuário'></input>
                        </div>
                        <div className='textfield'>
                            <label for='senha'>senha</label>
                            <input type='password' name='senha' placeholder='Senha'></input>
                        </div>
                        <button className='btn-login'>Login</button>
                    </div>
                </div>
            </div>


        </main>
        
            


        
    )
}