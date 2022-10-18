import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

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

//imports do User
import LoginUser from './pages/User/0.loginUser';
import CadastrarUser from './pages/User/1.CadastrarUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <ToastContainer/>

      <Route path='/' element={<LoginAdm/>} />
        <Route path='/admin/BemVindo' element={<BemVindo/>} />
        <Route path='/admin/cadastrar' element={<Cadastrar/>} />
        <Route path='/admin/consultar' element={<Consultar/>} />
        <Route path='/admin/pedidos' element={<Pedidos/>} />
        <Route path='/admin/entregues' element={<Entregues/>} />

        <Route path='/loja/landing' element={<LandingPage/>} />


        <Route path='/Login' element={<LoginUser/>} />
        <Route path='/Cadastrar' element={<CadastrarUser/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);