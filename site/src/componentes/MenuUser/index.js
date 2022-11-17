import './index.scss'
import { listarProdutosFaixa3 } from '../../api/filtrosApi'
import React, { useState } from 'react'

export default function Index(props){

    // async function puma(){
    //     const resposta = await listarProdutosFaixa1()
    // }


    return(
        <main className='filtros-object'>
            <div className='block-1'>
                <h1>Marca</h1>
                <input className='text' type='text' placeholder='Buscar...' />

                <div className='Marcas-selecionada'>
                <input  className='square-input' type='radio' name='valor' placeholder='Buscar...' onClick={props.filtro} value='1'/>
                <p>Nike</p>
                </div>

                <div className='Marcas-selecionada'>
                <input  className='square-input' type='radio' name='valor' placeholder='Buscar...' onClick={props.filtro} value='3'/>
                <p>Adidas</p>
                </div>

                <div className='Marcas-selecionada'>
                <input  className='square-input' type='radio' name='valor' placeholder='Buscar...' onClick={props.filtro} value='4'/>
                <p>Puma</p>
                </div>

                <div className='Marcas-selecionada'>
                <input  className='square-input' type='radio' name='valor' placeholder='Buscar...' onClick={props.filtro} value='2'/>
                <p>Umbro</p>
                </div>
                
            </div>
            <div className='line-black'>
                <hr/>
            </div>

            <div className='block-2'>
                    <h1>Tamanho</h1>
                <div className='size'>
                    <div className='tamanho'>
                        <div>    
                            <button placeholder='P' onClick={props.filtro} value='p'>P</button>
                        </div>

                        <div>
                            <button placeholder='g' onClick={props.filtro} value='g'>G</button>
                        </div>

                        <div>
                            <button placeholder='M' onClick={props.filtro} value='m'>M</button>
                        </div>
                    </div>

                    <div className='tamanho-grande'>
                        
                        <div>
                            <button placeholder='GG' onClick={props.filtro} value='gg'>GG</button>
                        </div>
                    </div>
                </div>            
            </div>
            <div className='line-black'>
                <hr/>
            </div>

        </main>
    )
}
