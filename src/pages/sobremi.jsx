const Sobremi = ({ reference }) => {
  return (
    <section ref={reference} id="sobre-mi" className="top-6rem h-auto">
      <h5 className="fw-bold no-select-text f-20">Sobre mí</h5>
      <p className="color-parrafo fw-parrafo f-16">Comencé a mediados de 2021 aprendiendo HTML y CSS de forma autodidacta. Luego avancé con JavaScript tanto en el Frontend como en el Backend, desarrollando un enfoque Full Stack.</p>
      <hr />
      <p className="color-parrafo fw-parrafo f-16">Me enfoco en desarrollar aplicaciones Full Stack con React y Node.js (JavaScript/TypeScript), creando microservicios y APIs conectados a bases de datos como PostgeSQL, MySQL y SQLite. Mantengo y optimizo las aplicaciones, documentando APIs con Swagger, realizando tests unitarios e integración con Jest, y automatizando despliegues en AWS con Jenkins y Docker, siguiendo metodologías ágiles SCRUM.</p>
      <hr />
      <p className="color-parrafo fw-parrafo f-16">Me adapto rápido a nuevas herramientas y entornos, y disfruto mucho cuando hay oportunidades para aprender cosas nuevas y seguir mejorando mis habilidades. Me gusta trabajar en equipo y aportar tanto en lo técnico como en lo humano.</p>
      <hr />
      <p className="color-parrafo fw-parrafo f-16">Más allá de las tecnologías, me gusta enfocarme en escribir código limpio, escalable y fácil de mantener, siempre buscando optimizar la performance y la velocidad de respuesta para el cliente.</p>
    </section>
  );
};

export default Sobremi;
