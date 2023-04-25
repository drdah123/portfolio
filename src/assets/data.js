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
import ReduxCart from '../assets/img2/react-redux-smiple-cart.png';
import pdfIntroduction from './pdf/Introduction to Front-End Development.png';
import programWithJS from './pdf/Programming with JavaScript.jpeg';
import versionC from './pdf/Version Control.jpeg';
import inDepth from './pdf/HTML and CSS in depth.jpeg';
import reactBsics from './pdf/React Basics.jpeg';
import reactAdvance from './pdf/Advanced React.jpeg';
import PrinciplesUX_UI from './pdf/principles of UX UI Design.jpeg';
import Capstone from './pdf/Front-End Developer Capstone.jpeg';
import Carousel from '../components/CarouselReactSlick';
import agileProjectMangement from './pdf/agile project mangement.jpeg';
import reactSlick from './img2/react-slick.png';
import basicPortfolio from './img2/basicPortfolio.png';
import SwiperJS from './img2/SwiperJS.png';
import hsoubAcademy from './pdf/hsoubAcademy.png';
import travel from './img2/travel-template.png';

export const certifications = [
  {
    name: 'hsoub academy',
    degree: 'without degree',
    date: 'Achieved April 8, 2023',
    img: hsoubAcademy,
    url: 'https://academy.hsoub.com/certificate/UNC7W7J8K45VCSVY9AFUMRL79.pdf',
  },
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
  {
    name: 'Agile Project Management',
    degree: '99%',
    date: 'Achieved Jan 11, 2023',
    img: agileProjectMangement,
    url: 'https://coursera.org/share/e800acb6adc68d14186a00ea07bcb7cf',
  },
];

export const projectsFrontend = [
  {
    title: 'Basic Portfolio',
    description:
      'Site with great animations, my projects and many simple projects',
    imgUrl: basicPortfolio,
    technology: [
      'Email JS',
      'fortawesome',
      'Animate.css',
      'Bootstrap',
      'Gsap',
      'React beautiful dnd',
      'React slick',
    ],
    appUrl: '',
    class: 'basic',
    gitUrl: 'https://github.com/drdah123/portfolio',
  },
  {
    title: 'Travel UI',
    description:
      'applied figma template for Travel from Frontend Senior on telegram',
    imgUrl: travel,
    technology: ['Sass', 'Swiper'],
    appUrl: 'https://travel-z4fo.onrender.com',
    class: 'basic',
    gitUrl: 'https://github.com/drdah123/travel-template',
  },
  {
    title: 'Lucid motors clone',
    imgUrl: lucidClone,
    description:
      'imitation lucid-motors home page, this lucid clone has good template, responsive,use carousel swiper JS Library with loop, blur background, change design by dynamic menu and pictures',
    technology: ['Swiper JS', 'Animate.css'],
    appUrl: 'https://lucid-motors-clone.onrender.com',
    class: 'basic',
    gitUrl: 'https://github.com/drdah123/lucid-clone-js',
  },
  {
    title: 'Weather App',
    imgUrl: weatherApp,
    description: 'simple weather app with rapidAPI work with fetch data',
    technology: ['RapidAPI'],
    appUrl: 'https://weeatherapp0.netlify.app/',
    class: 'basic',
    gitUrl: 'https://github.com/drdah123/weather-app',
  },
  {
    title: 'Dashboard',
    description:
      'frontend Dashboard uses syncfusion library, Injected component and services, useContext, theme, tailwind and responsive',
    imgUrl: dashboard,
    technology: ['Tailwindcss', 'Syncfusion ej2'],
    appUrl: 'https://dashboard-j5gx.onrender.com',
    class: 'basic',
    gitUrl: 'https://github.com/drdah123/dashboardd',
  },
  {
    title: 'Quiz app',
    description: 'simple quiz app with rapidAPI',
    imgUrl: quizApp,
    technology: ['Material UI', 'RapidAPI'],
    appUrl: 'https://quiz-abdalrahman.onrender.com/',
    class: 'basic',
    gitUrl: 'https://github.com/drdah123/quiz-app',
  },
  {
    title: 'Memory game',
    description: 'Game web app',
    imgUrl: meoryGame,
    technology: [],
    appUrl: 'https://meory-game-abdlarahman.onrender.com/',
    class: 'basic',
    gitUrl: 'https://github.com/drdah123/memory-game',
  },
  {
    title: 'Portfolio',
    description: 'Site with animation',
    imgUrl: protfolioanimation,
    technology: ['SCSS'],
    appUrl: 'https://protfolioanimations.netlify.app/',
    class: 'basic',
    gitUrl: 'https://github.com/drdah123/protofilio-animation',
  },
  {
    title: 'Calendar',
    description: 'simple calendar with day JS library',
    imgUrl: calendar,
    technology: ['craco', 'day JS', 'Tailwindcss'],
    appUrl: 'https://abdulrahmancalendar.onrender.com',
    class: 'basic',
    gitUrl: 'https://github.com/drdah123/google-calendar-clone',
  },
  {
    title: 'Youtube clone',
    description: '',
    imgUrl: yuotubeClone,
    technology: ['emotion', 'Material UI'],
    appUrl: 'https://youtube-clone-n9ry.onrender.com',
    class: 'basic',
    gitUrl: 'https://github.com/drdah123/youtube-clone',
  },
  {
    title: 'Simple cart',
    description: 'Simple cart by state management Redux-React',
    imgUrl: ReduxCart,
    technology: ['React Redux', 'Emotion', 'Bootstrap'],
    appUrl: 'https://react-redux-simple-cart.onrender.com',
    class: 'redux',
    gitUrl: 'https://github.com/drdah123/react_redux_simple_cart',
  },
  {
    title: 'amazon clone by Redux',
    description: 'big project by state management Redux-React',
    imgUrl: amazona,
    technology: [
      'React toastify',
      'React Redux',
      'React helmet async',
      'React google charts',
      'Axios',
      'Bootstrap',
      'React paypal JS',
      'api React google maps ',
    ],
    appUrl: 'https://amazon-frontend-redux.onrender.com',
    class: 'redux',
    gitUrl: 'https://github.com/drdah123/amazon-frontend-Redux',
  },
];

export const angularProject = [
  {
    title: 'Lucid clone',
    description:
      'imitation lucid-motors home page, this lucid clone has good template, responsive,use carousel swiper js Library with loop, blur background, change design by dynamic menu and pictures',

    imgUrl: lucidClone,
    technology: [],
    appUrl: 'https://lustrous-torrone-884988.netlify.app/',
    gitUrl: 'https://github.com/drdah123/lucid-angular/tree/main',
  },
];
export const VueProject = [
  {
    title: 'Lucid clone',
    description:
      'imitation lucid-motors home page, this lucid clone has good template, responsive,use carousel swiper js Library with loop, blur background, change design by dynamic menu and pictures',

    imgUrl: lucidClone,
    technology: [],
    appUrl: 'https://lucid-vue.onrender.com/',
    gitUrl: 'https://github.com/drdah123/lucid-vue/tree/main',
  },
];
export const fullStackProjects = [
  {
    name: 'Amazona-clone',
    imgUrl: amazona,
    title: 'Amazona-clone',

    description: 'Full stack Ecommerce',
    technology: [
      'React',
      'Node js',
      'React toastify',
      'React Redux',
      'React helmet async',
      'React google charts',
      'Axios',
      'Bootstrap',
      'React paypal JS',
      'api React google maps ',
      'cloudinary',
      'bcrypt JS',
      'dotenv',
      'express-async-handler',
      'Jsonwebtoken',
      'mailgun JS',
      'multer',
      'streamifier',
      'mongoose',
    ],
    appUrl: 'https://mern-amazona.onrender.com/',
    gitUrl: 'https://github.com/drdah123/frontend',
    gitUrlB: 'https://github.com/drdah123/backend-amazon',
  },
  // {
  //   name: 'Medical page',
  //   imgUrl: medicalChat,
  //   title: 'Medical page',

  //   description: 'Full medical Page has real time chating',
  //   technology: [],
  //   appUrl: 'https://medical-pager-chatt.netlify.app/',
  // },
  {
    name: 'Note-app',
    imgUrl: noteApp,
    title: 'Note-app',

    description: 'Full stack note app',
    technology: [
      'React',
      'Node JS',
      'Axios',
      'bcrypt',
      'Express JS',
      'React Bootstrap',
      'cors',
      'dotenv',
      'Express async handler',
      'Jsonwebtoken',
      'mongoose',
      'nodemon',
    ],
    appUrl: 'https://note-frontend-cy93.onrender.com/',
    gitUrl: 'https://github.com/drdah123/note-frontend/tree/main',
    gitUrlB: 'https://github.com/drdah123/notes-backend',
  },
  {
    name: 'e-commerce-sanity',
    imgUrl: ecommerceNext,
    title: 'e-commerce-sanity',

    description: 'Full stack e-commerce sanity built by next.js',
    technology: ['Next js', 'Sanity', 'Stripe'],
    appUrl: 'https://ecommerce-next-sanity-56vk0o5fv-drdah123.vercel.app/',
    gitUrl: 'https://github.com/drdah123/ecommerce-next-sanity',
  },
  {
    name: 'twitter clone',
    imgUrl: twitterC,
    title: 'twitter clone',

    description: 'Full stack twitter next.js with tailwind and recoil.js',
    technology: [
      'Next js',
      'Framer motion',
      'Firebase',
      'Recoil',
      'Tailwindcss',
      'heroicons',
    ],
    appUrl: 'https://twitter-clone-xi-hazel.vercel.app/',
    gitUrl: 'https://github.com/drdah123/twitter-clone',
  },
];

export const contributionProjects = [
  {
    name: 'React slick',
    imgUrl: reactSlick,
    title: 'React slick carousel',
    description:
      'it is react library for make grate carousel with feature like infinite, autoplay, lazyLoad etc... . I change from class component to functional component with hooks, how to use loop with useEffect for sure the function get state update, also how to use ref with useImperativeHandle to make methods can call function inside component like custom next, before or stop and play autoplay, also use forwardRef and memo',
    technology: [],
    appUrl: '',
    gitUrl: 'https://github.com/akiran/react-slick/pull/2225',
  },
  {
    name: 'Swiper JS',
    imgUrl: SwiperJS,
    title: 'Swiper JS carousel',
    description:
      'it is react library to make grate carousel for React, Element, Vue and basic JS with feature like Loop, autoplay, lazyLoad etc... . I fixed margin right to equal 0 and click last slides by pagination with loop mode and slidesPerView more than 2',
    technology: [],
    appUrl: '',
    gitUrl: 'https://github.com/nolimits4web/swiper/pull/6475',
  },
];

export const SkillsData = [
  { name: 'HTML5', rate: 75 },
  { name: 'CSS3', rate: 80 },
  { name: 'JAVASCRIPT', rate: 70 },
  { name: 'REACT JS', rate: 80 },
  { name: 'NEXT JS', rate: 65 },
  { name: 'NODE JS', rate: 60 },
  { name: 'EXPRESS JS', rate: 60 },
  { name: 'mongoDB JS', rate: 60 },
  { name: 'MONGOOSE JS', rate: 70 },
  { name: 'REACT NATIVE JS', rate: 50 },
  { name: 'SOLIDITY JS', rate: 0 },
  { name: 'BOOTSTRAP', rate: 90 },
  { name: 'MATERIAL UI', rate: 80 },
  { name: 'TYPESCRIPT', rate: 65 },
  { name: 'UI UX DESIGN', rate: 0 },
  { name: 'TENSORFLOW JS', rate: 0 },
  { name: 'ALGORITHM JS', rate: 0 },
  { name: 'THREE JS', rate: 0 },
  { name: 'REACT THREE FIBER JS', rate: 0 },
  { name: 'GIT', rate: 80 },
  { name: 'ANGULAR JS', rate: 40 },
  { name: 'VUE JS', rate: 40 },
  { name: 'REACT REDUX', rate: 65 },
  { name: 'REACT MOBX', rate: 0 },
  { name: 'FLUTTER', rate: 0 },
  { name: 'PHP', rate: 0 },
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
    title: 'Contributions',
    component: (isCarousel) => {
      return (
        <Carousel projects={contributionProjects} isCarousel={isCarousel} />
      );
    },
  },
  {
    key: 'second',
    title: 'React JS',
    component: (isCarousel) => {
      return <Carousel projects={reactProject} isCarousel={isCarousel} />;
    },
  },
  {
    key: 'third',
    title: 'Full stack React',
    component: (isCarousel) => {
      return <Carousel projects={fullStackProjects} isCarousel={isCarousel} />;
    },
  },
  {
    key: 'forth',
    title: ' Angular JS ',
    component: (isCarousel) => {
      return <Carousel projects={angularProject} isCarousel={isCarousel} />;
    },
  },
  {
    key: 'fifth',
    title: 'Vue JS',
    component: (isCarousel) => {
      return <Carousel projects={VueProject} isCarousel={isCarousel} />;
    },
  },
  {
    key: 'sixth',
    title: 'React native',
  },
];
