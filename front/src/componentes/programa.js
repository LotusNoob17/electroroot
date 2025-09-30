import "../App.css";
import img4 from "../img4.png";

function Programa(){
    return(
                <section id="programa" className="section">
          <div className="App-content">
            <div className="App-pr">
              <h2>ELECTROROOT LAB</h2>
              <h2>¿Qué es ELECTROROOT LAB?</h2>
              <p>
                Electroroot Lab es un programa gubernamental diseñado para
                reducir la brecha digital en comunidades rurales mediante la
                implementación de laboratorios móviles especializados en la
                enseñanza de tecnologías emergentes.
              </p>
              <p>
                Su enfoque principal se centra en la formación práctica en áreas
                de electrónica y desarrollo de software, buscando que los
                habitantes rurales adquieran competencias tecnológicas
                aplicables a su vida diaria, educativa y productiva.
              </p>
            </div>
            <div>
              <img
                src={img4}
                className="App-img4"
                alt="Laboratorio móvil Electroroot"
              />
            </div>
          </div>
        </section>
    )
};

export default Programa;