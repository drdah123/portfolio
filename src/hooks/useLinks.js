import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useLinks(refHr, refMenu, setActiveLink) {
  const location = useLocation();

  useEffect(() => {
    const curPath = window.location.hash.split('/')[1];
    console.log('🚀 ~ file: NavBar.js:25 ~ useEffect ~ curPath', curPath);
    setActiveLink(curPath);

    console.log(refHr);
    // make sure when click home the line disappear
    curPath
      ? (refHr.current.style.display = 'block')
      : (refHr.current.style.display = 'none');

    if (curPath === 'skills') {
      refHr.current.style.left = `${
        refMenu.current.querySelectorAll('a')[0].offsetLeft
      }px`;
      refHr.current.style.width = `${
        refMenu.current.querySelectorAll('a')[0].offsetWidth
      }px`;
    } else if (curPath === 'projects') {
      refHr.current.style.left = `${
        refMenu.current.querySelectorAll('a')[1].offsetLeft
      }px`;
      refHr.current.style.width = `${
        refMenu.current.querySelectorAll('a')[1].offsetWidth
      }px`;
    } else if (curPath === 'simple-projects') {
      refHr.current.style.left = `${
        refMenu.current.querySelectorAll('a')[3].offsetLeft
      }px`;
      refHr.current.style.width = `${
        refMenu.current.querySelectorAll('a')[3].offsetWidth
      }px`;
    } else if (curPath === 'certifications') {
      refHr.current.style.left = `${
        refMenu.current.querySelectorAll('a')[2].offsetLeft
      }px`;
      refHr.current.style.width = `${
        refMenu.current.querySelectorAll('a')[2].offsetWidth
      }px`;
    }
  }, [location]);
}

export default useLinks;
