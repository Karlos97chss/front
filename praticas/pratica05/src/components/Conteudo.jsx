import Botao from "./Botao";
import Icone from "./Icone";
import InputEmail from "./InputEmail";
import InputSenha from "./InputSenha";
import Link from "./Link";
import Menu from "./Menu";
import Secao from "./Secao";
import Titulo from "./Titulo";

function Conteudo() {
  return (
    <>
    <main className={props.estilo}>{props.children}</main>
      <Icone imagem="" texto="Logo da Aplicação" />
      <Titulo texto="Aluno Online" />
      <InputEmail />
      <InputSenha />
      <Botao texto="Entrar" />
      <Link texto="Esqueceu a Senha?" />
      <Menu />
<Secao texto="Página Inicial"></Secao>

    </>
  );
}

export default Conteudo;  