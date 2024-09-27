import { Outlet } from "react-router-dom";
import Cabecalho from "../components/Cabecalho";
import Menu from "../components/menu";
import Conteudo from "../components/Conteudo";

function Layout() {
  return function Layout() {
    return (
      <>
        <Cabecalho />
        <Conteudo>
          <Menu />
          <Outlet />
        </Conteudo>
      </>
    );
  };
}

export default Layout;
