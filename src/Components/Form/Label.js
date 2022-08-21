import React from 'react';

function Label({ label, htmlFor }) {
  return (
    <>
      <label htmlFor={htmlFor} className="text-white-950 focus:text-blue-950">
        {label}
      </label>
    </>
  );
}

export default Label;
