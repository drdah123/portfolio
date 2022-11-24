import React from 'react';
import navIcon2 from '../assets/img/nav-icon2.png';

const ProjectCard = ({
  title,
  description,
  imgUrl,
  appUrl,
  gitUrl,
  gitUrlB,
}) => {
  return (
    <div className="proj-imgbx">
      <img src={imgUrl} alt="" />

      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
        <div className="proj-urls">
          <div>
            <a href={appUrl} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          </div>
          <div className="proj-urls-git-link">
            <a href={gitUrl} target="_blank" rel="noopener noreferrer">
              <img src={navIcon2} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
