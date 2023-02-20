import React from 'react';
import './SimpleProjects.css';
import BooksReview from './BooksReview/BooksReview';
import DragAndDrop from './DragAndDrop/DragAndDrop';
import GalleryMove from './GalleryMove/GalleryMove';
function SimpleProjects() {
  return (
    <div className="simple-projects-container">
      <BooksReview />
      <DragAndDrop />
      <GalleryMove />
    </div>
  );
}

export default SimpleProjects;
