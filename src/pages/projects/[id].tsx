import Image from 'next/image'
import { useRouter } from 'next/router'
import '@/styles/pages/project.scss'
import { BackButton } from '@/components/BackButton'
import { SectionContacts } from '@/components/SectionContacts'
import { useSelector } from 'react-redux'
import { RootState } from '@react-three/fiber'
import styles from '@/styles/global.module.scss'
import Head from 'next/head'
import { AiOutlineGlobal } from 'react-icons/ai'

export async function getServerSideProps({ params }: any) {
  const fs = require('fs')
  const projectsData = fs.readFileSync('public/data/projects.json', 'utf8')
  const projects = await JSON.parse(projectsData)

  console.log('params', params.id)
  const project = projects.data.find(({ id }: any) => id === Number(params.id))

  return {
    props: {
      project: project || null,
      projects: projects || null
    }
  }
}

export default function Project({ project, projects }: any) {
  const router = useRouter()
  const screenSize = useSelector((state: any) => state.screen.screenSize) as any

  const redirectToMore = (path: string) => {
    window.open(path, '_blank')
  }

  return (
    <main>
      <Head>
        <title>{project.title}</title>
        <meta
          name="keywords"
          content="разработчик сайтов, веб разработчик, сделать сайт, купить сайт, разработчик веб и мультимедийных приложений, сделать мобильное приложение, MVP"
        />
      </Head>
      <section className="project__wrapper">
        <BackButton />
        {project !== null && (
          <div className="project-main__wrapper">
            
            <h1 className={styles.h1} style={{marginBottom: 20}}>{project.fullTitle}</h1>
            <div className={styles.actions}>
            {project.github && (
              <button onClick={() => redirectToMore(project.github)}>
                <span>
                  Github  
                  <AiOutlineGlobal size={20} />
                </span>
              </button>
            )}
            {project.deploy && (
              <button onClick={() => redirectToMore(project.deploy)}>
                <span>
                  Сайт  
                  <AiOutlineGlobal size={20} />
                </span>
              </button>
            )}
          </div>
            <div className="project-main__image" style={{marginTop: 70}}>
              <Image
                src={project.image}
                height={400}
                width={600}
                alt={project?.fullTitle}
              />
            </div>
            {project !== null &&
              project !== undefined &&
              project.description.map((text: string, index: number) => {
                return (
                  <>
                    <p key={index}>{text}</p> <br />
                  </>
                )
              })}
          </div>
        )}
      </section>
      <SectionContacts />
    </main>
  )
}
