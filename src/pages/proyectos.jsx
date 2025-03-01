import CardProject from "../components/Card-Project/CardProject.jsx";
import Badge from "../components/Badge/Badge.jsx";
import { Fade } from "react-awesome-reveal";
const Proyectos = ({ reference }) => {
  let badgeProyectAuth = [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Sequelize",
    "JWT",
    "Swagger",
  ];
  return (
    <section ref={reference} id="proyectos" className="h-auto pt-5">
      <h4 className="f-20">Proyectos</h4>
      <CardProject
        fecha="03/23  —  10/24"
        className="row pointer hover-card rounded no-select-text"
        classNameDescription="col-12 pb-3 ps-3 pe-3"
        classNameFecha="pt-3 ps-3 pe-3 col-12 text-start fw-parrafo"
      >
        <div className="text-start">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h3 className="f-16 no-select-text">
                Servicio de autenticación y autorización
              </h3>
              <h3 className="color-subtitulo-proyecto no-select-text f-16">
                Proyecto personal
              </h3>
            </div>
            <a
              href="https://github.com/LeandroFlorentin/service-auth"
              target="_blank"
              className="btn btn-sm btn-custom color-on no-select-text f-14"
            >
              GitHub
            </a>
          </div>
          <p className="f-14 color-parrafo no-select-text">
            Este proyecto es un microservicio de autenticación que implementa
            JWT para gestionar el acceso seguro de los usuarios. Permite el
            registro, inicio de sesión y gestión de usuarios, asegurando la
            protección de rutas mediante middlewares de autenticación. Utiliza
            bcrypt para encriptar contraseñas y un manejo centralizado de
            errores para mayor robustez. Su estructura modular facilita la
            escalabilidad y mantenimiento, proporcionando una base segura para
            la autenticación en sistemas basados en microservicios.
          </p>
          <div className="d-flex flex-wrap">
            {badgeProyectAuth.map((value, key) => (
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
    </section>
  );
};

export default Proyectos;
