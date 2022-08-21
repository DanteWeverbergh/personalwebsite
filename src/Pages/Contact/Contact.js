import React from 'react';
import Header from '../../Layouts/Header/Header';
import { useForm } from 'react-hook-form';
import Label from '../../Components/Form/Label';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <>
      <Header />

      <div className=" flex ">
        <div className="w-1/2 "></div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-1/2 flex flex-col px-24  h-screen"
        >
          <div className="flex mb-6">
            <input
              type="text"
              placeholder="First name"
              id="fistName"
              {...register('First name', { required: true, maxLength: 80 })}
              className="w-full py-2 px-4 border-white-950 border-b-2 bg-slate-950 focus:outline-none focus:border-blue-950 mb-6"
            />

            <div className="w-12"></div>
            <input
              type="text"
              placeholder="Last name"
              {...register('Last name', { required: true, maxLength: 100 })}
              className="w-full py-2 px-4 border-white-950 border-b-2 bg-slate-950 focus:outline-none focus:border-blue-950 mb-6"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            {...register('Email', { required: true })}
            className="w-full py-2 px-4 border-white-950 border-b-2 bg-slate-950 focus:outline-none focus:border-blue-950 mb-6"
          />
          <input
            type="text"
            placeholder="Subject"
            {...register('Subject', { required: true })}
            className="w-full py-2 px-4 border-white-950 border-b-2 bg-slate-950 focus:outline-none focus:border-blue-950 mb-6"
          />
          <textarea
            {...register('Message', { required: true })}
            placeholder="Start typing here..."
            className="w-full py-2 px-4 border-white-950 border-b-2 bg-slate-950 focus:outline-none focus:border-blue-950 mb-12"
          />

          <input type="submit" className="bg-blue-950 py-2 rounded-lg" />
        </form>
      </div>
    </>
  );
}

export default Contact;
