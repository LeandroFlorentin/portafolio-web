import CardProject from "../components/Card-Project/CardProject.jsx";
import Badge from "../components/Badge/Badge.jsx"
const Proyectos = ({ reference }) => {
  let badgeProyectFlexit = ["JavaScript", "TypeScript", "React", "Node.js", "Express.js", "SQLite", "PostgreSQL", "Swagger", "EC2", "S3", "CloudFront", "Jenkins", "HTML5", "CSS3", "Sass"]
  return (
    <section ref={reference} id="proyectos" className="h-auto top-6rem">
      <CardProject fecha="03-23  —  Actualidad" className="row pointer hover-card rounded no-select-text" classNameDescription="col-12 pb-3 ps-3 pe-3" classNameFecha="pt-3 ps-3 pe-3 col-12 text-start fw-parrafo">
        <div className="text-start">
          <h3 className="f-16 no-select-text">Desarrollador Full Stack - Flexit</h3>
          <h3 className="color-subtitulo-proyecto no-select-text f-16">Proyecto laboral</h3>
          <p className="f-14 color-parrafo no-select-text">
            Me encargo del desarrollo y mantenimiento integral de aplicaciones, enfocándome en React para el front-end y utilizando Node.js
            tanto en JavaScript como en TypeScript para crear microservicios y APIs en el back-end. En cuanto a las bases de datos, estoy
            familiarizado con MySQL y SQLite. Utilizo Swagger para documentar mis APIs y microservicios, facilitando su comprensión y
            uso por parte de otros desarrolladores. Asimismo, empleo Jenkins para automatizar los despliegues en AWS, garantizando una
            implementación ágil y consistente en la nube.
          </p>
          <div className="d-flex flex-wrap">
            {badgeProyectFlexit.map((value, key) => <div key={key} className="m-1"><Badge className="no-select-text rounded-pill badge bg-custom padding-badge scale pointer" description={value} /></div>)}
          </div>
        </div>
      </CardProject>
    </section>
  )
}

export default Proyectos;