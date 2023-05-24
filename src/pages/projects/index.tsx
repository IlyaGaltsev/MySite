import { BackButton } from '@/components/BackButton'
import { SectionContacts } from '@/components/SectionContacts'
import { ProjectCard } from '@/components/SectionProjects/components/ProjectCard'
import '@/styles/pages/projects.scss'
import fs from 'fs';
import path from 'path';
import styles from '@/styles/global.module.scss'

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), 'public/data/projects.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const projects = JSON.parse(jsonData);

  return {
    props: {
      projects,
    },
  };
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
          <h1 className={`main-title ${styles.h1Page}`}>Проекты</h1>
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
