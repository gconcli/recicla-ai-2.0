import Pagina from "./components/pages/Paginas";
import { useState } from "react";

function App() {

  const [paginaAtual, setPaginaAtual] = useState({nome: 'Home', id: 1});

  const changePagina = (event) => {
      const nome = event.target.name;
      const valor = event.target.value;
      setInputs(valores => ({...valores, [nome]: valor}));
  }

  return (
    <>
      <header>
        
      </header>
      <main>
        <Pagina
          nome = {paginaAtual.nome}
          id = {paginaAtual.id}
        />
      </main>
      <footer>
        
      </footer>
    </>
  );
}

export default App;
