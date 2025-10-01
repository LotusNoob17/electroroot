import "../App.css";
import logogreen from "../icon_green.png";
import img1 from "../img1.png";
import { useState, useEffect } from "react";
import img2 from "../img2.png";
import img3 from "../img3.png";

function Inicio(){
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
    return(<section id="inicio">
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
              Electroroot Lab es un programa diseñado para reducir
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
        </section>)
};

export default Inicio;