import './style/style.css'

import LandingPage from './pages/Landing';
import AboutPage from './pages/About'; 
import HackathonPage from './pages/Hackathon';
import HackathonMaterialsPage from './pages/HackathonMaterials';
import NotFoundPage from './pages/NotFound';

import HeadTags from './components/HeadTags';
import Footer from './components/Footer';

import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HeadTags />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/hackathon" element={<HackathonPage />} />
          <Route path="/hackathon-materials" element={<HackathonMaterialsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
