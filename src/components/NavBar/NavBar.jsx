import { useState } from "react";
const NavBar = ({ scrollToRef, sobreMiRef, habilidadesRef, proyectosRef, contactosRef }) => {
  const [seteo, setSeteo] = useState({
    "sobre mi": true,
    habilidades: false,
    proyectos: false,
    contacto: false
  })
  function tipoScroll(description) {
    switch (description) {
      case "sobre mi": return scrollToRef(sobreMiRef);
      case "habilidades": return scrollToRef(habilidadesRef);
      case "proyectos": return scrollToRef(proyectosRef);
      case "contacto": return scrollToRef(contactosRef);
      default: return "";
    }
  }
  function cambiarSeteo(description) {
    tipoScroll(description);
    let objeto = { ...seteo };
    for (let key in objeto) {
      if (key === description) objeto[key] = true;
      else objeto[key] = false;
    }
    setSeteo(objeto);
  }
  let array = [
    { descripcion: "sobre mi", className: "sobreMi d-flex align-items-center pt-3" },
    { descripcion: "habilidades", className: "habilidades d-flex align-items-center pt-3" },
    { descripcion: "proyectos", className: "proyectos d-flex align-items-center pt-3" },
    { descripcion: "contacto", className: "contacto d-flex align-items-center pt-3" }
  ]
  return (
    <nav className='text-start'>
      {
        array.map((value, key) => (
          <div key={key} className={value.className} onClick={() => cambiarSeteo(value.descripcion)}>
            <span className={seteo[value.descripcion] ? "line-active me-4 no-select-text" : 'line me-4 no-select-text'}></span>
            <a className={seteo[value.descripcion] ? "color-on f-14 fw-bold text-uppercase no-select-text" : 'color-off f-14 fw-bold text-uppercase no-select-text'}>{value.descripcion}</a>
          </div>
        ))
      }
    </nav>
  )
}

export default NavBar;
