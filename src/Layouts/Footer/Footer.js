import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className=" p-12">
        <div className="md:w-1/4 ">
          <Link to={'/contact'}>
            <div className="bg-blue-950 rounded-lg py-2 px-4 text-center hover:bg-white-950 hover:text-blue-950">
              Get in touch
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
