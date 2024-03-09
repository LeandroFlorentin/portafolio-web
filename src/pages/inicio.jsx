import { useRef, useState, useEffect } from 'react';
import Contacto from "./contacto.jsx";
import Habilidades from "./habilidades.jsx";
import Experiencia from "./experiencia.jsx";
import Sobremi from './sobremi.jsx';
import Header from '../components/Header/header.jsx';
import NavBarCelu from "../components/NavBarCelu/NavBarCelu.jsx";
import { useMediaQuery } from "react-responsive";
import { Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from "react-awesome-reveal";

function Inicio() {
  const media = useMediaQuery({ query: "(min-width:769px)" });
  const mediaLg = useMediaQuery({ query: "(min-width:1440px)" })
  const sobreMiRef = useRef(null);
  const habilidadesRef = useRef(null);
  const experienciaRef = useRef(null);
  const contactosRef = useRef(null);
  const [activeSection, setActiveSection] = useState('sobre mi');
  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sobreMiOffset = sobreMiRef.current.offsetTop;
      const habilidadesOffset = habilidadesRef.current.offsetTop;
      const experienciaOffset = experienciaRef.current.offsetTop;
      const contactosOffset = contactosRef.current.offsetTop;
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      const bottomScrollPosition = scrollTop + windowHeight;
      let activeSection = '';
      if (scrollTop === 0 || bottomScrollPosition === documentHeight) {
        activeSection = scrollTop === 0 ? 'sobre mi' : 'contacto';
      } else {
        if (scrollPosition < habilidadesOffset) {
          activeSection = 'sobre mi';
        } else if (scrollPosition < experienciaOffset) {
          activeSection = 'habilidades';
        } else if (scrollPosition < contactosOffset) {
          activeSection = 'experiencia';
        } else {
          activeSection = 'contacto';
        }
      }
      setActiveSection(activeSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  return (
    <div className='background-main g-0'>
      <div className='d-block d-lg-none sticky-top'><NavBarCelu activate={activeSection} scrollToRef={scrollToRef} habilidadesRef={habilidadesRef} experienciaRef={experienciaRef} contactosRef={contactosRef} sobreMiRef={sobreMiRef} /></div>
      <div className='left-6rem right-6rem row m-0 d-flex'>
        <div className='top-6rem bottom-6rem col-5 d-lg-block d-none  h-100 navbar-sticky container-header'>
          <Header activate={activeSection} setActivate={setActiveSection} scrollToRef={scrollToRef} habilidadesRef={habilidadesRef} experienciaRef={experienciaRef} contactosRef={contactosRef} sobreMiRef={sobreMiRef} />
        </div>
        <div className='top-6rem col-12 d-block d-lg-none h-auto container-header'>
          <Header activate={activeSection} setActivate={setActiveSection} scrollToRef={scrollToRef} habilidadesRef={habilidadesRef} experienciaRef={experienciaRef} contactosRef={contactosRef} sobreMiRef={sobreMiRef} />
        </div>
        <main className={`${media ? "left-6rem" : ""} col-lg-7 col-12 col-md-12`}>
          <div className={!mediaLg ? "pt-5" : ""}>
            <Fade delay={200}>
              <Sobremi reference={sobreMiRef} />
            </Fade>
          </div>
          <div className={mediaLg ? "pt-5" : ""}>
            <Fade delay={200}>
              <Habilidades reference={habilidadesRef} />
            </Fade>
          </div>
          <div className={mediaLg ? "pt-5" : ""}>
            <Fade delay={200}>
              <Experiencia reference={experienciaRef} />
            </Fade>
          </div>
          <div className={mediaLg ? "pt-5" : ""}>
            <Fade delay={200}>
              <Contacto reference={contactosRef} />
            </Fade>
          </div>
        </main>
      </div>
    </div >
  );
}

export default Inicio;