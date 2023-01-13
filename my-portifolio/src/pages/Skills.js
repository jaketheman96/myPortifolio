import React from 'react';
import SkillsCard from '../components/SkillsCard';
import skills from '../infos/skills';
import '../style/Skills.style.css';

function Skills() {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="all-skills-cards">
        {skills.map((skill, index) => (
          <SkillsCard
            key={ index }
            name={ skill.name }
            image={ skill.image }
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
