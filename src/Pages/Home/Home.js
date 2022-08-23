import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Footer from '../../Layouts/Footer/Footer';
import Header from '../../Layouts/Header/Header';
import About from './Components/About';
import Banner from './Components/Banner';
import Projects from './Components/Projects';

function Home() {
  return (
    <>
      <Header />
      <Banner />

      <Projects />
      <About />

      <Footer />
    </>
  );
}

export default Home;
