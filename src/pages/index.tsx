import { SectionAbout } from '../components/SectionAbout'
import { SectionSkills } from '../components/SectionSkills'
import { SectionContacts } from '../components/SectionContacts'
import '@/styles/pages/main.scss'
import { SectionWorks } from '@/components/Home/SectionWorks'

import fs from 'fs'
import path from 'path'
import Head from 'next/head'

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), 'public/data/skills.json')
  const jsonData = fs.readFileSync(filePath, 'utf8')
  const skills = JSON.parse(jsonData)

  return {
    props: {
      skills
    }
  }
}

export default function Home({ skills }: any) {
  return (
    <main>
      <Head>
        <title>Главная - веб разрабочик Илья Гальцев</title>
        <meta
          name="description"
          content="Привет, я React разработчик со знаниями React Native, CLI, Expo, Node.js Next.js и Firebase. Посмотрите мои проекты и свяжитесь со мной для сотрудничества."
        />
        <meta
          name="keywords"
          content="разработчик сайтов, веб разработчик, сделать сайт, купить сайт, разработчик веб и мультимедийных приложений, сделать мобильное приложение, MVP"
        />
      </Head>
      <SectionAbout />
      <SectionSkills skills={skills} />
      <SectionWorks />
      <SectionContacts />
    </main>
  )
}
