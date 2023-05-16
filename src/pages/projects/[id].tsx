import { SectionAbout } from '@/components/Projects/SectionAbout'
import Image from 'next/image'
import { useRouter } from 'next/router'

export async function getServerSideProps() {
  const fs = require('fs')
  const projectsData = fs.readFileSync('public/data/projects.json', 'utf8')
  const projects = JSON.parse(projectsData)

  return {
    props: {
      projects
    }
  }
}

export default function Project({ projects }: any) {
  const router = useRouter()

  const project = projects.data.find(
    ({ id }: any) => id === Number(router.query.id)
  )

  return (
    <main>
      <SectionAbout title={project.title} imagePath={project?.image} />
      <p>{project !== null && project !== undefined && project.description}</p>
    </main>
  )
}
