import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Platform from './pages/Platform';
import Donate from './pages/Donate';
import FloatingNav from './components/FloatingNav';
import Volunteer from './pages/Volunteer';
import Press from './pages/Press';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <FloatingNav />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/press" element={<Press />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;