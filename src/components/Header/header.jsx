import { Slide, Fade } from "react-awesome-reveal";
import NavBar from "../NavBar/NavBar.jsx";

const Header = ({ scrollToRef, sobreMiRef, habilidadesRef, experienciaRef, contactosRef, activate, setActivate }) => {
  return (
    <header className='h-auto row overflow-hidden'>
      <section className='text-start'>
        <Slide delay={150} direction="down">
          <h1 className="fw-bold f-48">Florentín, Leandro</h1>
        </Slide>
        <Slide delay={150} direction="left">
          <h2 className="f-20">Desarrollador Full Stack</h2>
        </Slide>
        <Slide delay={150} direction="left">
          <p className="color-parrafo fw-parrafo">Construyo aplicaciones digitales escalables y atractivas desde el punto de vista del diseño y la funcionalidad.</p>
        </Slide>
        <div className="col-12 pt-5 pb-5 d-lg-block d-none">
          <NavBar activate={activate} setActivate={setActivate} scrollToRef={scrollToRef} sobreMiRef={sobreMiRef} habilidadesRef={habilidadesRef} experienciaRef={experienciaRef} contactosRef={contactosRef} />
        </div>
        <Fade delay={400}>
          <section className="pt-3">
            <a href="https://www.linkedin.com/in/leandro-florentin/" target="_blank">
              <i className="bi bi-linkedin font-icons pointer me-4"></i>
            </a>
            <a href="https://github.com/LeandroFlorentin" target="_blank">
              <i className="bi bi-github font-icons pointer me-4"></i>
            </a>
            <span className="d-inline-block" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Disabled popover">
              <a href="./CV Leandro Florentin Full Stack Developer 2024.pdf" download>
                <i className="bi bi-filetype-pdf font-icons pointer"></i>
              </a>
            </span>
          </section>
        </Fade>
      </section>
    </header>
  )
}

export default Header;
