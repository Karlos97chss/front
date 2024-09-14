import Icone from "./Icone";
import InputPesquisar from "./InputPesquisar";
import Titulo from "./Titulo";
import "./Cabecalho.css";

function Cabecalho(props) {
  return (
    <header>
   <div>
     <Icone imagem="" texto="Logo do Aplicação" />
     <Titulo texto="Aluno Online" />
   </div>
   <div> 
     <InputPesquisar>
     <Icone imagem="" texto="Icone Pesquisar" />
     </InputPesquisar>
   </div>
</header>
  );
}

export default Cabecalho;