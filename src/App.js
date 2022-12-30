import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Projects } from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" exact element={<Banner />} />
          <Route path="/skill" exact element={<Skills />} />
          <Route path="/project" exact element={<Projects />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
