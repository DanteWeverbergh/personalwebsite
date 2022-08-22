import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Header from '../../Layouts/Header/Header';

function Home() {
  return (
    <>
      <Header />
      <div className="md:flex h-screen">
        <div className="md:w-1/2 h-1/4  flex items-center justify-center md:h-screen">
          <ReactTypingEffect
            className="text-3xl md:text-6xl flex items-center justify-center "
            text={['Hi,', "I'm Dante Weverbergh."]}
            speed={200}
            eraseSpeed={150}
            eraseDelay={250}
          />
        </div>
        <div className="md:w-1/2 h-3/4  md:h-screen flex justify-center  md:block ">
          <img
            src="ikke_transparant.webp"
            className="md:h-screen object-cover "
          />
        </div>
      </div>
    </>
  );
}

export default Home;
