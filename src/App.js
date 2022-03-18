import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./page/Home";
import Destino from "./page/Destino";
import Contato from "./page/Contatos";
import Promocoes from "./page/Promocoes";
import Cadastro from "./page/Cadastro";
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from "./componentes/Footer";
import Header from "./componentes/Header";


function App() {
  

  return (
    
    <div>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path='/Contatos'element={<Contato/>}/>
      <Route path='/Destino'element={<Destino/>}/>
      <Route path='/Promocoes'element={<Promocoes/>}/>
      <Route path='/Cadastro'element={<Cadastro/>}/>
    </Routes>
    </BrowserRouter>

    <Footer ano={2022} Marca={'@VoePlus'}/>
    </div>
  
  );
    }
export default App;
