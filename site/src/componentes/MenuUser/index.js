import './index.scss'

export default function Index(){

    return(
        <main className='filtros-object'>
            <div className='block-1'>
                <h1>Marca</h1>
                <input className='text' type='text' placeholder='Buscar...' />

                <div className='Marcas-selecionada'>
                <input  className='square-input' type='radio' placeholder='Buscar...' />
                <p>Nike</p>
                </div>

                <div className='Marcas-selecionada'>
                <input  className='square-input' type='radio' placeholder='Buscar...' />
                <p>Adidas</p>
                </div>

                <div className='Marcas-selecionada'>
                <input  className='square-input' type='radio' placeholder='Buscar...' />
                <p>Puma</p>
                </div>

                <div className='Marcas-selecionada'>
                <input  className='square-input' type='radio' placeholder='Buscar...' />
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
                            <button placeholder='P'>P</button>
                        </div>

                        <div>
                            <button placeholder='g'>G</button>
                        </div>

                        <div>
                            <button placeholder='M'>M</button>
                        </div>
                    </div>

                    <div className='tamanho-grande'>
                        <div>
                            <button placeholder='PP'>PP</button>
                        </div>

                        <div>
                            <button placeholder='GG'>GG</button>
                        </div>

                        <div>
                            <button placeholder='MM'>MM</button>
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
