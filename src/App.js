import "./App.css";
import logo from "./icon_white.png";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import { useState, useEffect } from "react";
import ImageReference from "./Image_reference.png";

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
           <div className="slider">
            <img
              src={imagenes[index]}
              alt={`Imagen ${index + 1}`}
              className="slider-img"
            />
          </div>
          <div className="App-img">
            <img src={logogreen} className="App-logop" alt="ElectroRoot Lab Logo" />
          </div>
          <div className='App-ini'>
            <p>
              Electroroot Lab es un programa gubernamental diseñado para 
              reducir la brecha digital en comunidades rurales mediante 
              la implementación de laboratorios móviles especializados en 
              la enseñanza de tecnologías emergentes. 
            </p>
          </div>
          <div class="info-columns">
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
                reducir la brecha digital en comunidades rurales mediante 
                la implementación de laboratorios móviles especializados en 
                la enseñanza de tecnologías emergentes. 
              </p>
              <p>
                Su enfoque principal se centra en la formación práctica en áreas 
                de electrónica y desarrollo de software, buscando que los habitantes 
                rurales adquieran competencias tecnológicas aplicables a su vida diaria, 
                educativa y productiva.
              </p>
            </div>
            <div>
              <img src={img4} className="App-img4" alt="Laboratorio móvil Electroroot" />
            </div>
          </div>
        </section>

        <section id="pilares" className="section pilares">
          <h2>Pilares de Sensibilización</h2>
          <div className="pilares-grid">
            <div className="pilar-card">
              <img src="https://img.icons8.com/?size=100&id=5s7R5DwJr50s&format=png&color=000000" alt="Diversidad e inclusión digital" />
              <h3>Diversidad e Inclusión Digital</h3>
              <p>Reducimos brechas digitales a través de herramientas que empoderan a todas las comunidades desde un enfoque diferencial.</p>
            </div>
            <div className="pilar-card">
              <img src="https://img.icons8.com/?size=100&id=3ocMa88iyjQR&format=png&color=000000" alt="Tecnología y medio ambiente" />
              <h3>Tecnología y Medio Ambiente</h3>
              <p>Promovemos prácticas sostenibles que fortalezcan la relación entre tecnología y cuidado del entorno natural.</p>
            </div>
            <div className="pilar-card">
              <img src="https://img.icons8.com/color/96/open-source.png" alt="Libertades tecnológicas" />
              <h3>Libertades Tecnológicas</h3>
              <p>Impulsamos el uso de software libre, abierto y accesible para fomentar la innovación comunitaria.</p>
            </div>
            <div className="pilar-card">
              <img src="https://img.icons8.com/color/96/security-checked.png" alt="Derechos digitales" />
              <h3>Derechos Digitales y Autor</h3>
              <p>Promovemos prácticas éticas y conocimiento en propiedad intelectual para un uso responsable de las TIC.</p>
            </div>
          </div>
        </section>

        <section className="formacion-section" id="formacion">
         <h2 className="formacion-title">📚 Formación con Electroroot</h2>

          <div className="formacion-content">
            <div className="formacion-text">
              🚐 Nuestros <span>laboratorios móviles</span> se desplazan a las comunidades rurales,
              llevando conocimiento en <span>electrónica</span> y <span>desarrollo de software</span>
              de manera práctica y cercana.  
              <br /><br />
              🌱 A través de talleres, videos, guías interactivas e instructores especializados,
              buscamos que los habitantes descubran cómo la tecnología puede convertirse en una   
              <span className="highlight">  herramienta de crecimiento personal, educativo y productivo</span>.  
              <br /><br />
              ✨ La meta es que cada sesión despierte la curiosidad y motive a los participantes
              a seguir aprendiendo, reduciendo la brecha digital y fomentando la innovación
              dentro de sus comunidades.  
            </div>

          <div className="formacion-img">
            <img src={ImageReference} alt="Laboratorio móvil Electroroot" />
          </div>
        </div>
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
