import './ProjectCard.css'
import { AiOutlineGlobal, AiOutlineGithub } from 'react-icons/ai'

const ProjectCard = ({ image, title, description, deploy, github, technologies }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <div className="project-card__tech-tags">
        {technologies.map(tech => (
          <span>{tech}</span>
        ))}
      </div>
      <img
        src={image}
        alt={`prewiew ${title}`}
      />
      <div className="project-card__actions">
        {github && (
          <button>
            <span>
              Github  
              <AiOutlineGithub size={20} />
            </span>
          </button>
        )}
        {deploy && (
          <button>
            <span>
              Deploy  
              <AiOutlineGlobal size={20} />
            </span>
          </button>
        )}
      </div>
    </div>
  )
}

export { ProjectCard }
