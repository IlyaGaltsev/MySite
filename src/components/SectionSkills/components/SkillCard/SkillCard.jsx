import './SkillCard.css';

function SkillCard({skill}) {
  return (
    <div className="skillCard">
    <img src={skill.image} alt="i" />
    <p className='w600'>{skill.name}</p>
  </div>
  );
}

export default SkillCard;