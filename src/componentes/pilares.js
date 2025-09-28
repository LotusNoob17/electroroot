import "../App.css";

function Pilares() {
  return (
        <section id="pilares" className="section pilares">
          <h2>Pilares de Sensibilización</h2>
          <div className="pilares-grid">
            <div className="pilar-card">
              <img
                src="https://img.icons8.com/?size=100&id=5s7R5DwJr50s&format=png&color=000000"
                alt="Diversidad e inclusión digital"
              />
              <h3>Diversidad e Inclusión Digital</h3>
              <p>
                Reducimos brechas digitales a través de herramientas que
                empoderan a todas las comunidades desde un enfoque diferencial.
              </p>
            </div>
            <div className="pilar-card">
              <img
                src="https://img.icons8.com/?size=100&id=3ocMa88iyjQR&format=png&color=000000"
                alt="Tecnología y medio ambiente"
              />
              <h3>Tecnología y Medio Ambiente</h3>
              <p>
                Promovemos prácticas sostenibles que fortalezcan la relación
                entre tecnología y cuidado del entorno natural.
              </p>
            </div>
            <div className="pilar-card">
              <img
                src="https://img.icons8.com/color/96/open-source.png"
                alt="Libertades tecnológicas"
              />
              <h3>Libertades Tecnológicas</h3>
              <p>
                Impulsamos el uso de software libre, abierto y accesible para
                fomentar la innovación comunitaria.
              </p>
            </div>
            <div className="pilar-card">
              <img
                src="https://img.icons8.com/color/96/security-checked.png"
                alt="Derechos digitales"
              />
              <h3>Derechos Digitales y Autor</h3>
              <p>
                Promovemos prácticas éticas y conocimiento en propiedad
                intelectual para un uso responsable de las TIC.
              </p>
            </div>
          </div>
        </section>
  );
}

export default Pilares;
