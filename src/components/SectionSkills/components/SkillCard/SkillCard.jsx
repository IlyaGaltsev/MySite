import Image from 'next/image'
import './SkillCard.scss'

function SkillCard({ image, title, description, techs }) {
  return (
    <div className='skills-card'>
      <Image src={image} width={155} height={90} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className='skills-card__techs'>
        {techs.map(tech => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </div>
  )
}

export default SkillCard
