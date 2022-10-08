import './index.scss'

export default function Index() {
    return(
        <header className='comp-cabecalho'>
                <div className="conjunto">
                    <div className="image">
                        <img className="userIcon" src="/images/9.png" alt=""/>
                    </div>
                    <div className="conjunto-f1">
                        <div className="frase">
                            <p>Olá</p>
                        </div>
                        <div className="frase-user">
                            <p>Roberto Carlos</p>
                        </div>
                    </div>
                </div>
           
                <div className="sair">
                    <img className="sair2" src="/images/7.png" alt=""/>
                </div>

        </header>
    )
}