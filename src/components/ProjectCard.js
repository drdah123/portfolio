import React from 'react';
import navIcon2 from '../assets/img/nav-icon2.png';
import { useStateContext } from '../context/context';

const ProjectCard = ({ title, description, imgUrl, appUrl, gitUrl }) => {
  const { currentHover, handleHoverProj } = useStateContext();
  const handleHover = () => handleHoverProj(title);

  return (
    <article
      className={`proj-imgbx ${
        currentHover && currentHover !== title ? 'd-none' : ''
      } ${currentHover && currentHover === title ? 'd-invisible-proj' : ''}`}
      onMouseEnter={handleHover}
    >
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
    </article>
  );
};

export default ProjectCard;
