import { BackButton } from '@/components/BackButton'
import '@/styles/pages/projects.scss'

export default function Blogs() {
  return (
    <section className='section-projects' id='projects'>
      <div className='section-projects__main'>
        <BackButton path='/' />
        <h1 className='main-title'>Мысли вслух</h1>
        <p className='main-subtitle'>
          Накапливая опыт разработки, появились мысли которыми стоит поделиться
        </p>
      </div>
      <div className='section-projects__grid'>
        {/* {projects.data.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))} */}
      </div>
    </section>
  )
}
