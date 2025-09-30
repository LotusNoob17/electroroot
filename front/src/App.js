import "./App.css";
import logo from "./icon_white.png";
import Inicio from "./componentes/inicio";
import Programa from "./componentes/programa";
import Pilares from "./componentes/pilares";
import Formacion from "./componentes/formacion";
import Inscripcion from "./componentes/inscripcion";
import Contacto from "./componentes/contacto";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <a href="#inicio">
            <img src={logo} className="App-logo" alt="ElectroRoot Lab Logo" />
            <h1 className="App-title">ELECTROROOT LAB</h1>
          </a>
          <a href="#inicio">Inicio</a>
          <a href="#programa">¿Que es ELECTROROOT LAB?</a>
          <a href="#pilares">Pilares de Sensibilización</a>
          <a href="#formacion">Formación</a>
          <a href="#inscripcion">Inscripción</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main>
        <Inicio/>

        <Programa/>

        <Pilares/>

        <Formacion />

        <Inscripcion />

        <Contacto />
        
      </main>

      <footer className="App-footer">
        <p>© 2025 Programa ELECTROROOT LAB - Gobierno de Colombia</p>
      </footer>
    </div>
  );
}

export default App;
