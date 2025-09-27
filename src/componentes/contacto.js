import "../App.css";
import { useState } from "react";

function Contacto() {
  const [sugerencia, setSugerencia] = useState("");
  const [listaSugerencias, setListaSugerencias] = useState([]);

  // Manejo de sugerencias
  const handleSubmit = (e) => {
    e.preventDefault();
    if (sugerencia.trim() !== "") {
      setListaSugerencias([...listaSugerencias, sugerencia]);
      setSugerencia("");
    }
  };

  return (
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
  );
}

export default Contacto;