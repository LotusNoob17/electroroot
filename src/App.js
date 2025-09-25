import './App.css';
import logo from './icon_white.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="ElectroRoot Lab Logo" />
        <h1 className="App-title">ELECTROROOT LAB</h1>
        <nav className="App-nav">
          <a href="#inicio">Inicio</a>
          <a href="#programa">¿Que es ELECTROROOT LAB?</a>
          <a href="#pilares">Pilares de Sensibilización</a>
          <a href="#formacion">Formación</a>
          <a href="#evidencias">Evidencias</a>
          <a href="#inscripcion">Inscripción</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="section">
          <h2>Inicio</h2>
          <p>Aquí aparecerán las actualizaciones más importantes del programa.</p>
        </section>

        <section id="programa" className="section">
          <h2>Programa</h2>
          <p>Conoce más sobre los laboratorios móviles y su impacto en las comunidades rurales.</p>
        </section>

        <section id="pilares" className="section">
          <h2>Pilares</h2>
          <p>Conoce más sobre los laboratorios móviles y su impacto en las comunidades rurales.</p>
        </section>

        <section id="formacion" className="section">
          <h2>Formacion</h2>
          <p>Conoce más sobre los laboratorios móviles y su impacto en las comunidades rurales.</p>
        </section>

        <section id="evidencias" className="section">
          <h2>Evidencias</h2>
          <p>Conoce más sobre los laboratorios móviles y su impacto en las comunidades rurales.</p>
        </section>

        <section id="inscripcion" className="section">
          <h2>Inscripción</h2>
          <p>Conoce más sobre los laboratorios móviles y su impacto en las comunidades rurales.</p>
        </section>

        <section id="contacto" className="section">
          <h2>Contacto</h2>
          <p>Si deseas más información, comunícate con nosotros a través del correo institucional.</p>
        </section>
      </main>

      <footer className="App-footer">
        <p>© 2025 Programa ELECTROROOT LAB - Gobierno de Colombia</p>
      </footer>
    </div>
  );
}

export default App;
