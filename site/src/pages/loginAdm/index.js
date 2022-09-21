import './index.scss';

export default function Index(){

    return(
 
 <main className="mae">
    <div className="login">
        <div className="circulo">
            <img className="iconUser" src="/images/1.png" alt="iconesUser"/>
        </div>

        <h1>Logar no sistema</h1>

        <input className="form-email" type="email" placeholder="Login" id=""/>
        <br/><br/>
  
        <input className="form-senha" type="password" placeholder="Senha" id=""/>
        <br/><br/>

        <button>Entrar</button>
    </div>


 </main>
 )
}