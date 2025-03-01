import CardProject from "../components/Card-Project/CardProject.jsx";
import Badge from "../components/Badge/Badge.jsx";
import { Fade } from "react-awesome-reveal";
import cardsProjects from "../data/experiencia/index.js";
const Proyectos = ({ reference }) => {
  return (
    <section ref={reference} id="proyectos" className="h-auto pt-5">
      <h4 className="f-20">Experiencia</h4>
      {cardsProjects.map((card, key) => (
        <CardProject
          fecha={card.fecha}
          className="row pointer hover-card rounded no-select-text"
          classNameDescription="col-12 pb-3 ps-3 pe-3"
          classNameFecha="pt-3 ps-3 pe-3 col-12 text-start fw-parrafo"
          key={key}
        >
          <div className="text-start">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h3 className="f-16 no-select-text">{card.titulo}</h3>
                <h3 className="color-subtitulo-proyecto no-select-text f-16">
                  {card.proyecto}
                </h3>
              </div>
              {/*             <a href="https://www.loom.com/share/983bb265723740b8b4f75fd8eeb2dbf1" target="_blank" className="btn btn-sm btn-custom color-on no-select-text f-16">Demo</a> */}
            </div>
            <p className="f-14 color-parrafo no-select-text">
              {card.descripcion}
            </p>
            <div className="d-flex flex-wrap">
              {card.badges.map((value, key) => (
                <div key={key} className="m-1">
                  <Fade delay={120 * key}>
                    <Badge
                      className="no-select-text rounded-pill badge bg-custom padding-badge scale pointer"
                      description={value}
                    />
                  </Fade>
                </div>
              ))}
            </div>
          </div>
        </CardProject>
      ))}
    </section>
  );
};

export default Proyectos;
