const Contacto = ({ reference }) => {
  return (
    <section ref={reference} id="contactos" className="h-auto bottom-6rem pt-4">
      <h5 className="fw-bold color-on no-select-text">Contactame!</h5>
      <p className="color-parrafo fw-parrafo no-select-text">Lo invito que ante cualquier pregunta o solicitud no dude en utilizar el formulario, estoy abierto a cualquier tipo de propuesta.</p>
    </section>
  )
}

export default Contacto;
