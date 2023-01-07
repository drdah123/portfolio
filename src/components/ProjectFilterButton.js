import React from 'react';

const ProjectFilterButton = ({
  currentProject,
  handleReact,
  img,
  categoryName,
}) => {
  return (
    <>
      <button
        className={`
        ${currentProject ? 'active' : ''}
        `}
        onClick={() => handleReact(categoryName)}
        title={categoryName}
      >
        {categoryName === 'all' ? img : <img src={img} alt="" />}
      </button>
    </>
  );
};

export default ProjectFilterButton;
