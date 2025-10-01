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
          <div className="App-content">
            <div>
              <img
                src={img4}
                className="App-img4"
                alt="Laboratorio móvil Electroroot"
              />
            </div>
            <div className="App-pr">
              <h2>Misión</h2>
              <p>
                El programa Electroroot Lab tiene como misión llevar la innovación 
                y el conocimiento tecnológico a las zonas rurales, mediante laboratorios 
                móviles y recursos digitales accesibles. Buscamos formar a las comunidades 
                en áreas de electrónica, software y tecnologías emergentes, promoviendo 
                la confianza en el uso de herramientas digitales y generando oportunidades 
                de desarrollo personal, educativo y productivo.
              </p>
            </div>
          </div>
          <div className="App-content">
            <div className="App-pr">
              <h2>Visión</h2>
              <p>
                Para el año 2030, Electroroot Lab será reconocido como un programa líder en 
                inclusión digital rural en Colombia, reduciendo significativamente la brecha 
                tecnológica entre el campo y la ciudad. Aspiramos a consolidar comunidades 
                rurales más autónomas, capacitadas y conectadas, capaces de integrar las TIC 
                en sus procesos educativos, sociales y económicos, fortaleciendo así la innovación 
                y el progreso en los territorios más apartados del país.
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
          <div className="valores">
            <h2>Valores Institucionales</h2>
            <div className="valores-grid">
              <div className="valor-card">
                <h3>Equidad</h3>
                <p>
                  Garantizamos acceso a la formación tecnológica sin importar la
                  ubicación geográfica.
                </p>
              </div>

              <div className="valor-card">
                <h3>Innovación</h3>
                <p>
                  Promovemos el uso creativo y práctico de la tecnología como herramienta
                  de transformación.
                </p>
              </div>

              <div className="valor-card">
                <h3>Compromiso social</h3>
                <p>
                  Trabajamos para mejorar la calidad de vida de las comunidades rurales.
                </p>
              </div>

              <div className="valor-card">
                <h3>Inclusión</h3>
                <p>
                  Fomentamos la participación de todos los sectores de la comunidad en el
                  proceso de aprendizaje.
                </p>
              </div>

              <div className="valor-card">
                <h3>Sostenibilidad</h3>
                <p>
                  Impulsamos el uso responsable de los recursos tecnológicos y humanos
                  para asegurar un impacto a largo plazo.
                </p>
              </div>

              <div className="valor-card">
                <h3>Colaboración</h3>
                <p>
                  Construimos conocimiento de manera conjunta con los habitantes,
                  respetando sus saberes y tradiciones.
                </p>
              </div>
            </div>
          </div>

        </section>
    )
};

export default Programa;