import CardProject from "../components/Card-Project/CardProject";
import Badge from "../components/Badge/Badge.jsx"
const Proyectos = ({ reference }) => {
  let badgeProyectFlexit = ["JavaScript", "TypeScript", "React", "Node.js", "Express.js", "SQLite", "PostgreSQL", "Swagger", "EC2", "S3", "CloudFront", "Jenkins", "HTML5", "CSS3", "Sass"]
  return (
    <section ref={reference} id="proyectos" className="h-auto top-6rem">
      <CardProject fecha="03-23  —  Actualidad" className="d-flex pointer hover-card rounded" classNameDescription="ms-4 col-8 pe-5 pt-3 pb-3" classNameFecha="col-4 ps-2 pt-3 pb-3 text-center fw-parrafo">
        <div className="text-start">
          <h3 className="f-16">Desarrollador Full Stack - Flexit</h3>
          <h3 className="color-subtitulo-proyecto f-16">Proyecto laboral</h3>
          <p className="f-14 color-parrafo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates explicabo ea vitae, consequatur nobis in veritatis earum sit est aspernatur consectetur quia, aut minus quo numquam suscipit laborum deserunt voluptatum!</p>
          <div className="d-flex flex-wrap">
            {badgeProyectFlexit.map((value, key) => <div key={key} className="m-2"><Badge className="rounded-pill badge bg-custom padding-badge scale pointer" description={value} /></div>)}
          </div>
        </div>
      </CardProject>
    </section>
  )
}

export default Proyectos;