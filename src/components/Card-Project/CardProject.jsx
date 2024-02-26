const CardProject = ({ fecha = "", children, className = "d-flex", classNameDescription = "color-subtitulo", classNameFecha = "col-4" }) => {
  return (
    <div className={className}>
      <div className={classNameFecha}><p className="color-subtitulo-proyecto f-13">{fecha.toUpperCase()}</p></div>
      <div className={classNameDescription}>{children}</div>
    </div>
  )
}

export default CardProject;
