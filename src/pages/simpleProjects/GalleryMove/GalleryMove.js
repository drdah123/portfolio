import React, { createRef, useMemo, useRef, useState } from 'react';
import { projectsFrontend, fullStackProjects } from '../../../assets/data';
import useGalleryMove from '../../../hooks/useGalleryMove';
import './GalleryMove.css';
import useVisibility from '../../../hooks/useVisibility';
import { Col } from 'react-bootstrap';

function GalleryMove() {
  let createRefMap = [];

  const [itemsArray, setItemsArray] = useState([]);
  const [translate, setTranslate] = useState([]);
  const [isVisible, setVisibility] = useState(false);

  let projects = useMemo(() => [...projectsFrontend, ...fullStackProjects], []);
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
        <Col
          xs={4}
          ref={refUl.current[i]}
          className="gallery-move-list"
          key={projects[i].title}
        >
          <img src={projects[i].imgUrl} alt="" />
        </Col>,
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
      className="gallery-move-container row mb-5"
      id="galleryMove"
    >
      {itemsArray}
    </div>
  );
}

export default GalleryMove;
