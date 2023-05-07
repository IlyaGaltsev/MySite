import './ProjectCard.scss'
import { AiOutlineGlobal, AiOutlineGithub } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ProjectCard = ({ image, path, title, description, deploy, github, technologies }) => {
  return (
    <Link to={'/projects/1'} className="project-card">
      <img
        src={image}
        alt={`prewiew ${title}`}
      />
      <div className="project-card__contant">
        <div>
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
        <BsArrowRight size={32} className="project-card__icon"/>
      </div>
    </Link>
  )
}

export { ProjectCard }
