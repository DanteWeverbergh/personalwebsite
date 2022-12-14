import React, { useRef } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Footer from '../../Layouts/Footer/Footer';
import Header from '../../Layouts/Header/Header';
import About from './Components/About';
import Banner from './Components/Banner';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Projects from './Components/Projects';

function Home() {
  return (
    <>
      {/*<Header />
       */}

      <Banner />

      <Projects />
      <About />
      <Experience />
      <Contact />

      <Footer />
    </>
  );
}

export default Home;
