import "./App.css";
import { useState } from "react";
import logo from "./icon_white.png";
import Inicio from "./componentes/inicio";
import Programa from "./componentes/programa";
import Pilares from "./componentes/pilares";
import Formacion from "./componentes/formacion";
import Inscripcion from "./componentes/inscripcion";
import Contacto from "./componentes/contacto";

function App() {
  const [pagina, setPagina] = useState("inicio"); // estado para la sección activa

  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <a onClick={() => setPagina("inicio")}>
            <img src={logo} className="App-logo" alt="ElectroRoot Lab Logo" />
            <h1 className="App-title">ELECTROROOT LAB</h1>
          </a>
          <a onClick={() => setPagina("inicio")}>Inicio</a>
          <a onClick={() => setPagina("programa")}>¿Que es ELECTROROOT LAB?</a>
          <a onClick={() => setPagina("pilares")}>Pilares de Sensibilización</a>
          <a onClick={() => setPagina("formacion")}>Formación</a>
          <a onClick={() => setPagina("inscripcion")}>Inscripción</a>
          <a onClick={() => setPagina("contacto")}>Contacto</a>
        </nav>
      </header>

      <main>
        {pagina === "inicio" && <Inicio />}
        {pagina === "programa" && <Programa />}
        {pagina === "pilares" && <Pilares />}
        {pagina === "formacion" && <Formacion />}
        {pagina === "inscripcion" && <Inscripcion />}
        {pagina === "contacto" && <Contacto />}
      </main>

      <footer className="App-footer">
        <p>© 2025 Programa ELECTROROOT LAB</p>
      </footer>
    </div>
  );
}

export default App;
