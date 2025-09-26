import "./App.css";
import logo from "./icon_white.png";
import React, { useState, useEffect } from "react";

function App() {
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
  const [instructores, setInstructores] = useState([]);
  const [sugerencia, setSugerencia] = useState("");
  const [listaSugerencias, setListaSugerencias] = useState([]);

  // Manejo de selección de instructores
  const handleInstructorChange = (e) => {
    const value = e.target.value;

    if (instructores.includes(value)) {
      setInstructores(instructores.filter((i) => i !== value));
    } else {
      if (instructores.length >= 2) {
        alert("Solo puedes seleccionar máximo 2 instructores.");
        e.target.checked = false;
        return;
      }
      setInstructores([...instructores, value]);
    }
  };

  // Manejo de sugerencias
  const handleSubmit = (e) => {
    e.preventDefault();
    if (sugerencia.trim() !== "") {
      setListaSugerencias([...listaSugerencias, sugerencia]);
      setSugerencia("");
    }
  };
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
          <p>
            Aquí aparecerán las actualizaciones más importantes del programa.
          </p>
        </section>

        <section id="programa" className="section">
          <h2>Programa</h2>
          <p>
            Conoce más sobre los laboratorios móviles y su impacto en las
            comunidades rurales.
          </p>
        </section>

        <section id="pilares" className="section">
          <h2>Pilares</h2>
          <p>
            Conoce más sobre los laboratorios móviles y su impacto en las
            comunidades rurales.
          </p>
        </section>

        <section id="formacion" className="section">
          <h2>Formacion</h2>
          <p>
            Conoce más sobre los laboratorios móviles y su impacto en las
            comunidades rurales.
          </p>
        </section>

        <section id="evidencias" className="section">
          <h2>Evidencias</h2>
          <p>
            Conoce más sobre los laboratorios móviles y su impacto en las
            comunidades rurales.
          </p>
          <div className="gallery">
            <img src="https://via.placeholder.com/250x150" alt="Evidencia 1" />
            <img src="https://via.placeholder.com/250x150" alt="Evidencia 2" />
            <img src="https://via.placeholder.com/250x150" alt="Evidencia 3" />
          </div>
        </section>

        <section id="inscripcion" className="section">
          <h2>Inscripción</h2>
          <p>
            Completa el formulario para inscribir tu comunidad en el programa.
          </p>

          <form className="form-inscripcion">
            {/* Selección de municipio */}
            <label htmlFor="municipio">Municipio:</label>
            <select id="municipio" name="municipio">
              <option value="">Seleccione un municipio</option>
              <option value="yopal">Yopal</option>
              <option value="aguazul">Aguazul</option>
              <option value="tauramena">Tauramena</option>
              <option value="paz">Paz de Ariporo</option>
              <option value="villanueva">Villanueva</option>
            </select>

            {/* Vereda o comunidad */}
            <label htmlFor="vereda">Vereda o comunidad:</label>
            <input
              type="text"
              id="vereda"
              name="vereda"
              placeholder="Ingrese la vereda o comunidad"
            />

            {/* Selección de instructores */}
            <label>Instructor(es):</label>
            <div className="checkbox-group-vertical">
              <label>
                <input
                  type="checkbox"
                  value="juan"
                  onChange={handleInstructorChange}
                />
                Juan Pérez — Electrónica
              </label>
              <label>
                <input
                  type="checkbox"
                  value="maria"
                  onChange={handleInstructorChange}
                />
                María Gómez — Desarrollo de Software
              </label>
              <label>
                <input
                  type="checkbox"
                  value="carlos"
                  onChange={handleInstructorChange}
                />
                Carlos Ramírez — Redes y Telecomunicaciones
              </label>
              <label>
                <input
                  type="checkbox"
                  value="ana"
                  onChange={handleInstructorChange}
                />
                Ana Rodríguez — Robótica Educativa
              </label>
            </div>
            <small>⚠ Solo puedes elegir máximo 2 instructores.</small>

            {/* Selección de horario (bloqueado si no hay instructor) */}
            <label htmlFor="horario">Horario:</label>
            <input
              type="datetime-local"
              id="horario"
              name="horario"
              disabled={instructores.length === 0}
            />

            {/* Nombre del representante */}
            <label htmlFor="representante">Nombre del representante:</label>
            <input
              type="text"
              id="representante"
              name="representante"
              placeholder="Ingrese el nombre del representante"
            />

            {/* Tipo de visita */}
            <label>Tipo de visita:</label>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" name="visita" value="electronica" />{" "}
                Electrónica
              </label>
              <label>
                <input type="checkbox" name="visita" value="software" />{" "}
                Desarrollo de Software
              </label>
            </div>

            {/* Botón enviar */}
            <button type="submit">Enviar inscripción</button>
          </form>
        </section>
        <section id="contacto" className="section">
          <h2>Contacto</h2>
          <p>Síguenos en nuestras redes sociales:</p>

          {/* 🔹 Redes sociales falsas */}
          <div className="redes">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              📘 Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              🐦 Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              📸 Instagram
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              ▶️ YouTube
            </a>
          </div>

          {/* 🔹 Sugerencias */}
          <div className="sugerencias">
            <h3>Envíanos tus sugerencias</h3>
            <form onSubmit={handleSubmit}>
              <textarea
                value={sugerencia}
                onChange={(e) => setSugerencia(e.target.value)}
                placeholder="Escribe tu sugerencia aquí..."
              />
              <button type="submit">Enviar</button>
            </form>

            {/* 🔹 Caja de sugerencias anteriores */}
            <div className="sugerencias-lista">
              <h4>Sugerencias realizadas:</h4>
              {listaSugerencias.length === 0 ? (
                <p>No hay sugerencias aún.</p>
              ) : (
                <ul>
                  {listaSugerencias.map((s, index) => (
                    <li key={index}>{s}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="App-footer">
        <p>© 2025 Programa ELECTROROOT LAB - Gobierno de Colombia</p>
      </footer>
    </div>
  );
}

export default App;
