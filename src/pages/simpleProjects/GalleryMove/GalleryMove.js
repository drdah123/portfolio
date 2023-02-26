import React, { createRef, useMemo, useRef, useState } from 'react';
import { projectsFrontend, projectsFullStack } from '../../../assets/data';
import useGalleryMove from '../../../hooks/useGalleryMove';
import './GalleryMove.css';
import useVisibility from '../../../hooks/useVisibility';

function GalleryMove() {
  let createRefMap = [];

  const [itemsArray, setItemsArray] = useState([]);
  const [translate, setTranslate] = useState([]);
  const [isVisible, setVisibility] = useState(false);

  let projects = [...projectsFrontend, ...projectsFullStack];
  const refUl = useRef(createRefMap);
  const containerRef = useRef(null);

  useVisibility(containerRef, setVisibility);

  useMemo(() => {
    for (let index = 0; index < projects.length; index++) {
      createRefMap.push(createRef());
    }
    for (let i = 0; i < projects.length; i++) {
      setItemsArray((prevArr) => [
        ...prevArr,
        <div
          ref={refUl.current[i]}
          className="gallery-move-list col-md-4"
          key={projects[i].title}
        >
          <img src={projects[i].imgUrl} alt="" />
        </div>,
      ]);
      setTranslate((prevNums) => [...prevNums, { y: 0, x: 0 }]);
    }
  }, []);

  useGalleryMove(
    containerRef,
    itemsArray,
    setItemsArray,
    refUl,
    translate,
    isVisible
  );

  return (
    <div
      ref={containerRef}
      className="gallery-move-container row"
      id="galleryMove"
    >
      {itemsArray}
    </div>
  );
}

export default GalleryMove;
