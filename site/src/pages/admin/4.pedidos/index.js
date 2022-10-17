import './index.scss'
import Menu from '../../../componentes/2.MenuAdm'
import Header from '../../../componentes/1.HeaderAdm'

export default function Index() {
    return(

        
        <main className="admin-home">

      
        <Menu selecionado='home'/>


        <div className="cont-faixa-cadastro">

             <Header/>
        <div className='conteudo'>
           <div className='input-busca '>
                <input type="text" placeholder='Buscar Camisas'/>
       
                </div>
          
              <table>
                <tr>
                    <td>ID </td>
                    <td>NOME </td>
                    <td>MARCA </td>
                    <td>TAMANHO</td>
                    <td>PREÇO</td>
                </tr>
                <tr>
                    <td>234</td>
                    <td>Brasil</td>
                    <td>nike</td>
                    <td>gg</td>
                    <td>129,00</td>
                </tr>
              </table>
          
            </div>
          </div>
           </main>
    )}