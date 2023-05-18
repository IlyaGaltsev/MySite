import { ProjectCard } from './components/ProjectCard'
import './SectionProjects.css'

const SectionProjects = ({projects}) => {
  return (
    <section className='section-projects' id='projects'>
      <h2 className='app-title-h2'>Проекты</h2>
      <div className='section-projects__grid'>
        {projects.data.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}

export { SectionProjects }
