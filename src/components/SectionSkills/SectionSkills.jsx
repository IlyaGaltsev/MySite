import './SectionSkills.scss'
import SkillCard from './components/SkillCard/SkillCard'
import * as skills from '@/data/skills.json'

const SectionSkills = () => {
  console.log(skills)
  return (
    <section
      className="section-skills"
      id="skills"
    >
      <h2 className="app-title-h2">Навыки</h2>
      <div className="section-skills__wrapper">
        {skills !== null &&
          skills !== undefined &&
          skills.data.map(skill => (
            <SkillCard
              key={skill.title}
              {...skill}
            />
          ))}
      </div>
    </section>
  )
}

export { SectionSkills }
