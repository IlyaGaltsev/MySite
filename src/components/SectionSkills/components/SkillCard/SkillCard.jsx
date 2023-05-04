import './SkillCard.scss'

function SkillCard({ image, title, description, techs }) {
  return (
    <div className="skills-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="skills-card__techs">
        {techs.map(tech => (
          <span>{tech}</span>
        ))}
      </div>
    </div>
  )
}

export default SkillCard
