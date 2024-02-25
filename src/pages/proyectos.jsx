import CardProject from "../components/Card-Project/CardProject";
const Proyectos = ({ reference }) => {
  return (
    <section ref={reference} id="proyectos" className="h-auto top-6rem">
      <CardProject fecha="03-23  —  Actualidad">
        <div>
          <h3 className="f-16">Desarrollador Full Stack - Flexit</h3>
          <h3 className="color-subtitulo-proyecto f-16">Proyecto laboral</h3>
          <p className="f-14 color-parrafo"></p>
        </div>
      </CardProject>
    </section>
  )
}

export default Proyectos;