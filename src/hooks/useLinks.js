import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useLinks(refHr, refMenu, setActiveLink) {
  const location = useLocation();
  const [isFirstTime] = useState({
    skills: true,
    projects: true,
    'simple-projects': true,
    certifications: true,
  });

  useEffect(() => {
    const curPath = window.location.hash.split('/')[1];
    setActiveLink(curPath);

    // make sure when click home and connect the line disappear
    refHr.current.style.display = 'block';
    const minus = isFirstTime[curPath] ? 10 : 0;
    function getElementProperties(n) {
      const element = refMenu.current.querySelectorAll('a')[n];
      return {
        left: element.offsetLeft - minus,
        width: element.offsetWidth,
      };
    }

    if (curPath === 'skills') {
      refHr.current.style.left = `${getElementProperties(0).left}px`;
      refHr.current.style.width = `${getElementProperties(0).width}px`;
    } else if (curPath === 'projects') {
      refHr.current.style.left = `${getElementProperties(1).left}px`;
      refHr.current.style.width = `${getElementProperties(1).width}px`;
    } else if (curPath === 'simple-projects') {
      refHr.current.style.left = `${getElementProperties(3).left}px`;
      refHr.current.style.width = `${getElementProperties(3).width}px`;
    } else if (curPath === 'certifications') {
      refHr.current.style.left = `${getElementProperties(2).left}px`;
      refHr.current.style.width = `${getElementProperties(2).width}px`;
    } else {
      refHr.current.style.display = 'none';
    }

    isFirstTime[curPath] = false;
  }, [location]);
}

export default useLinks;
