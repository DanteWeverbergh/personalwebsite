import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home/Home';
import Projects from '../Pages/Projects/Projects';

function MainRouting() {
  return (
    <>
      <div>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />

          {/* contact */}

          <Route path="/contact" element={<Contact />} />

          {/* about */}
          <Route path="/about" element={<About />} />

          {/* Projects */}
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
}

export default MainRouting;
