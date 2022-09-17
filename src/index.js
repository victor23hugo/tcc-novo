import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import AdmCadastrar from './pages/adm-Cadastrar'
import Home from './pages/home'
import Login from './pages/login'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/admCadastrar' element={<AdmCadastrar/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/Login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
