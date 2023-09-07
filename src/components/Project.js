import React from 'react';

function Project({ project }) {
  return (
    <li>
      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
        <img src={project.imageSrc} alt={project.title} />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </a>
    </li>
  );
}

export default Project;
