import React from 'react';

function ProjectFilterButton({
  currentProject,
  handleReact,
  img,
  categoryName,
}) {
  return (
    <>
      <button
        className={`
        ${currentProject === categoryName ? 'active-filter' : ''}
        `}
        onClick={(e) => handleReact(categoryName)}
        title={categoryName}
      >
        {categoryName === 'all' ? img : <img src={img} alt="" />}
      </button>
    </>
  );
}

export default ProjectFilterButton;
