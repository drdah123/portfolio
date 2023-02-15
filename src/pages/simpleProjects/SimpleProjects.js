import React from 'react';
import './SimpleProjects.css';
import BooksReview from './BooksReview/BooksReview';
import DragAndDrop from './DragAndDrop/DragAndDrop';
function SimpleProjects() {
  return (
    <div className="simple-projects-container">
      <BooksReview />
      <DragAndDrop />
    </div>
  );
}

export default SimpleProjects;
