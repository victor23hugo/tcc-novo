import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//imports do adm
import LoginAdm from './pages/admin/0.loginAdm';
import BemVindo from './pages/admin/1.Bem-vindo';
import Cadastrar from './pages/admin/2.cadastrar';
import Consultar from './pages/admin/3.consultar';
import Pedidos from './pages/admin/4.pedidos';
import Entregues from './pages/admin/5.entregues';


//loja CaSports
import LandingPage from './pages/loja/landingPage'
import DetalheCamsia from './pages/loja/detalhecamisa'
import Carrinho from './pages/loja/carrinho'
import Filtro from './pages/loja/PageFiltro';
import Pedido from './pages/loja/pedido';
import Contato from './pages/loja/contato'
import PedidoFinalizado from './pages/loja/PedidoFinalizado'
import SobreNos from './pages/loja/sobreNos'

//imports do User
import LoginUser from './pages/User/0.loginUser/index.js';
import CadastrarUser from './pages/User/1.CadastrarUser';
import MinhaConta from './pages/User/MinhaConta';
import InfoPessoais from './pages/User/InfoPessoias';
import MeusPedidos from './pages/User/MeusPedidos';
import HistPedidos from './pages/User/HistPedidos';

import InformaçoesEntrega from './pages/loja/InformaçoesEntrega';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer/>
    <BrowserRouter>
      <Routes>
  
        <Route path='/catalogo' element={<Filtro/>}/>
        <Route path='/contato' element={<Contato/>}/>
        <Route path='/login/admin' element={<LoginAdm/>} />
        <Route path='/admin/BemVindo' element={<BemVindo/>} />
        <Route path='/admin/cadastrar' element={<Cadastrar/>} />
        <Route path='/admin/consultar' element={<Consultar/>} />
        <Route path='/admin/pedidos' element={<Pedidos/>} />
        <Route path='/admin/entregues' element={<Entregues/>} />
        <Route path='/admin/alterar/:id' element={<Cadastrar/>} />
        <Route path='/' element={<LandingPage/>} />
        <Route path='/camisa/:id/detalhe' element={<DetalheCamsia/>} />
        <Route path='/carrinho' element={<Carrinho/>} />
        <Route path='/pedido' element={<Pedido/>} />
        <Route path='/Login' element={<LoginUser/>} />
        <Route path='/Cadastro' element={<CadastrarUser/>} />
        <Route path='/MinhaConta' element={<MinhaConta/>} />
        <Route path='/InfoPessoais' element={<InfoPessoais/>} />
        <Route path='/MeusPedidos' element={<MeusPedidos/>} />
        <Route path='/HistPedidos' element={<HistPedidos/>} />
        <Route path='/informacao' element={<InformaçoesEntrega/>} />
        <Route path='/Pedido/Finalizado' element={<PedidoFinalizado/>} />
        <Route path='/SobreCasports' element={<SobreNos/>} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);