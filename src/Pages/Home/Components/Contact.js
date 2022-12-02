import React, { useRef, useState } from 'react';

import Input from '../../../Components/Form/Input';
import TextArea from '../../../Components/Form/TextArea';
import emailjs from '@emailjs/browser';

function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();

  const handleSubmit = (e) => {
    //

    e.preventDefault();

    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
              <form ref={form} className="mt-6" onSubmit={handleSubmit}>
                <div className="flex">
                  <Input
                    type={'text'}
                    placeholder="First name"
                    value={firstName}
                    onChange={({ target }) => setFirstName(target.value)}
                  />
                  <div className="w-12"></div>
                  <Input
                    type={'text'}
                    placeholder="Last name"
                    value={lastName}
                    onChange={({ target }) => setLastName(target.value)}
                  />
                </div>
                <div className="flex">
                  <Input
                    type={'email'}
                    placeholder="Email"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                  />
                  <div className="w-12"></div>
                  <Input
                    type={'text'}
                    placeholder="Subject"
                    value={subject}
                    onChange={({ target }) => setSubject(target.value)}
                  />
                </div>
                <TextArea
                  placeholder={'Start typing your message...'}
                  value={message}
                  onChange={({ target }) => setMessage(target.value)}
                />

                <button
                  type="submit"
                  className="bg-white-950 text-slate-950 px-4 py-2 rounded-lg w-full mt-6 hover:bg-slate-950 hover:text-white-950"
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
