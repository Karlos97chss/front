function Painel() {
    return (
     <article>
       <h3>{props.texto}</h3>
       <ul>
       {itens.map((item) => <li>{item}</li>)}
       </ul>
     </article>
    );
  }
  export default Painel;  