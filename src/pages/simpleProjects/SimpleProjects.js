import React from 'react';
import './SimpleProjects.css';
import BooksReview from './BooksReview/BooksReview';
import DragAndDrop from './DragAndDrop/DragAndDrop';
import GalleryMove from './GalleryMove/GalleryMove';
import ProductCardCycle from './ProductCardCycle/ProductCardCycle';
import CreditCard from './CreditCard/CreditCard';
function SimpleProjects() {
  return (
    <div className="simple-projects-container">
      <BooksReview />
      <DragAndDrop />
      <GalleryMove />
      <ProductCardCycle />
      <CreditCard />
    </div>
  );
}

export default SimpleProjects;
