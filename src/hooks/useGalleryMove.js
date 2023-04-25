import { useEffect } from 'react';

function useGalleryMove(
  containerRef,
  itemsArray,
  setItemsArray,
  refUl,
  translate
) {
  function getTranslateHandler(num) {
    const a = itemsArray.length % 3;
    if (a === 0) return false;
    if (a === 1 && num === a - 1) return true;
    if (a === 2 && num === a - 1) return true;
  }

  useEffect(() => {
    let rowNum, colNum;
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

    function setElementsFirstTime() {
      refUl.current.map((item, i) => {
        item.current.style.left = `${(i % 3) * dividedWidth}px`;
        item.current.style.top = `${Math.floor(i / 3) * dividedHeight}px`;
        return item;
      });
    }
    setElementsFirstTime();

    function horizontallyMove(row) {
      rowNum = row - 1;
      translate.map((item, index) => {
        let refPosition = refUl.current[index].current.getBoundingClientRect();

        let isRowNum =
          getOffset(refPosition).top - 20 <=
            rowNum * dividedHeight + container.top &&
          getOffset(refPosition).top + 20 >=
            rowNum * dividedHeight + container.top;

        let num = refPosition.left - translate[index].x;

        return !isRowNum
          ? item
          : refPosition.left - 10 <= container.left
          ? (item.x = dividedWidth * 2 - num + container.left)
          : (item.x -= dividedWidth);
      });
      const arr = itemsArray.map((item, i) => {
        let refPosition = refUl.current[i].current.getBoundingClientRect();

        let isRowNum =
          getOffset(refPosition).top - 20 <=
            rowNum * dividedHeight + container.top &&
          getOffset(refPosition).top + 20 >=
            rowNum * dividedHeight + container.top;

        return {
          ...item,
          props: {
            ...item.props,
            className: `${item.props.className} ${
              getOffset(refPosition).left - 10 <= container.left && isRowNum
                ? 'animation-transition-width'
                : ''
            }`,
            style: {
              ...item.props.style,
              transitionDuration:
                getOffset(refPosition).left - 10 <= container.left
                  ? '0s'
                  : '2.5s',
              transitionDelay:
                getOffset(refPosition).left - 10 <= container.left && isRowNum
                  ? '2.5s'
                  : '',
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
      }, 2.5 * 1000);
      setTimeout(() => {
        horizontallyMove(2);
      }, 16 * 1000);
      setTimeout(() => {
        horizontallyMove(3);
      }, 28 * 1000);
      setTimeout(() => {
        horizontallyMove(4);
      }, 40 * 1000);
      setTimeout(() => {
        horizontallyMove(5);
      }, 50 * 1000);
      setTimeout(() => verticalMove(1), 8 * 1000);
      setTimeout(() => verticalMove(2), 22 * 1000);
      setTimeout(() => verticalMove(3), 34 * 1000);
      setTimeout(() => verticalMove(1), 46 * 1000);
    }
    setTimOfMovement();
    setInterval(() => {
      setTimOfMovement();
    }, 54 * 1000);

    function verticalMove(col) {
      colNum = col - 1;
      translate.map((item, index) => {
        let refPosition = refUl.current[index].current.getBoundingClientRect();

        let num = getOffset(refPosition).top - translate[index].y;

        let isColNum =
          getOffset(refPosition).left + 20 >=
            colNum * dividedWidth + container.left &&
          getOffset(refPosition).left - 20 <=
            colNum * dividedWidth + container.left;

        return !isColNum
          ? item
          : getOffset(refPosition).top - 10 <= container.top
          ? (item.y =
              dividedHeight *
                Math.floor(
                  getTranslateHandler(colNum)
                    ? itemsArray.length / 3
                    : itemsArray.length / 3 - 1
                ) -
              num +
              container.top)
          : (item.y -= dividedHeight);
      });

      const arr = itemsArray.map((item, i) => {
        let refPosition = refUl.current[i].current.getBoundingClientRect();
        let isColNum =
          getOffset(refPosition).left + 20 >=
            colNum * dividedWidth + container.left &&
          getOffset(refPosition).left - 20 <=
            colNum * dividedWidth + container.left;

        return {
          ...item,
          props: {
            ...item.props,
            className: `${item.props.className} ${
              getOffset(refPosition).top - 10 <= container.top && isColNum
                ? ' animation-transition-height'
                : ''
            }`,
            style: {
              ...item.props.style,
              transitionDuration:
                getOffset(refPosition).top - 10 <= container.top
                  ? '0s'
                  : '2.5s',
              transitionDelay:
                getOffset(refPosition).top - 10 <= container.top && isColNum
                  ? '2.5s'
                  : '',
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
