import "./App.css";
import logo from "./icon_white.png";
import logogreen from "./icon_green.png";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import { useState, useEffect } from "react";
import Pilares from "./componentes/pilares";
import Formacion from "./componentes/formacion";
import Evidencias from "./componentes/evidencias";
import Inscripcion from "./componentes/inscripcion";
import Contacto from "./componentes/contacto";

function App() {
  const imagenes = [
    "/imgs/e1.png",
    "/imgs/e2.png",
    "/imgs/e3.png",
    "/imgs/e4.png",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
    }, 3000); // cambia cada 3 segundos
    return () => clearInterval(interval);
  }, [imagenes.length]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash; // ej: "#inscripcion"
      if (hash) {
        const section = document.querySelector(hash);
        if (section) {
          // 🔹 Reinicia scroll de la ventana
          window.scrollTo({ top: section.offsetTop, behavior: "smooth" });

          // 🔹 Reinicia scroll interno de la sección
          section.scrollTop = 0;
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // ejecutar al inicio

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);
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
          <div className="slider">
            <img
              src={imagenes[index]}
              alt={`Imagen ${index + 1}`}
              className="slider-img"
            />
          </div>
          <div className="App-img">
            <img
              src={logogreen}
              className="App-logop"
              alt="ElectroRoot Lab Logo"
            />
          </div>
          <div className="App-ini">
            <p>
              Electroroot Lab es un programa gubernamental diseñado para reducir
              la brecha digital en comunidades rurales mediante la
              implementación de laboratorios móviles especializados en la
              enseñanza de tecnologías emergentes.
            </p>
          </div>
          <div class="info-columns-i">
            <div class="column">
              <img src={img1} className="App-imgc" alt="ElectroRoot Lab Logo" />
              <h3>Libertades Digitales</h3>
            </div>
            <div class="column">
              <img src={img2} className="App-imgc" alt="ElectroRoot Lab Logo" />
              <h3>Tecnología y Medio Ambiente</h3>
            </div>
            <div class="column">
              <img src={img3} className="App-imgc" alt="ElectroRoot Lab Logo" />
              <h3>Diversidad e Inclusión Digital</h3>
            </div>
          </div>
        </section>

        <section id="programa" className="section">
          <div className="App-content">
            <div className="App-pr">
              <h2>ELECTROROOT LAB</h2>
              <h2>¿Qué es ELECTROROOT LAB?</h2>
              <p>
                Electroroot Lab es un programa gubernamental diseñado para
                reducir la brecha digital en comunidades rurales mediante la
                implementación de laboratorios móviles especializados en la
                enseñanza de tecnologías emergentes.
              </p>
              <p>
                Su enfoque principal se centra en la formación práctica en áreas
                de electrónica y desarrollo de software, buscando que los
                habitantes rurales adquieran competencias tecnológicas
                aplicables a su vida diaria, educativa y productiva.
              </p>
            </div>
            <div>
              <img
                src={img4}
                className="App-img4"
                alt="Laboratorio móvil Electroroot"
              />
            </div>
          </div>
        </section>

        <Pilares/>

        <Formacion />

        <Evidencias />

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
