import "../css/formacionestilo.css";
import ImageReference from "../imagenes/Image_reference.png";

function Formacion() {
  return (
    <section className="formacion-section" id="formacion">
      <h2 className="formacion-title">📚 Formación con Electroroot</h2>

      <div className="formacion-content">
        <div className="formacion-text">
          🚐 Nuestros <span>laboratorios móviles</span> se desplazan a las
          comunidades rurales, llevando conocimiento en{" "}
          <span>electrónica</span> y <span>desarrollo de software</span> de
          manera práctica y cercana.
          <br />
          <br />
          🌱 A través de talleres, videos, guías interactivas e instructores
          especializados, buscamos que los habitantes descubran cómo la
          tecnología puede convertirse en una{" "}
          <span className="highlight">
            herramienta de crecimiento personal, educativo y productivo
          </span>
          .
          <br />
          <br />
          ✨ La meta es que cada sesión despierte la curiosidad y motive a los
          participantes a seguir aprendiendo, reduciendo la brecha digital y
          fomentando la innovación dentro de sus comunidades.
        </div>

        <div className="formacion-img">
          <img
            src={ImageReference}
            alt="Laboratorio móvil Electroroot"
          />
        </div>
      </div>
    </section>
  );
}

export default Formacion;
