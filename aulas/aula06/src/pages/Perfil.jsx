import { useParams } from "react-router-dom";

function Perfil() {
  const { id } = useParams();
  return <>{id == 1 ? <h1>Perfil</h1> : <p>Num pode!!!</p>}</>;
}

export default Perfil;
