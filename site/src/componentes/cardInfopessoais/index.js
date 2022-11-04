import './index.scss'

export default function Index(){
    return(
        <div className='centralizar'>
            <div className='informações-1'>
                <header>Nome</header>
                <input></input>
                <header>Telefone</header>
                <input></input>
                <header>Email</header>
                <input></input>
            </div>
            <div className='informações-2'>
                <header>Senha</header>
                <input></input>
                <header>CPF</header>
                <input></input>
                <header>Nascimento</header>
                <input></input>
            </div>
        </div>
    )
}