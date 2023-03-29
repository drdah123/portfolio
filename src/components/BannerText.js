import React, { useEffect, useState } from 'react';

const BannerText = ({
  setText,
  toRotate,
  text,
  speed,
  textSize,
  emptyContent,
}) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updateText === fullText) {
      setDelta(period);
      setIsDeleting(true);
    } else if (isDeleting && updateText === '') {
      setDelta(speed || 500);
      setLoopNum(loopNum + 1);
      setIsDeleting(false);
    }
  };
  return (
    <>
      {emptyContent ? 'If God ' : null}
      <label className={`rotate-size-${textSize ? 0 : ''}`}>{text}</label>
    </>
  );
};

export default BannerText;
