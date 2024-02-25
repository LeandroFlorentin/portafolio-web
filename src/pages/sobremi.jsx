const Sobremi = ({ reference }) => {
  return (
    <section ref={reference} id="sobre-mi" className="top-6rem h-auto">
      <p className="color-parrafo fw-parrafo">
        A principios de 2022 decidí darle una oportunidad a la programación. Después de mucho estudio
        y completar cursos en CoderHouse y SoyHenry (que puedes ver en mi <a href="https://www.linkedin.com/in/leandro-florentin/" target="_blank">Linkedin</a>), aprendí los fundamentos del desarrollo Full Stack. Hoy en día, he tenido el privilegio
        de crear software para una start-up de logística, donde puse en práctica todos mis conocimientos y también aprendí muchas herramientas nuevas
        y he mejorado considerablemente como profesional.
      </p>
      <hr />
      <p className="color-parrafo fw-parrafo">
        Mi principal enfoque es el de crear aplicaciones Full Stack utilizando React para el diseño web y Node.js (JavaScript y TypeScript) para construir
        microservicios y APIs. Trabajo con MySQL y SQLite para las bases de datos. También me encargo de mantener y mejorar estas aplicaciones con
        el tiempo. Utilizo Swagger para documentar mis APIs y Jenkins para automatizar los despliegues en AWS (EC2, S3, CloudFront).
      </p>
      <hr />
      <p className="color-parrafo fw-parrafo">
        Cuando no estoy frente a la computadora, generalmente estoy en el gimnasio, leyendo, pasando tiempo con mis gatos y perros o jugando fútbol.
      </p>
    </section>
  )
}

export default Sobremi;