import React, { useState } from 'react';
import Project from './Project';
import projects from './projectData';

function Portfolio() {
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [showMoreClicked, setShowMoreClicked] = useState(false);

  const showMoreProjects = () => {
    setVisibleProjects(visibleProjects + 4);
    setShowMoreClicked(true);
  };

  const showLessProjects = () => {
    setVisibleProjects(4);
  };

  return (
    <section className="portfolio-section" id="portfolio-section">
      <h2>Portfolio</h2>
      <ul id="portfolio-list">
        {projects.slice(0, visibleProjects).map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </ul>
      {projects.length > visibleProjects && (
        <button id="show-more-button" onClick={showMoreProjects}>
          Show More
        </button>
      )}
      {showMoreClicked && (
        <button id="show-less-button" onClick={showLessProjects}>
          Show Less
        </button>
      )}
    </section>
  );
}

export default Portfolio;
