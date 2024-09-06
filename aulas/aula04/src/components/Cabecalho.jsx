import Logo from "../components/Logo";
import Titulo from "../components/Titulo"
import InputPesquisar from "./InputPesquisar";

function Cabecalho(){
    return(
        <header>
            <Logo imagem="" texto="Logo da Aplicação"/>
            <Titulo texto="Aluno Online"/>
            <InputPesquisar/>
            <Logo imagem="" texto="Icone Pesquisar"/>
        </header>
    );
}

export default Cabecalho;