const Badge = ({ className = "badge bg-primary", description = "" }) => {
  return (
    <span className={className}>{description}</span>
  )
}

export default Badge;
