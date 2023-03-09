import './App.css';
import NavBar from './components/Navbar/NavBar';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loading from 'react-loading';

const Projects = lazy(() => import('./pages/Projects/Projects'));
const Skills = lazy(() => import('./pages/Skills/Skills'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Banner = lazy(() => import('./pages/Banner/Banner'));
const Certifications = lazy(() =>
  import('./pages/Certifications/Certifications')
);
const SimpleProjects = lazy(() =>
  import('./pages/simpleProjects/SimpleProjects')
);

function App() {
  return (
    <HashRouter>
      <NavBar />
      <main>
        <Suspense
          fallback={
            <Loading
              className="loading-spin"
              color="#753aa2"
              type="spinningBubbles"
            />
          }
        >
          <Routes>
            <Route path="/" exact element={<Banner />} />
            <Route path="/skills" exact element={<Skills />} />
            <Route path="/projects" exact element={<Projects />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/certifications" exact element={<Certifications />} />
            <Route path="/simple-projects" exact element={<SimpleProjects />} />
          </Routes>
        </Suspense>
      </main>
    </HashRouter>
  );
}

export default App;
