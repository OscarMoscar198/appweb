import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import Formulario from './components/Formulario'

ReactDOM.createRoot(document.getElementById("root")).render(
  <> 
    <Header /> 
    <Body />
    <Formulario />
    <Footer />
  </>
);
