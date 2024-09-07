import Cabecalho from "../src/components/Cabecalho";
import Conteudo from "../src/components/Conteudo";
import Menu from "../src/components/menu";
import Painel from "../src/components/Painel";
import Secao from "../src/components/Secao";

function Home() {
    const avisos = ["Feriado - 7/9", "Show do Milhão - 11/9"];
  return (
    <>
      <Cabecalho />
      <Conteudo>
        <Menu />
        <Secao texto="Pagina Inicial">
          <Painel texto="Mural de Avisos" itens={avisos} />
          <Painel texto="Agenda Academica" itens={[]} />
          <Painel texto="Historico de Faltas" itens={[]} />
          <Painel texto="Historico de Notas" itens={[]} />
        </Secao>
      </Conteudo>
    </>
  );
}

export default Home;
