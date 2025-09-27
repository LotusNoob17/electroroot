import React from "react";
import "../App.css"; // si usas el mismo CSS global

function Evidencias() {
  return (
    <section id="evidencias" className="section" >
      <h2 className="App-title">📸 Evidencias</h2>
      <div className="gallery">
        <img src="https://via.placeholder.com/250" alt="Evidencia 1" />
        <img src="https://via.placeholder.com/250" alt="Evidencia 2" />
        <img src="https://via.placeholder.com/250" alt="Evidencia 3" />
      </div>
    </section>
  );
}

export default Evidencias;