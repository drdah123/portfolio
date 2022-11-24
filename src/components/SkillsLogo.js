import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import MernLogo from '../assets/img2/pngaaa.com-7365622.png';
import redux from '../assets/img2/redux.svg';
import reactNative from '../assets/img2/react-native-1.svg';
import mongoose from '../assets/img2/7552965.png';
import nextjs from '../assets/img2/next-js.svg';
import mongoDB from '../assets/img2/mongodb-logo-svgrepo-com.svg';
import expressjs from '../assets/img2/Express-JS-min.png';
import materiallUi from '../assets/img2/material-ui-1.svg';

import {
  faBootstrap,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNode,
  faReact,
} from '@fortawesome/free-brands-svg-icons';

const SkillsLogo = () => {
  return (
    <div className="cubespinner-container">
      <div className="cubespinner">
        <div className="face1">
          <FontAwesomeIcon icon={faGitAlt} color="#DD0031" />
        </div>
        <div className="face2">
          <FontAwesomeIcon icon={faHtml5} color="#F06529" />
        </div>
        <div className="face3">
          <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
        </div>
        <div className="face4">
          <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
        </div>
        <div className="face5">
          <img src={mongoDB} alt="mern-logo" />
        </div>
        <div className="face6">
          <img src={mongoose} alt="mern-logo" />
        </div>
        <div className="face7">
          <img src={reactNative} alt="mern-logo" />
        </div>
        <div className="face8">
          <FontAwesomeIcon icon={faNode} color="green" />
        </div>
        <div className="face9">
          <img src={nextjs} alt="mern-logo" />
        </div>
        <div className="face10">
          <img src={MernLogo} alt="mern-logo" />
        </div>
        <div className="face11">
          <FontAwesomeIcon icon={faBootstrap} color="#753aa2" />
        </div>
        <div className="face12">
          <img src={redux} alt="mern-logo" />
        </div>
        <div className="face13">
          <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
        </div>
        <div className="face14">
          <img src={expressjs} alt="mern-logo" />
        </div>
        <div className="face15">
          <img src={materiallUi} alt="mern-logo" />
        </div>
      </div>
    </div>
  );
};

export default SkillsLogo;
