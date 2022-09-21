import React from 'react';
import './SectionSkills.css';
import Moment from "react-moment";
// import skillsYear from '../../data/skillsYear';
// import SkillCard from './components/SkillCard/SkillCard';
// import skillsMonth from '../../data/skillsMonth';
import skillsDop from '../../data/skillsOther';
import SkillOtherCard from './components/SkillOtherCard/SkillOtherCard';

function SectionSkills() {
  return (
    <div className="section-skill__wrapper" id='skills'>
      <h2 className='section-skill__title'>Технологический стек на <span className='primary-color'><Moment format="DD.MM.YY" interval={10000}/></span></h2>
      <p className='section-skill__text'>
      Так как я постоянно развиваюсь список будет периодически наполняться новыми технологиями. Так же помимо всех этих навыков проходил стажировку в дизайн студии где получил много опыта, а именно работа в команде и базовые знания по UX/UI дизайну
      </p>
      {/* Мне нравится работать над различными технологиями, включая веб-разработку и разработку мобильных приложений. Моя цель - создавать приложения, которые решают реальные проблемы и облегчают жизнь пользователям. */}
      <div className="section-skill__wrapperframe">
      {/* <div className="section-skill__skills">
        <p className='skills__title'>Более года</p>
        <div className='skills__wrapper'>
        {skillsYear.map(skill => <SkillCard id={skill.id} skill={skill}/>)}
        </div>
      </div>

      <div className="section-skill__skills">
        <p className='skills__title'>Более 7 месяцев</p>
        <div className='skills__wrapper'>
        {skillsMonth.map(skill => <SkillCard id={skill.id} skill={skill}/>)}
        </div>
      </div> */}
      
      <div className="section-skill__skills skills-other">
        <p className='skills__title'>Я владею:</p>
        <div className='skills-other__wrapper'>
          {skillsDop.map(skill => <SkillOtherCard id={skill.id} name={skill.name}/>)}
        </div>
      </div>
      </div>

      
    </div>
  );
}

export default SectionSkills;