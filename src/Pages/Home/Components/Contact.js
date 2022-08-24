import React, { useState } from 'react';

import Input from '../../../Components/Form/Input';
import TextArea from '../../../Components/Form/TextArea';

function Contact() {
  const [firstName, setFirstName] = useState('');

  return (
    <>
      <div className="relative ">
        <svg
          id="visual"
          viewBox="0 0 900 600"
          className="rotate-180  z-10 absolute md:-top-24"
        >
          <path
            d="M0 547L30 532.8C60 518.7 120 490.3 180 490.7C240 491 300 520 360 520.5C420 521 480 493 540 472.8C600 452.7 660 440.3 720 450C780 459.7 840 491.3 870 507.2L900 523L900 601L870 601C840 601 780 601 720 601C660 601 600 601 540 601C480 601 420 601 360 601C300 601 240 601 180 601C120 601 60 601 30 601L0 601Z"
            fill="#0D1017"
            stroke-linecap="round"
            stroke-linejoin="miter"
          ></path>
        </svg>
        <div className="bg-blue-950 ">
          <div className="h-screen flex justify-center items-center relative z-50 mx-12 md:mx-0">
            <div className="md:w-2/4 relative">
              <h1 className="font-bold text-3xl  z-20 absolute right-0 top-0  ">
                Get in touch.
              </h1>
              <form className="mt-6">
                <div className="flex">
                  <Input
                    type={'text'}
                    placeholder="First name"
                    value={firstName}
                  />
                  <div className="w-12"></div>
                  <Input
                    type={'text'}
                    placeholder="Last name"
                    value={firstName}
                  />
                </div>
                <div className="flex">
                  <Input type={'text'} placeholder="Email" value={firstName} />
                  <div className="w-12"></div>
                  <Input
                    type={'text'}
                    placeholder="Subject"
                    value={firstName}
                  />
                </div>
                <TextArea placeholder={'Start typing your message...'} />

                <button
                  type="submit"
                  className="bg-white-950 text-slate-950 px-4 py-2 rounded-lg w-full mt-6"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
