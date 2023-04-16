import React from "react";
import "./SectionSkills.css";
import { skills } from "../../data/skills";
import SkillCard from "./components/SkillCard/SkillCard";

const SectionSkills = () => {
  return (
    <section className="section-skills" id="skills">
      <div className="section-skills__hard-skills">
      <h2>Hard Skills|</h2>
      <div className="hard-skills__list">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
      </div>
    </section>
  );
};

export { SectionSkills };
