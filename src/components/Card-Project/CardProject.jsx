const CardProject = ({ fecha = "", children }) => {
  return (
    <div className="d-flex">
      <div><p className="color-subtitulo-proyecto f-13">{fecha.toUpperCase()}</p></div>
      <div className="ms-4">{children}</div>
    </div>
  )
}

export default CardProject;
