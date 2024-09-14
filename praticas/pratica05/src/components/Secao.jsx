import Botao from "./Botao";
import InputEmail from "./InputEmail";
import InputSenha from "./InputSenha";
import Painel from "./Painel";
import "./Secao.css";

function Secao(props) {
  return (
    <section>
      <h2>{props.texto}</h2>
      {props.children}
    </section>
  );
}

export default Secao;
