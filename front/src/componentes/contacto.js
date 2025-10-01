import "../App.css";
import { useState } from "react";
import "../css/modal.css";
import { ajax } from "../utils/utils";


function Contacto() {
  const [sugerencia, setSugerencia] = useState("");
  const [listaSugerencias, setListaSugerencias] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModalError, setShowModalError] = useState(false);
const [errorMessage, setErrorMessage] = useState("La sugerencia está vacía");

  // Manejo de sugerencias
  const handleSubmit = (e) => {
    e.preventDefault();
    if (sugerencia.trim() !== "") {
      setListaSugerencias([...listaSugerencias, sugerencia]);
      setSugerencia("");
    }
  };
 const sendData = async () => {
    if(sugerencia === ''){
      setShowModalError(true);
      return;
    }
    let date = new Date();
    const data = {
      sugerencia: sugerencia,
      fecha: date.toISOString()
    };
    const res = await ajax({
      path: 'insertSugerencia',
      data_send: data,
      method: 'post'
    });
    setShowModal(true);
    setSugerencia('');
  }
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
          <button type="button" onClick={sendData}>
          Enviar sugerencia
        </button>
        </form>
       
      </div>

      {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h3>✅ Sugerencia enviada</h3>
              <p>¡Gracias!</p>
              <button onClick={() => setShowModal(false)}>Cerrar</button>
            </div>
          </div>
        )
        }

        {showModalError && (
          <div className="modal-overlay">
            <div className="modal">
              <h3>❌ {errorMessage}</h3>
              <p>Por favor verifique antes de enviar</p>
              <button onClick={() => setShowModalError(false)}>Cerrar</button>
            </div>
          </div>
        )
        }
    </section>
  );
}

export default Contacto;