import { BackButton } from '@/components/BackButton'
import { ProjectCard } from '@/components/SectionProjects/components/ProjectCard'
import projects from '@/data/projects.json'
import '@/styles/pages/projects.scss'

export default function Projects() {
  return (
    <section className='section-projects' id='projects'>
      <div className='section-projects__main'>
        <BackButton path='/'/>
        <h1 className='main-title'>Проекты</h1>
        <p className='main-subtitle'>
          Избранные работы которые принесли мне опыт разработки
        </p>
      </div>
      <div className='section-projects__grid'>
        {projects.data.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}
