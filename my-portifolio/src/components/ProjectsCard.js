import React from 'react';
import PropTypes from 'prop-types';

function ProjectsCard({ name, image, repo, deploy }) {
  const handleClick = ({ target }) => {
    const options = {
      repository: () => window.open(repo),
      deploy: () => window.open(deploy),
    };
    options[target.name]();
  };

  return (
    <div className="project-card">
      <img
        src={ image }
        alt={ `${name} logo` }
        style={ { width: '100%' } }
      />
      <p>{name}</p>
      <div className="buttons">
        <button
          type="button"
          name="repository"
          onClick={ handleClick }
        >
          Repo
        </button>
        {deploy && (
          <button
            type="button"
            name="deploy"
            onClick={ handleClick }
          >
            Demo
          </button>
        )}
      </div>
    </div>
  );
}

ProjectsCard.defaultProps = {
  deploy: '',
};

ProjectsCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  deploy: PropTypes.string,
};

export default ProjectsCard;
