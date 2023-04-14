import "./SkillCard.css";

function SkillCard({ icon, name }) {
  return (
    <div className="skills__card">
      <img src={icon} alt="card_image" />
      <p>{name}</p>
    </div>
  );
}

export default SkillCard;
