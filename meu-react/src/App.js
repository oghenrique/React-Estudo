import './App.css';
import SayMyName from './components/SayMyName.js';
import Pessoa from './components/Pessoa.js';
import Frase from './components/Frase.js';
import List from './components/List.js';

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
      <List/>
      </div>
  );
}

export default App;
