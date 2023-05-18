import { SectionAbout } from '../components/SectionAbout'
import { SectionSkills } from '../components/SectionSkills'
import { SectionContacts } from '../components/SectionContacts'
import '@/styles/pages/main.scss'
import { SectionWorks } from '@/components/Home/SectionWorks'

import fs from 'fs'
import path from 'path';

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), 'public/data/skills.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const skills = JSON.parse(jsonData);

  return {
    props: {
      skills,
    },
  };
}

export default function Home({skills}: any) {

  return (
    <main>
      <SectionAbout />
      <SectionSkills skills={skills} />
      <SectionWorks />
      <SectionContacts />
    </main>
  )
}