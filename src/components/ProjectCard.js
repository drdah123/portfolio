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
    </article>
  );
};

export default ProjectCard;
