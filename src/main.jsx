import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Admission from './components/Admission';
import Domain from './components/Domain';
import PedagogicalProgram from './components/PedagogicalProgram';
import OurTeam from './components/OurTeam';
import Outlet from './components/Outlet';
import TechnologiesSection from './components/Technos';
import PartnersSection from './components/Partners';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={
            <>
              <Home />
              <About />
              <OurTeam />
              <Outlet />
              <Domain />
              <Admission />
              <PedagogicalProgram />
              <TechnologiesSection />
              <PartnersSection />
            </>
          } />
          <Route path="about" element={<About />} />
          <Route path="programs" element={<Domain />} />
          <Route path="team" element={<OurTeam />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);