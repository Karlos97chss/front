import Botao from "./Botao";
import InputEmail from "./InputEmail";
import InputSenha from "./InputSenha";
import Painel from "./Painel";

function Secao(props) {
  return (
    <section>
      <h2>
        {props.texto}
        {props.children}
      </h2>
      <Painel
        texto="Mural de Avisos"
        itens={[
          "Inscrições para Cursos de Extensão",
          "Evento Maratona de Programação",
          "Palestra sobre Inteligência Artificial",
        ]}
      />
      <Painel
        texto="Agenda Acadêmica"
        itens={[
          "Semana de Provas P1",
          "Entrega de Trabalhos",
          "Apresentação de TCC",
        ]}
      />
      <Painel
        texto="Histórico de Notas"
        itens={[
          "Lógica de Programação - 5,5",
          "Banco de Dados - 7,8",
          "Engenharia de Software - 5,3",
        ]}
      />
      <Painel
        texto="Histórico de Faltas"
        itens={[
          "Lógica de Programação - 4",
          "Banco de Dados - 0",
          "Engenharia de Software - 1",
        ]}
      />
       <div>
      <InputEmail />
      <InputSenha />
      <Botao texto="Salvar" />
    </div>
    </section>
  );
}

export default Secao;
