import './ProjectCard.scss'
import { AiOutlineGlobal, AiOutlineGithub } from 'react-icons/ai'

const ProjectCard = ({ image, title, description, deploy, github, technologies }) => {
  return (
    <div className="project-card">
      <img
        src={image}
        alt={`prewiew ${title}`}
      />
      <h3>{title}</h3>
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
              Сайт  
              <AiOutlineGlobal size={20} />
            </span>
          </button>
        )}
      </div>
    </div>
  )
}

export { ProjectCard }
