import { BackButton } from '@/components/BackButton'
import { SectionContacts } from '@/components/SectionContacts'
import { ProjectCard } from '@/components/SectionProjects/components/ProjectCard'
import '@/styles/pages/projects.scss'

export async function getServerSideProps() {
  const fs = require('fs')
  const projectsData = fs.readFileSync('public/data/projects.json', 'utf8')
  const projects = JSON.parse(projectsData)

  return {
    props: {
      projects: projects || null
    }
  }
}

export default function Projects({projects}: any) {
  return (
    <>
      <section
        className="section-projects"
        id="projects"
      >
        <div className="section-projects__main">
          <BackButton path="/" />
          <h1 className="main-title">Проекты</h1>
          <p className="main-subtitle">Избранные работы которые принесли мне опыт разработки</p>
        </div>
        <div className="section-projects__grid">
          {projects.data.map((project: any) => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}
        </div>
      </section>
      <SectionContacts />
    </>
  )
}
