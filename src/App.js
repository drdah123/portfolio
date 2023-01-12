import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Projects } from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Certifications from './components/Certifications';

function App() {
  return (
    <HashRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" exact element={<Banner />} />
          <Route path="/skill" exact element={<Skills />} />
          <Route path="/project" exact element={<Projects />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/certification" exact element={<Certifications />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
