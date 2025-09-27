import { useState } from "react";
import "../App.css";

function Inscripcion() {
  const [instructores, setInstructores] = useState([]);

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
  return (
    <section id="inscripcion" className="section">
      <h2>Inscripción</h2>
      <p>Completa el formulario para inscribir tu comunidad en el programa.</p>

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
            <input type="checkbox" name="visita" value="software" /> Desarrollo
            de Software
          </label>
        </div>

        {/* Botón enviar */}
        <button type="submit">Enviar inscripción</button>
      </form>
    </section>
  );
}

export default Inscripcion;
