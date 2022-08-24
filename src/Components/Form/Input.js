import React from 'react';

function Input({ type, placeholder, value, ...rest }) {
  return (
    <>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className="bg-slate-950 px-4 py-2 rounded-lg w-full mt-6 focus:outline-none"
        {...rest}
      />
    </>
  );
}

export default Input;
