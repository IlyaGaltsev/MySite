import { SectionAbout } from '../components/SectionAbout'
import { SectionSkills } from '../components/SectionSkills'
import { SectionContacts } from '../components/SectionContacts'
import '@/styles/pages/main.scss'
import { SectionWorks } from '@/components/Home/SectionWorks'

export default function Home() {

  return (
    <main>
      <SectionAbout />
      <SectionSkills />
      <SectionWorks />
      <SectionContacts />
    </main>
  )
}