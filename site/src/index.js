import React from 'react';
import ReactDOM from 'react-dom/client';


import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Cadastrar from './pages/cadastrar'
import Concluidos from './pages/concluidos'
import Login from './pages/login'
import LoginAdm from './pages/loginAdm';
import Pendentes from './pages/Pendentes';
import Admin from './pages/admin';
import Consultar from './pages/consultar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<LoginAdm/>} />
      <Route path='/admin' element={<Admin/>} />
        <Route path='/admin/cadastrar' element={<Cadastrar/>} />
        <Route path='/admin/consultar' element={<Consultar/>} />
        <Route path='/admin/concluidos' element={<Concluidos/>} />
        <Route path='/admin/pendentes' element={<Pendentes/>} />
        <Route path='/Login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);