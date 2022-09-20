import './index.scss';

export default function Index(){

    return(
 
 <main className="mae">
    <div className="login">
        <div className="circulo">

         
        <img src = './public/1.png'/>

                
        </div>

        <h1>Logar no sistema</h1>

        <input className="form-email" type="email" placeholder="login" id=""/>
        <br/><br/>
  
        <input className="form-senha" type="password" placeholder="Senha" id=""/>
        <br/><br/>

        <button>Entrar</button>
    </div>


 </main>
 )
}