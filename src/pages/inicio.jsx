import { useRef } from 'react';
import Contacto from "./contacto.jsx";
import Habilidades from "./habilidades.jsx";
import Proyectos from "./proyectos.jsx";
import Sobremi from './sobremi.jsx';
import Header from '../components/Header/header.jsx';

function Inicio() {
  const sobreMiRef = useRef(null);
  const habilidadesRef = useRef(null);
  const proyectosRef = useRef(null);
  const contactosRef = useRef(null);
  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <div className='background-main g-0'>
      <div className='left-6rem right-6rem row m-0 d-flex'>
        <div className='top-6rem bottom-6rem col-5 d-lg-block d-md-none h-100 navbar-sticky container-header'>
          <Header scrollToRef={scrollToRef} habilidadesRef={habilidadesRef} proyectosRef={proyectosRef} contactosRef={contactosRef} sobreMiRef={sobreMiRef} />
        </div>
        <div className='top-6rem bottom-6rem col-12 d-md-block d-lg-none h-100 container-header'>
          <Header scrollToRef={scrollToRef} habilidadesRef={habilidadesRef} proyectosRef={proyectosRef} contactosRef={contactosRef} sobreMiRef={sobreMiRef} />
        </div>
        <main className='left-6rem col-lg-7 col-12 col-md-12'>
          <Sobremi reference={sobreMiRef} />
          <Habilidades reference={habilidadesRef} />
          <Proyectos reference={proyectosRef} />
          <Contacto reference={contactosRef} />
        </main>
      </div>
    </div >
  );
}

export default Inicio;