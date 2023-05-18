import Image from 'next/image'
import { useRouter } from 'next/router'
import '@/styles/pages/project.scss'
import { BackButton } from '@/components/BackButton'
import { SectionContacts } from '@/components/SectionContacts'

export async function getServerSideProps({ params }: any) {
  const fs = require('fs')
  const projectsData = fs.readFileSync('public/data/projects.json', 'utf8')
  const projects = await JSON.parse(projectsData)

  console.log('params', params.id)
  const project =  projects.data.find(({ id }: any) => id === Number(params.id))
 

  return {
    props: {
      project: project || null,
      projects: projects || null
    }
  }
}

export default function Project({project,  projects }: any) {
  const router = useRouter()
  console.log(router)
  // const project =  projects.data.find(({ id }: any) => id === Number(router.query.id))

  // const project = useMemo(() => {
  //   if (projects) return null
  //  const  findProject =  projects.data.find(({ id }: any) => id === Number(router.query.id))

  //  console.log("useMemo",project)
  //   return findProject || null
  // }, [projects, router.query.id] )

  console.log(projects)
  console.log(project)


  return (
    <main>
      <section className="project__wrapper">
        <BackButton />
        {project !== null && <div className="project-main__wrapper">
          <h1>{project.fullTitle}</h1>
          <div className="project-main__image">
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
        </div>}
      </section>
      <SectionContacts/>
    </main>
  )
}
