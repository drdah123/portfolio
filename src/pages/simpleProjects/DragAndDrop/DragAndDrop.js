import React, { useState } from 'react';
import './DragAndDrop.css';
import { dragAndDropData } from '../../../assets/simplePoroject/data';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

function DragAndDrop() {
  function dragHandler(param) {
    const srcI = param.source.index;
    const desI = param.destination?.index;
    if (desI || desI === 0) {
      const rep = dragAndDropData.splice(srcI, 1)[0];
      dragAndDropData.splice(desI, 0, rep);
    }
  }
  return (
    <div className="drop">
      <div className="drop_container" id="drop-items">
        <DragDropContext onDragEnd={dragHandler}>
          <Droppable droppableId="droppable-1">
            {(provided, _) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {dragAndDropData.map((item, i) => (
                  <Draggable
                    key={item.id}
                    draggableId={'draggable-' + item.id}
                    index={i}
                  >
                    {(provided, snapshot) => (
                      <div
                        className="drop_card"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className="drop_data">
                          <img src={item.img} alt="img1" className="drop_img" />

                          <div>
                            <h1 className="drop_name">{item.name}</h1>
                            <span className="drop_profession">
                              {item.profession}
                            </span>
                          </div>
                        </div>

                        <div>
                          <a href="#." className="drop_social">
                            <i className="bx bxl-instagram"></i>
                          </a>
                          <a href="#." className="drop_social">
                            <i className="bx bxl-facebook"></i>
                          </a>
                          <a href="#." className="drop_social">
                            <i className="bx bxl-twitter"></i>
                          </a>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default DragAndDrop;
