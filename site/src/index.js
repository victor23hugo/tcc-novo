import React from 'react';
import ReactDOM from 'react-dom/client';


import { BrowserRouter, Routes, Route } from 'react-router-dom';


import AdmCadastrar from './pages/adm-Cadastrar'
import Home from './pages/home'
import Login from './pages/login'
import LoginAdm from './pages/loginAdm';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AdmCadastrar/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/LoginAdm' element={<LoginAdm/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
