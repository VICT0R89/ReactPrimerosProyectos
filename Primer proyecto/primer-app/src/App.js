//import logo from './logo.svg';
import './App.css';
import Testimonio from "./componentes/Testimonio"

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen los superheroes de ciudad Gótica</h1>
        <Testimonio 
          nombre="Batman"
          pais="Ciudad Gótica"
          imagen="batman"
          imagenAlt="Batman"
          cargo="Súper Heroe"
          empresa="contra del crimen organizado"
          testimonio="Como tengo mucha plata puedo hacer lo que quiera, incluso vestirme de gato malo y golpear a los marginados de la sociedad, así que ya lo sabes, todo lo que necesitas es dinero."
        />
        <Testimonio 
          nombre="Batman"
          pais="Ciudad Gótica"
          imagen="batman"
          imagenAlt="Batman"
          cargo="Súper Heroe"
          empresa="contra del crimen organizado"
          testimonio="Como tengo mucha plata puedo hacer lo que quiera, incluso vestirme de gato malo y golpear a los marginados de la sociedad, así que ya lo sabes, todo lo que necesitas es dinero."
        />
        <Testimonio 
          nombre="Batman"
          pais="Ciudad Gótica"
          imagen="batman"
          imagenAlt="Batman"
          cargo="Súper Heroe"
          empresa="contra del crimen organizado"
          testimonio="Como tengo mucha plata puedo hacer lo que quiera, incluso vestirme de gato malo y golpear a los marginados de la sociedad, así que ya lo sabes, todo lo que necesitas es dinero."
        />
      </div>
    </div>
  );
}

export default App;
