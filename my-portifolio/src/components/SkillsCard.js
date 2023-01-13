import React from 'react';
import PropTypes from 'prop-types';

function SkillsCard({ name, image }) {
  return (
    <div className="skill-cards">
      <p>{name}</p>
      <img
        src={ image }
        alt={ `${name} logo` }
        style={ { width: '90%' } }
      />
    </div>
  );
}

SkillsCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default SkillsCard;
