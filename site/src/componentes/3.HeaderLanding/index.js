import './index.scss'
import {  Link } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';


export default function Index() {

    return(
        
<main>
    <div class="header-page">

        <div class="seja-bem-vindo">
            <div>Welcome to our store</div>
        </div>


        <div class="oi">
            <div class="p">
                <div class="Caspot">
                    <h1>CaSports</h1>
                </div>
                <div class="ppp">
                    <Link to="/">
                        <div class="inicio">inicio</div>
                    </Link>

                    <Link to="/catalogo">
                        <div class="catalogo">catalago</div>
                    </Link>
                    
                    <Link to='/contato'>
                    <div class="serviço">Entrar em contato</div>
                    </Link>
                </div>
            </div>
            <div class="img">
                <div class="lupa">
                    <img className='imagens' src="/images/lupa.png" alt="" />
                    </div>
                <div class="loja">
                <Link to='/carrinho'>
                    <img className='imagens' src="/images/sacola.png" alt=""/>
                </Link>
                    </div>
                <div class="pessu">
                <Link to='/login'>
                    <img className='imagens' src="/images/user.png" alt=""/>
                </Link>
                
                {/* <Link to='InfoPessoais'>
                    <span>Minha conta</span>
                    </Link>     */}
                
                
                {/* <div className='minha-conta'>
                <span>Minha conta</span>
                </div> */}
                </div>
   
            </div>
        </div>

    </div>
</main>
    )
}
