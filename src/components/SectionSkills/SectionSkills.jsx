import React from 'react'
import './SectionSkills.scss'
import SkillCard from './components/SkillCard/SkillCard'
import frontend from "../../assets/icons/frontend.svg"
import mobile from "../../assets/icons/mobile.svg"
import backend from "../../assets/icons/backend.svg"

const SectionSkills = () => {
  const skills = [
    {
      image: frontend,
      title: 'Frontend',
      description: 'Мой опыт в веб-разработке включает в себя создание более 5 масштабируемых веб-приложений',
      techs: ['React', 'Vue', 'Nuxt', 'TypeScript', 'SCSS', 'Styled-components', 'Antd', 'Mui']
    },
    {
      image: mobile,
      title: 'Mobile',
      description: 'С изучением React пришел навык использования React-Native, написав несколько приложений понял что он достаточно медленный и пришел в Swift',
      techs: ['React-Native CLI', 'Expo', 'SwiftUi']
    },
    {
      image: backend,
      title: 'Backend',
      description: 'В процессе разработки стало скучно разрабатывать интерфейсы со статическими данными, в связи с этим начал подключать firebase. По итогу его гибкости стало не хватать. В итоге приступил к освоению Node.js',
      techs: ['Firebase', 'Node.js', 'Expess']
    }
  ]
  return (
    <section
      className="section-skills"
      id="skills"
    >
      <h2 className="app-title-h2">Навыки</h2>
      <div className="section-skills__wrapper">
        {skills.map(skill => <SkillCard key={skill.title} {...skill}/>)}
      </div>
    </section>
  )
}

export { SectionSkills }
