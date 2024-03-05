import { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Notiflix from "notiflix";
const Contacto = ({ reference }) => {
  const formRef = useRef(null);
  const handleCopyText = () => {
    const inputElement = document.getElementById('inputField');
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  };
  const { formState: { errors }, handleSubmit, register, setValue, getValues } = useForm({
    defaultValues: {
      email: "",
      nombre: "",
      mensaje: ""
    }
  })
  function onSubmit() {
    try {
      emailjs.sendForm("service_ktd8uku", "template_jirmkfp", formRef.current, "1EkX72i3uLvtYWoR3").then(res => {
        setValue("email", "");
        setValue("nombre", "");
        setValue("mensaje", "");
      })
      Notiflix.Notify.success('Enviado con exito.', {
        position: 'right-bottom'
      })
    } catch (error) {
      console.log("error", error)
      Notiflix.Notify.failure("Error al enviar email")
      throw error;
    }
  }
  useEffect(() => {
    Notiflix.Notify.init({
      success: {
        background: "#2dd4bf1a",
        textColor: "#5eead4",
        notiflixIconColor: "#5eead4",
        fontAwesomeIconColor: "#5eead4"
      }
    })
  }, [])
  return (
    <section ref={reference} id="contactos" className="h-auto bottom-6rem pt-5">
      <h5 className="fw-bold color-on no-select-text f-20">Contactame!</h5>
      <hr />
      <div className="p-2">
        <h5 className="f-16"><i classname="bi bi-person-fill color-on me-2"></i>Florentín Leandro.</h5>
        <h5 className="f-16 pt-1"><i classname="bi bi-house-fill color-on me-2"></i>Argentina, Buenos Aires, Quilmes.</h5>
        <div className="d-flex position-relative pt-1">
          <input
            id="inputField"
            className="w-100 ps-2 pe-2 active-custom form-control"
            type="text"
            value="leandro.florentin@hotmail.com"
            readOnly
          />
          <button className="btn btn-transparent position-absolute direction" onClick={handleCopyText}><i className="bi bi-copy color-on"></i></button>
        </div>
      </div>
      <hr />
      <p className="color-parrafo fw-parrafo no-select-text f-16">Lo invito que ante cualquier pregunta o solicitud no dude en utilizar el formulario, estoy abierto a cualquier tipo de propuesta.</p>
      <form ref={formRef} className="form row" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-12 col-md-6">
          <label htmlFor="nombre" className="d-block color-on fw-bold no-select-text f-16">Nombre</label>
          <input className="w-100 ps-2 pe-2 active-custom form-control" type="text" name="nombre"  {...register("nombre", { required: true })} />
          {errors.nombre && <div className="w-100 text-danger mt-1">Campo obligatorio</div>}
        </div>
        <div className="col-12 col-md-6">
          <label htmlFor="email" className="d-block color-on fw-bold no-select-text f-16">Email</label>
          <input className="w-100 ps-2 pe-2 active-custom form-control" type="text" name="email"  {...register("email", { required: true })} />
          {errors.email && <div className="w-100 text-danger mt-1">Campo obligatorio</div>}
        </div>
        <div className="col-12 mt-1">
          <label htmlFor="mensaje" className="d-block color-on fw-bold no-select-text f-16">Mensaje</label>
          <textarea className="text-area w-100 ps-2 pe-2 active-custom form-control" type="text" name="mensaje"  {...register("mensaje", { required: true })} />
          {errors.mensaje && <div className="w-100 text-danger mt-1">Campo obligatorio</div>}
        </div>
        <div>
          <button type="submit" className="mt-4 btn btn-custom btn-sm w-100 f-14">Enviar</button>
        </div>
      </form>
    </section>
  )
}

export default Contacto;
