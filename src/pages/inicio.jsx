import { useRef, useState, useEffect } from 'react';
import Contacto from "./contacto.jsx";
import Habilidades from "./habilidades.jsx";
import Experiencia from "./experiencia.jsx";
import Sobremi from './sobremi.jsx';
import Header from '../components/Header/header.jsx';
import NavBarCelu from "../components/NavBarCelu/NavBarCelu.jsx";
import { useMediaQuery } from "react-responsive";

function Inicio() {
  const media = useMediaQuery({ query: "(min-width:769px)" });
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
      if (scrollPosition < habilidadesOffset) {
        setActiveSection('sobre mi');
      } else if (scrollPosition < experienciaOffset) {
        setActiveSection('habilidades');
      } else if (scrollPosition < contactosOffset) {
        setActiveSection('experiencia');
      } else {
        setActiveSection('contacto');
      }
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
          <Sobremi reference={sobreMiRef} />
          <Habilidades reference={habilidadesRef} />
          <Experiencia reference={experienciaRef} />
          <Contacto reference={contactosRef} />
        </main>
      </div>
    </div >
  );
}

export default Inicio;