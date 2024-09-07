import BotaoSubmit from "../src/components/BotaoSubmit";
import Conteudo from "../src/components/Conteudo";
import InputSenha from "../src/components/InputSenha";
import InputUsuario from "../src/components/InputUsuario";
import Link from "../src/components/Link";
import Logo from "../src/components/Logo";
import Rodape from "../src/components/Rodape";
import Titulo from "../src/components/Titulo";
import "./Login.css";

function Login() {
  const urlLogo =
    "https://www.svgrepo.com/show/382151/education-graduation-learning-school-study.svg";
  const textoLogo = "Logo da Aplicação";

  return (
    <>
      <Conteudo estilo="login-form">
        <Logo imagem={urlLogo} texto={textoLogo} />
        <Titulo texto="Aluno Online" />
        <InputUsuario />
        <InputSenha />
        <BotaoSubmit texto="Entrar" />
        <Link texto="Esqueceu a Senha" />
        <Link texto="Criar uma Conta" />
      </Conteudo>
      <Rodape />
    </>
  );
}

export default Login;
