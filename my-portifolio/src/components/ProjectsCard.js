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
    <div>
      <p>{name}</p>
      <img src={ image } alt={ `${name} logo` } />
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
