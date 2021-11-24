import logo from './assets/iconoNotes.png';
import botonSalir from './assets/botonSalir.png';
import './App.css';

export default function App() {
  return (
    <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h1>Bell Notes </h1>
          <div id="botones">
          <img src={ botonSalir } className="botonSalir" />
          </div>
          <textarea placeholder= "Escribe tu nota aquí" id="publicacion"></textarea>
          <buton id="botonEnviar"> Enviar</buton>

        </header>
      </div>
  );
}

