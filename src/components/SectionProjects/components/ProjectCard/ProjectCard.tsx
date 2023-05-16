import { AiOutlineGlobal, AiOutlineGithub } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'
import './ProjectCard.scss'

interface IProject {
  image: string
  id: any
  path?: any
  title: any
  description: any
  deploy: any
  github: any
  technologies: any
}

const ProjectCard = ({
  image,
  id,
  path,
  title,
  description,
  deploy,
  github,
  technologies
}: IProject) => {
  return (
    <Link href={`/projects/${id}`} className='project-card'>
      <Image width={420} height={286} src={image} alt={`prewiew ${title}`} />
      <div className='project-card__contant'>
        <div>
          <h3>{title}</h3>
          <div className='project-card__actions'>
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
        <BsArrowRight size={32} className='project-card__icon' />
      </div>
    </Link>
  )
}

export { ProjectCard }
