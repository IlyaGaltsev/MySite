import { BackButton } from '@/components/BackButton'
import { SectionContacts } from '@/components/SectionContacts'
import { ProjectCard } from '@/components/SectionProjects/components/ProjectCard'
import '@/styles/pages/projects.scss'
import fs from 'fs'
import path from 'path'
import styles from '@/styles/global.module.scss'
import Head from 'next/head'

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), 'public/data/projects.json')
  const jsonData = fs.readFileSync(filePath, 'utf8')
  const projects = JSON.parse(jsonData)

  return {
    props: {
      projects
    }
  }
}

export default function Projects({ projects }: any) {
  return (
    <main>
      <Head>
        <title>Проекты</title>
        <meta
          name="description"
          content="Посмотрите мои проекты и свяжитесь со мной для сотрудничества."
        />
        <meta
          name="keywords"
          content="разработчик сайтов, веб разработчик, сделать сайт, купить сайт, разработчик веб и мультимедийных приложений, сделать мобильное приложение, MVP"
        />
      </Head>
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
    </main>
  )
}
