import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from "react";

function App() {

  const [nroClicks, setNroClicks] = useState(0); 

  const manejarClick = () => {
    setNroClicks(nroClicks + 1);
  };

  const reiniciarContador = () => {
    setNroClicks(0);
  };

  return (
    <div className="App">      
      <div className="conteneder-principal">
        <Contador 
        nroClicks={nroClicks} />
        <Boton 
        texto="Click"
        esBotonDeClick={true}
        manejarClick={manejarClick} />        
        <Boton 
        texto="Reiniciar"
        esBotonDeClick={false}
        manejarClick={reiniciarContador} />              
      </div>
    </div>
  );
}

export default App;
