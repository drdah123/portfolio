import amazona from './img2/amazona.jpg';
import medicalChat from './img2/medical-chat.jpg';
import noteApp from './img2/note-app.jpg';
import meoryGame from './img2/memoy-game.jpg';
import quizApp from './img2/quiz-app.jpg';
import weatherApp from './img2/weather app.jpg';
import dashboard from './img2/dashboard.jpg';
import protfolioanimation from './img2/protofolio-animation.jpg';
import lucidClone from './img2/Screenshot_20221117_075533.png';
import yuotubeClone from './img2/youtube clone.jpg';
import calendar from './img2/calendar.jpg';
import ecommerceNext from './img2/ecommerce-sanity-nextjs.jpg';
import twitterC from './img2/twitter-clone.jpg';
import CarouselProjects from '../components/CarouselProjects';
import ReduxCart from '../assets/img2/react-redux-smiple-cart.png';
import pdfIntroduction from './pdf/Introduction to Front-End Development.png';
import programWithJS from './pdf/Programming with JavaScript.jpeg';
import versionC from './pdf/Version Control.jpeg';
import inDepth from './pdf/HTML and CSS in depth.jpeg';
import reactBsics from './pdf/React Basics.jpeg';
import reactAdvance from './pdf/Advanced React.jpeg';
import PrinciplesUX_UI from './pdf/principles of UX UI Design.jpeg';
import Capstone from './pdf/Front-End Developer Capstone.jpeg';

export const certifications = [
  {
    name: 'Introduction to Front-End Development ',
    degree: '99%',
    date: 'Achieved Dec 25 2022',
    img: pdfIntroduction,
    url: 'https://coursera.org/share/7c020edca6b05ddde7d194dbc72480b9',
  },
  {
    name: 'Programming with JavaScript ',
    degree: '100%',
    date: 'Achieved Dec 25, 2022',
    img: programWithJS,
    url: 'https://coursera.org/share/5e1ae865f0b902938ae2c5956ef5d353',
  },
  {
    name: 'Version Control',
    degree: '100%',
    date: 'Achieved Dec 26 2022',
    img: versionC,
    url: 'https://coursera.org/share/765bf42f4a6f64c233b1e4e61a56fa4d',
  },
  {
    name: 'HTML and CSS in depth',
    degree: '96.23%',
    date: 'Achieved Dec 24 2022',
    img: inDepth,
    url: 'https://coursera.org/share/235c862611ec1c7b3096a8fe2d0c06ac',
  },
  {
    name: 'React Basics',
    degree: '92.5%',
    date: 'Achieved Dec 21 2022',
    img: reactBsics,
    url: 'https://coursera.org/share/7308967106c2cc222599ac3d66fe4395',
  },
  {
    name: 'Advanced React',
    degree: '99.6%',
    date: 'Achieved Dec 29 2022',
    img: reactAdvance,
    url: 'https://coursera.org/share/38b9d0762dfad77f9a93e80a03d8f46a',
  },
  {
    name: 'Principles of UX/UI Design',
    degree: '100%',
    date: 'Achieved Jan 2, 2023',
    img: PrinciplesUX_UI,
    url: 'https://coursera.org/share/ec088d260386fbcff75df37ecfd95955',
  },
  {
    name: 'Front-End Developer Capstone',
    degree: '96.66%',
    date: 'Achieved Jan 2, 2023',
    img: Capstone,
    url: 'https://coursera.org/share/29c3fec7702bb863bc10fd67cbfa990e',
  },
];

export const projectsFrontend = [
  {
    title: 'Lucid motors clone',
    imgUrl: lucidClone,
    description:
      'imitation lucid-motors home page, this lucid clone has good template, responsive,use carousel Swiper js Library with loop, blur background, change design by dynamic menu and pictures',
    appUrl: 'https://lucid-motors-clone.onrender.com',
    class: 'basic',
    gitUrl: 'https://github.com/drdah123/lucid-clone-js',
  },
  {
    title: 'Weather App',
    imgUrl: weatherApp,
    description: 'simple weather app with rapidAPI work with fetch data',
    appUrl: 'https://weeatherapp0.netlify.app/',
    class: 'basic',
    gitUrl: 'https://github.com/drdah123/weather-app',
  },
  {
    title: 'Dashboard',
    description:
      'frontend Dashboard uses syncfusion library, Injected component and services, useContext, theme, tailwind and responsive',
    imgUrl: dashboard,
    appUrl: 'https://dashboard-j5gx.onrender.com',
    class: 'basic',
    gitUrl: 'https://github.com/drdah123/dashboardd',
  },
  {
    title: 'Quiz app',
    description: 'simple quiz app with rapidAPI',
    imgUrl: quizApp,
    appUrl: 'https://quiz-abdalrahman.onrender.com/',
    class: 'basic',
    gitUrl: 'https://github.com/drdah123/quiz-app',
  },
  {
    title: 'Memory game',
    description: 'Game web app',
    imgUrl: meoryGame,
    appUrl: 'https://meory-game-abdlarahman.onrender.com/',
    class: 'basic',
    gitUrl: 'https://github.com/drdah123/memory-game',
  },
  {
    title: 'Portfolio',
    description: 'Site with animation',
    imgUrl: protfolioanimation,
    appUrl: 'https://protfolioanimations.netlify.app/',
    class: 'basic',
    gitUrl: 'https://github.com/drdah123/protofilio-animation',
  },
  {
    title: 'Calendar',
    description: 'simple calendar with dayjs library',
    imgUrl: calendar,
    appUrl: 'https://abdulrahmancalendar.onrender.com',
    class: 'basic',
    gitUrl: 'https://github.com/drdah123/google-calendar-clone',
  },
  {
    title: 'Youtube clone',
    description: '',
    imgUrl: yuotubeClone,
    appUrl: 'https://youtube-clone-n9ry.onrender.com',
    class: 'basic',
    gitUrl: 'https://github.com/drdah123/youtube-clone',
  },
  {
    title: 'Simple cart',
    description: 'Simple cart by state management Redux-React',
    imgUrl: ReduxCart,
    appUrl: 'https://react-redux-simple-cart.onrender.com',
    class: 'redux',
    gitUrl: 'https://github.com/drdah123/react_redux_simple_cart',
  },
  {
    title: 'amazon clone by Redux',
    description: 'big project by state management Redux-React',
    imgUrl: amazona,
    appUrl: 'https://amazon-frontend-redux.onrender.com',
    class: 'redux',
    gitUrl: 'https://github.com/drdah123/amazon-frontend-Redux',
  },
];

export const angularProject = [
  {
    title: 'Lucid clone',
    description:
      'imitation lucid-motors home page, this lucid clone has good template, responsive,use carousel Swiper js Library with loop, blur background, change design by dynamic menu and pictures',

    imgUrl: lucidClone,
    appUrl: 'https://lustrous-torrone-884988.netlify.app/',
    gitUrl: 'https://github.com/drdah123/lucid-angular/tree/main',
  },
];
export const VueProject = [
  {
    title: 'Lucid clone',
    description:
      'imitation lucid-motors home page, this lucid clone has good template, responsive,use carousel Swiper js Library with loop, blur background, change design by dynamic menu and pictures',

    imgUrl: lucidClone,
    appUrl: 'https://lucid-vue.onrender.com/',
    gitUrl: 'https://github.com/drdah123/lucid-vue/tree/main',
  },
];
export const projectsFullStack = [
  {
    name: 'Amazona-clone',
    imgUrl: amazona,
    title: 'Amazona-clone',

    description: 'Full stack Ecommerce',
    appUrl: 'https://mern-amazona.onrender.com/',
    gitUrl: 'https://github.com/drdah123/frontend',
    gitUrlB: 'https://github.com/drdah123/backend-amazon',
  },
  {
    name: 'Medical page',
    imgUrl: medicalChat,
    title: 'Medical page',

    description: 'Full medical Page has real time chating',
    appUrl: 'https://medical-pager-chatt.netlify.app/',
  },
  {
    name: 'Note-app',
    imgUrl: noteApp,
    title: 'Note-app',

    description: 'Full stack note app',
    appUrl: 'https://note-frontend-cy93.onrender.com/',
    gitUrl: 'https://github.com/drdah123/note-frontend/tree/main',
    gitUrlB: 'https://github.com/drdah123/notes-backend',
  },
  {
    name: 'e-commerce-sanity',
    imgUrl: ecommerceNext,
    title: 'e-commerce-sanity',

    description: 'Full stack e-commerce sanity built by next.js',
    appUrl: 'https://ecommerce-next-sanity-56vk0o5fv-drdah123.vercel.app/',
    gitUrl: 'https://github.com/drdah123/ecommerce-next-sanity',
  },
  {
    name: 'twitter clone',
    imgUrl: twitterC,
    title: 'twitter clone',

    description: 'Full stack twitter next.js with tailwind and recoil.js',
    appUrl: 'https://twitter-clone-xi-hazel.vercel.app/',
    gitUrl: 'https://github.com/drdah123/twitter-clone',
  },
];

export const SkillsData = [
  { name: 'HTML5', rate: 95 },
  { name: 'CSS3', rate: 85 },
  { name: 'JAVASCRIPT', rate: 90 },
  { name: 'REACT JS', rate: 95 },
  { name: 'NEXT JS', rate: 90 },
  { name: 'NODE JS', rate: 80 },
  { name: 'EXPRESS JS', rate: 80 },
  { name: 'mongoDB JS', rate: 85 },
  { name: 'MONGOOSE JS', rate: 90 },
  { name: 'REACT NATIVE JS', rate: 75 },
  { name: 'SOLIDITY JS', rate: 0 },
  { name: 'BOOTSTRAP', rate: 90 },
  { name: 'MATERIAL UI', rate: 80 },
  { name: 'TYPESCRIPT', rate: 75 },
  { name: 'UI UX DESIGN', rate: 0 },
  { name: 'TENSORFLOW JS', rate: 0 },
  { name: 'ALGORITHM JS', rate: 0 },
  { name: 'GIT', rate: 90 },
  { name: 'ANGULAR JS', rate: 65 },
  { name: 'VUE JS', rate: 60 },
  { name: 'REACT REDUX', rate: 80 },
  { name: 'REACT MOBX', rate: 0 },
];

let reactProject = projectsFrontend;
export const filterReactProject = (type) => {
  if (type === 'redux') {
    reactProject = projectsFrontend.filter(
      (project) => project.class === 'redux'
    );
  } else if (type === 'mobX') {
    reactProject = projectsFrontend.filter(
      (project) => project.class === 'mobX'
    );
  } else {
    reactProject = projectsFrontend;
  }
};

export const tabKeys = [
  {
    key: 'first',
    title: 'React JS',
    component: () => {
      return <CarouselProjects projects={reactProject} />;
    },
  },
  {
    key: 'second',
    title: 'Full stack React',
    component: () => {
      return <CarouselProjects projects={projectsFullStack} />;
    },
  },
  {
    key: 'third',
    title: 'Angular JS',
    component: () => {
      return <CarouselProjects projects={angularProject} />;
    },
  },
  {
    key: 'forth',
    title: 'Vue JS',
    component: () => {
      return <CarouselProjects projects={VueProject} />;
    },
  },
  {
    key: 'fifth',
    title: 'React games',
  },
  {
    key: 'sixth',
    title: 'React native',
  },
];
