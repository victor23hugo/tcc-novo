import './index.scss'
import Header from '../../../componentes/3.HeaderLanding'

export default function Index(){
    return(
        <div>
            <Header/>
            <div className='container-1'>
                <h3>Informações de Entrega</h3>
                <hr className='linha'/>

                <div className='reunir-inputs'>
                    <label>CEP:</label>
                    <input></input>
                    
                    <label>Endreço:</label>
                    <input></input>

                    <label>Numero:</label>
                    <input></input>

                    <label>Complemento:</label>
                    <input></input>
                
                    <label>Ponto de Referencia:</label>
                    <input></input>
                </div>
            </div>
        </div>
    )
}