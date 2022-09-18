import './index.scss'

export default function Login(){

    return(
        <body>
            <div className='main-login'>
                <div className='left-login'>
                    <h1>Faça Login</h1>
                    <h1>E entre para o nosso time</h1>
                    <img src='Soccer.gif' alt='soccer animacao'></img>
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


        </body>
        
            


        
    )
}