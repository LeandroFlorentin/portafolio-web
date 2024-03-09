import CardProject from "../components/Card-Project/CardProject.jsx";
import Badge from "../components/Badge/Badge.jsx"
import { Fade } from "react-awesome-reveal";
const Proyectos = ({ reference }) => {
  let badgeProyectFlexit = ["JavaScript", "TypeScript", "React", "Node.js", "Express.js", "Sequelize", "SQLite", "PostgreSQL", "Swagger", "EC2", "S3", "CloudFront", "Jenkins", "Bootstrap", "HTML5", "CSS3", "Sass"]
  return (
    <section ref={reference} id="proyectos" className="h-auto pt-5">
      <h4 className="f-20">Experiencia</h4>
      <CardProject fecha="03-23  —  Actualidad" className="row pointer hover-card rounded no-select-text" classNameDescription="col-12 pb-3 ps-3 pe-3" classNameFecha="pt-3 ps-3 pe-3 col-12 text-start fw-parrafo">
        <div className="text-start">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h3 className="f-16 no-select-text">Desarrollador Full Stack - Flexit</h3>
              <h3 className="color-subtitulo-proyecto no-select-text f-16">Proyecto laboral</h3>
            </div>
            {/*             <a href="https://www.loom.com/share/983bb265723740b8b4f75fd8eeb2dbf1" target="_blank" className="btn btn-sm btn-custom color-on no-select-text f-16">Demo</a> */}
          </div>
          <p className="f-14 color-parrafo no-select-text">
            Me encargo del desarrollo y mantenimiento integral de aplicaciones, enfocándome en React para el front-end y utilizando Node.js
            tanto en JavaScript como en TypeScript para crear microservicios y APIs en el back-end. En cuanto a las bases de datos, estoy
            familiarizado con MySQL y SQLite. Utilizo Swagger para documentar mis APIs y microservicios, facilitando su comprensión y
            uso por parte de otros desarrolladores. Asimismo, empleo Jenkins para automatizar los despliegues en AWS, garantizando una
            implementación ágil y consistente en la nube.
          </p>
          <div className="d-flex flex-wrap">
            {badgeProyectFlexit.map((value, key) => <div key={key} className="m-1"><Fade delay={120 * key}><Badge className="no-select-text rounded-pill badge bg-custom padding-badge scale pointer" description={value} /></Fade></div>)}
          </div>
        </div>
      </CardProject>
    </section>
  )
}

export default Proyectos;