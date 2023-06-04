import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main'
import Repositorio from './pages/Repositorio'

export default function Rotas(){
  return(
    <Routes>
      <Route exact path="/fav-repo" element={<Main/>}/>
      <Route exact path="/" element={<Main/>}/>
      <Route exact path="/repositorio/:repositorioParams" element={<Repositorio/>}/>
    </Routes>
  );
}