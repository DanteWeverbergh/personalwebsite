import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home/Home';

function MainRouting() {
  return (
    <>
      <div>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default MainRouting;
