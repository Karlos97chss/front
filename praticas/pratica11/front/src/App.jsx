import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Registrar from "./pages/Registrar";
import Home from "./pages/home";
import Perfil from "./pages/Perfil";
import Erro404 from "./pages/Erro404";

function App() {
  const { usuario } = useContext(AuthContext);
  return (
    <>
      {!usuario.logado ? (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/registrar" element={<Registrar />} />
        </>
      ) : (
        <>
          <Route path="/home" element={<Home />} />
          <Route path="/perfil/:id" element={<Perfil />} />
        </>
      )}
    </>
  );
}
export default App;
