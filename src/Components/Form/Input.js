import React from 'react';

function Input({ type, placeholder, ...rest }) {
  return (
    <>
      <input type={type} placeholder={placeholder} className="bg-red-400" />
    </>
  );
}

export default Input;
