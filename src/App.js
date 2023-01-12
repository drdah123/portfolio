import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Projects } from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useNavigate,
} from 'react-router-dom';
import Certifications from './components/Certifications';
import { useEffect } from 'react';

function App() {
  const { project } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (project) {
      navigate(project);
    }
  }, []);

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
