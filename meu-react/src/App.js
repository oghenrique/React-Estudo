import './App.css';
import HelloWorld from './components/HelloWorld.js';
import SayMyName from './components/SayMyName.js';
import Pessoa from './components/Pessoa.js';
import Frase from './components/Frase.js';

function App() {

  const nome = "VDC"

  return (
    <div className="App">
      <h1>Testando css</h1>
      < Frase/>
      < Frase/>
      <SayMyName nome="Matheus" />
      <SayMyName nome="Gustavo" />
      <SayMyName nome={nome} />
      <Pessoa 
      nome= "Rodrigo"
      idade ="28"
      profissao= "Programador"
      foto = "https://via.placeholder.com/150"    
      />
      </div>
  );
}

export default App;
