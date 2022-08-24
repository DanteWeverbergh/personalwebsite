import React from 'react';

function Contact() {
  return (
    <>
      <div className="relative ">
        <svg
          id="visual"
          viewBox="0 0 900 600"
          className="rotate-180  z-10 absolute top-0"
        >
          <path
            d="M0 547L30 532.8C60 518.7 120 490.3 180 490.7C240 491 300 520 360 520.5C420 521 480 493 540 472.8C600 452.7 660 440.3 720 450C780 459.7 840 491.3 870 507.2L900 523L900 601L870 601C840 601 780 601 720 601C660 601 600 601 540 601C480 601 420 601 360 601C300 601 240 601 180 601C120 601 60 601 30 601L0 601Z"
            fill="#0D1017"
            stroke-linecap="round"
            stroke-linejoin="miter"
          ></path>
        </svg>
        <div className="bg-blue-950">
          <div className="h-screen flex justify-center items-center ">
            <div>
              <h1 className="font-bold text-3xl mb-4">Who am I?</h1>
              <p>
                I'm Dante Weverbergh, a software developer with a bachelor
                degree in Graphic and digital media at the Artevelde university
                of applied sciences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
