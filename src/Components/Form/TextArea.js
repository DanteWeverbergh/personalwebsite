import React from 'react';

function TextArea({ type, placeholder, value, onChange, ...rest }) {
  return (
    <>
      <textarea
        type={type}
        value={value}
        placeholder={placeholder}
        className="bg-slate-950 px-4 py-2 rounded-lg w-full mt-6 focus:outline-none "
        {...rest}
        rows="12"
        onChange={onChange}
      />
    </>
  );
}

export default TextArea;
