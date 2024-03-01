function NavBarCelu({ scrollToRef, sobreMiRef, habilidadesRef, experienciaRef, contactosRef, activate, setActivate }) {
  let array = [
    { descripcion: "sobre mi", valor: "sobreMi", className: "sobreMi d-flex align-items-center justify-content-center pt-3 w-200px" },
    { descripcion: "habilidades", valor: "habilidades", className: "habilidades d-flex align-items-center justify-content-center pt-3 w-200px" },
    { descripcion: "experiencia", valor: "experiencia", className: "experiencia d-flex align-items-center justify-content-center pt-3 w-200px" },
    { descripcion: "contacto", valor: "contactos", className: "contacto d-flex align-items-center justify-content-center pt-3 w-200px" }
  ];
  return (
    <nav className='d-flex justify-content-between background-main ps-2 pe-2 pt-3 pb-3'>
      {array.map((value, key) => (
        <div key={key} className={value.className} onClick={() => scrollToRef(eval(value.valor + "Ref"))}>
          <a className={value.descripcion === activate ? "color-on f-navbar fw-bold text-uppercase no-select-text" : 'color-off f-navbar fw-bold text-uppercase no-select-text'}>{value.descripcion}</a>
        </div>
      ))}
    </nav>
  );
}

export default NavBarCelu;