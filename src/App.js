import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loading from 'react-loading';

const Projects = lazy(() => import('./pages/Projects'));
const Skills = lazy(() => import('./pages/Skills'));
const Contact = lazy(() => import('./pages/Contact'));
const Banner = lazy(() => import('./pages/Banner'));
const Certifications = lazy(() => import('./pages/Certifications'));

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
            <Route path="/skill" exact element={<Skills />} />
            <Route path="/project" exact element={<Projects />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/certification" exact element={<Certifications />} />
          </Routes>
        </Suspense>
      </main>
    </HashRouter>
  );
}

export default App;
