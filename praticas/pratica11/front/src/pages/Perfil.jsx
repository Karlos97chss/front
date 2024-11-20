import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Menu from "../components/Menu";
import Formulario from "./Formulario";

const Perfil = () => {
  const [erro, setErro] = useState("");

  const { id } = useParams();

  const { usuario, update } = useContext(AuthContext);

  const onSalvar = async (data) => {
    const resultado = await update({ id, ...data });

    if (resultado) {
      setErro(resultado);
    } else {
      setErro("");
    }
  };

  return (
    <div>
      <header>
        <Menu />
      </header>

      <h1>Perfil</h1>
      {erro && <p>{erro}</p>}

      <Formulario onEnviar={onSalvar} texto="Salvar" />
    </div>
  );
};

export default Perfil;
