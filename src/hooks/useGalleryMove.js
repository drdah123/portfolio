import { useEffect } from 'react';

function useGalleryMove(
  containerRef,
  itemsArray,
  setItemsArray,
  refUl,
  translate,
  isVisible
) {
  useEffect(() => {
    const container = containerRef.current.getBoundingClientRect();
    const dividedHeight = container.height / 5;

    const dividedWidth = container.width / 3;

    function getOffset(element) {
      const rect = element;

      return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY,
      };
    }

    function horizontallyMove(row) {
      let rowNum = row - 1;
      translate.map((item, index) => {
        let refPosition = refUl.current[index].current.getBoundingClientRect();

        let isRowNum =
          getOffset(refPosition).top <=
            rowNum * dividedHeight + container.top + 20 &&
          getOffset(refPosition).top >= rowNum * dividedHeight + container.top;

        let num = getOffset(refPosition).left - translate[index].x;

        return !isRowNum
          ? item
          : getOffset(refPosition).left <= container.left
          ? (item.x = dividedWidth * 2 - num + container.left)
          : (item.x -= dividedWidth);
      });
      const arr = itemsArray.map((item, i) => {
        let refPosition = refUl.current[i].current.getBoundingClientRect();

        return {
          ...item,
          props: {
            ...item.props,
            style: {
              ...item.props.style,
              transitionDuration:
                getOffset(refPosition).left - 10 <= container.left
                  ? '0s'
                  : '0.75s',
              transform: `translate3d(${translate[i].x}px,${translate[i].y}px,0)`,
            },
          },
        };
      });
      setItemsArray([...arr]);
    }
    function setTimOfMovement() {
      setTimeout(() => {
        horizontallyMove(1);
      }, 2500);
      setTimeout(() => {
        horizontallyMove(2);
      }, 7500);
      setTimeout(() => {
        horizontallyMove(4);
      }, 12500);
      setTimeout(() => {
        horizontallyMove(3);
      }, 17500);
      setTimeout(() => verticalMove(1), 1000);
      setTimeout(() => verticalMove(2), 4000);
      setTimeout(() => verticalMove(3), 10000);
      setTimeout(() => verticalMove(1), 15000);
    }
    // setTimOfMovement();
    // const setI = setInterval(() => {
    //   setTimOfMovement();
    // }, 20000);

    function verticalMove(col) {
      let colNum = col - 1;
      translate.map((item, index) => {
        let refPosition = refUl.current[index].current.getBoundingClientRect();

        let num = getOffset(refPosition).top - translate[index].y;

        let isColNum =
          getOffset(refPosition).left + 5 >=
            colNum * dividedWidth + container.left &&
          getOffset(refPosition).left <=
            colNum * dividedWidth + container.left + 20;

        return !isColNum
          ? item
          : getOffset(refPosition).top - 10 <= container.top
          ? (item.y = dividedHeight * 4 - num + container.top)
          : (item.y -= dividedHeight);
      });
      const arr = itemsArray.map((item, i) => {
        let refPosition = refUl.current[i].current.getBoundingClientRect();

        return {
          ...item,
          props: {
            ...item.props,
            style: {
              ...item.props.style,
              transitionDuration:
                getOffset(refPosition).top - 10 <= container.top
                  ? '0s'
                  : '0.75s',
              transform: `translate3d(${translate[i].x}px,${translate[i].y}px,0)`,
            },
          },
        };
      });

      setItemsArray([...arr]);
    }
  }, []);
}

export default useGalleryMove;
