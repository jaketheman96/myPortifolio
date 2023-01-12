import React from 'react';
import SkillsCard from '../components/SkillsCard';
import skills from '../datas/skills';

function Skills() {
  return (
    <div className="skills">
      {skills.map((skill, index) => (
        <SkillsCard
          key={ index }
          name={ skill.name }
          image={ skill.image }
        />
      ))}
    </div>
  );
}

export default Skills;
