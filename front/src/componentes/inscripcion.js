import { useState } from "react";
import { ajax } from "../utils/utils";
import "../App.css";
import "../css/modal.css";

function Inscripcion() {
  const [instructores, setInstructores] = useState([]);
  const [municipio, setMunicipio] = useState('');
  const [vereda, setVereda] = useState('');
  const [horario, setHorario] = useState('');
  const [usuario, setUsuario] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showModalError, setShowModalError] = useState(false);
const [errorMessage, setErrorMessage] = useState("Todos los campos deben estar diligenciados");
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

  const sendData = async () => {
    if(instructores.length === 0 || municipio === '' || vereda === '' || horario === '' || usuario === ''){
      setShowModalError(true);
      return;
    }
    let date = new Date();
    if(new Date(horario) < date){
      setErrorMessage('La fecha y hora seleccionadas deben ser futuras.');
      setShowModalError(true);

      return;
    }
    let splitHorario = horario.split("T");
    let fecha = splitHorario[0];
    const data = {
      nombre: usuario,
      comunidad: vereda,
      municipio: municipio,
      campo: instructores.join(", "),
      fecha: fecha
    };
    const res = await ajax({
      path: 'insertData',
      data_send: data,
      method: 'post'
    });
    setShowModal(true);
    setHorario('');
    setInstructores([]);
    setMunicipio('');
    setVereda('');
    setUsuario('');
  }
  return (
    <section id="inscripcion" className="section">
      <h2>Inscripción</h2>
      <p>Completa el formulario para inscribir tu comunidad en el programa.</p>

      <form className="form-inscripcion">
        {/* Selección de municipio */}
        <label htmlFor="municipio">Municipio:</label>
        <select
          id="municipio"
          name="municipio"
          value={municipio}
          onChange={(e) => setMunicipio(e.target.value)}
        >
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
          value={vereda}
          onChange={(e) => setVereda(e.target.value)}
        />

        {/* Selección de instructores */}
        <label>Instructor(es):</label>
        <div className="checkbox-group-vertical">
          <label>
            <input
              type="checkbox"
              value="Juan Pérez — Electrónica"
              onChange={handleInstructorChange}
              checked={instructores.includes("Juan Pérez — Electrónica")}
            />
            Juan Pérez — Electrónica
          </label>
          <label>
            <input
              type="checkbox"
              value="María Gómez — Desarrollo de Software"
              onChange={handleInstructorChange}
              checked={instructores.includes("María Gómez — Desarrollo de Software")}
            />
            María Gómez — Desarrollo de Software
          </label>
          <label>
            <input
              type="checkbox"
              value="Carlos Ramírez — Redes y Telecomunicaciones"
              onChange={handleInstructorChange}
              checked={instructores.includes("Carlos Ramírez — Redes y Telecomunicaciones")}
            />
            Carlos Ramírez — Redes y Telecomunicaciones
          </label>
          <label>
            <input
              type="checkbox"
              value="Ana Rodríguez — Robótica Educativa"
              onChange={handleInstructorChange}
              checked={instructores.includes("Ana Rodríguez — Robótica Educativa")}
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
          value={horario}
          onChange={(e) => setHorario(e.target.value)}
          disabled={instructores.length === 0}
        />

        {/* Nombre del representante */}
        <label htmlFor="representante">Nombre del representante:</label>
        <input
          type="text"
          id="representante"
          name="representante"
          placeholder="Ingrese el nombre del representante"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />

        {/* Botón enviar */}
        <button type="button" onClick={sendData}>
          Enviar inscripción
        </button>
        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h3>✅ Inscripción enviada</h3>
              <p>¡Gracias por registrarte!</p>
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
      </form>
    </section>


  );
}

export default Inscripcion;
