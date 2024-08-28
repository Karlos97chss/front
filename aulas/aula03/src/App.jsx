import {Titulo} from './components/Titulo';

function App() {
  return (
    <div className="App">
      <h1>React</h1>
      <Titulo />
      <p>Minha aplicação</p>
    </div>
  )
}

function MarqueeExample() {
  return (
      <marquee behavior="scroll" direction="right" style={{ width: '100%', minWidth: '100%'}}>
        PRATICA 04
      </marquee>
  );
}

export default (App, MarqueeExample);
