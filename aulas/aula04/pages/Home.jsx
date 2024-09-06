import Cabecalho from "../src/components/Cabecalho";
import Conteudo from "../src/components/Conteudo";
import Menu from "../src/components/menu";


function Home(){
    return(
        <>
            <Cabecalho/>
            <Conteudo>
                <Menu/>
            </Conteudo>
        </>
    );
}

export default Home;