const Sobremi = ({ reference }) => {
  return (
    <section ref={reference} id="sobre-mi" className="top-6rem h-auto">
      <h5 className="fw-bold no-select-text f-20">Sobre mí</h5>
      <p className="color-parrafo fw-parrafo f-16">
        A principios de 2022, comencé mi viaje en la programación y empecé
        estudiando por mi cuenta las bases de HTML y CSS de forma autodidacta.
        Más adelante, continué aprendiendo JavaScript tanto para el Frontend
        como para el Backend, fortaleciendo mis habilidades en desarrollo Full
        Stack. Actualmente, aplico mis conocimientos en una startup enfocada en
        inteligencia artificial.
      </p>
      <hr />
      <p className="color-parrafo fw-parrafo f-16">
        Mi principal enfoque es la creación de aplicaciones Full Stack
        utilizando React para el diseño web y Node.js (JavaScript y TypeScript)
        para construir microservicios y APIs. Trabajo con MySQL y SQLite para la
        gestión de bases de datos. También me encargo de mantener y mejorar
        estas aplicaciones con el tiempo. Utilizo Swagger para documentar mis
        APIs y Jenkins para automatizar los despliegues en AWS (EC2, S3,
        CloudFront).
      </p>
      <hr />
      <p className="color-parrafo fw-parrafo f-16">
        Actualmente, me encuentro desempeñando tareas de integración de terceros
        con OAuth, como Instagram y Facebook, entre otros, configurando sus
        aplicaciones para enlazar los webhooks a Lambdas y así interactuar
        automáticamente con los usuarios. También realizo scraping de páginas
        web para obtener información y comunicar de manera eficiente y rápida
        los productos y servicios de los clientes de la empresa.
      </p>
      <hr />
      <p className="color-parrafo fw-parrafo f-16">
        Cuando no estoy frente a la computadora, generalmente estoy en el
        gimnasio, leyendo, pasando tiempo con mis gatos y perros o jugando
        fútbol.
      </p>
    </section>
  );
};

export default Sobremi;
