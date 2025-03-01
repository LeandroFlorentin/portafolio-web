import { Zoom } from "react-awesome-reveal";
function NavBar({
  scrollToRef,
  sobreMiRef,
  habilidadesRef,
  experienciaRef,
  proyectosRef,
  contactosRef,
  activate,
  setActivate,
}) {
  let array = [
    {
      descripcion: "sobre mi",
      valor: "sobreMi",
      className: "sobreMi d-flex align-items-center pt-3 w-200px",
    },
    {
      descripcion: "habilidades",
      valor: "habilidades",
      className: "habilidades d-flex align-items-center pt-3 w-200px",
    },
    {
      descripcion: "experiencia",
      valor: "experiencia",
      className: "experiencia d-flex align-items-center pt-3 w-200px",
    },
    {
      descripcion: "proyectos",
      valor: "proyectos",
      className: "proyectos d-flex align-items-center pt-3 w-200px",
    },
    {
      descripcion: "contacto",
      valor: "contactos",
      className: "contacto d-flex align-items-center pt-3 w-200px",
    },
  ];
  return (
    <nav className="text-start">
      {array.map((value, key) => (
        <Zoom delay={150 * key} key={key}>
          <div
            className={value.className}
            onClick={() => scrollToRef(eval(value.valor + "Ref"))}
          >
            <span
              className={
                value.descripcion === activate
                  ? "line-active me-4 no-select-text"
                  : "line me-4 no-select-text"
              }
            ></span>
            <a
              className={
                value.descripcion === activate
                  ? "color-on f-14 fw-bold text-uppercase no-select-text"
                  : "color-off f-14 fw-bold text-uppercase no-select-text"
              }
            >
              {value.descripcion}
            </a>
          </div>
        </Zoom>
      ))}
    </nav>
  );
}

export default NavBar;
