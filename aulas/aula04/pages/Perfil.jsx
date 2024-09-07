import BotaoSubmit from "../src/components/BotaoSubmit";
import Cabecalho from "../src/components/Cabecalho";
import Conteudo from "../src/components/Conteudo";
import InputSenha from "../src/components/InputSenha";
import InputUsuario from "../src/components/InputUsuario";

function Perfil() {
  return (
    <>
      <Cabecalho />
      <Conteudo>
        <Menu />
        <Secao texto="Perfil de Usuário">
          <InputUsuario />
          <InputSenha />
          <BotaoSubmit texto="Salvar"/>
        </Secao>
      </Conteudo>
    </>
  );
}

export default Perfil;
