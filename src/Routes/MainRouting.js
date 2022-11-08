import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../Pages/About/About';
import Dashboard from '../Pages/Admin/Dashboard';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home/Home';
import Projects from '../Pages/Projects/Projects';
import Terminal from '../Pages/Terminal/Terminal';

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

          {/* Admin routes */}
          <Route path="/admin" element={<Dashboard />} />

          <Route path="/terminal" element={<Terminal />} />
        </Routes>
      </div>
    </>
  );
}

export default MainRouting;
