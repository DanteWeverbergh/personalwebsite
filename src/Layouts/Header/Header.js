import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';

function Header(props) {
  const location = useLocation();

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <div className="md:hidden absolute top-0">
        <div className="h-12   relative w-screen flex items-center bg-slate-950">
          <div className="left-0 absolute bg-blue-950 rounded-full px-4 py-2 font-bold text-white-950 mt-5 ml-5 flex justify-center items-center text-sm">
            {`<Dante/>`}
          </div>
          {!mobileMenu ? (
            <MdMenu
              className="text-5xl right-0 absolute mr-5 mt-5 "
              onClick={() => setMobileMenu(!mobileMenu)}
            />
          ) : (
            <MdClose
              className="text-5xl right-0 absolute mr-5 mt-5 "
              onClick={() => setMobileMenu(!mobileMenu)}
            />
          )}
        </div>

        {mobileMenu && (
          <>
            <div className=" text-center bg-slate-950 h-screen flex flex-col mt-12 ">
              <NavLink
                to={'/'}
                className={({ isActive }) =>
                  isActive
                    ? ' text-blue-950 hover:text-white-950 text-2xl'
                    : ' hover:text-blue-950 text-2xl'
                }
              >
                Home
              </NavLink>
              <div className="mx-12 border-b-2 my-6"></div>
              <NavLink
                to={'/projects'}
                className={({ isActive }) =>
                  isActive
                    ? ' text-blue-950 hover:text-white-950 text-2xl'
                    : ' hover:text-blue-950 text-2xl'
                }
              >
                Projects
              </NavLink>
              <div className="mx-12 border-b-2 my-6"></div>
              <NavLink
                to={'/about'}
                className={({ isActive }) =>
                  isActive
                    ? ' text-blue-950 hover:text-white-950 text-2xl'
                    : ' hover:text-blue-950 text-2xl'
                }
              >
                About
              </NavLink>
              <div className="mx-12 border-b-2 my-6"></div>

              <NavLink
                to={'/contact'}
                className={({ isActive }) =>
                  isActive
                    ? ' text-blue-950 hover:text-white-950 text-2xl'
                    : ' hover:text-blue-950 text-2xl'
                }
              >
                Contact
              </NavLink>
            </div>
          </>
        )}
      </div>

      <div className=" w-full bg-slate-950 hidden md:block md:absolute top-0 z-50">
        <div className="flex justify-between  text-xl py-6 ">
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive
                ? 'ml-12 text-blue-950 hover:text-white-950'
                : 'ml-12 hover:text-blue-950'
            }
          >
            {'<Dante/>'}
          </NavLink>
          <div className="flex mr-36">
            <NavLink
              to={'/projects'}
              className={({ isActive }) =>
                isActive
                  ? 'ml-12 text-blue-950 hover:text-white-950'
                  : 'ml-12 hover:text-blue-950'
              }
            >
              Projects
            </NavLink>
            <NavLink
              to={'/about'}
              className={({ isActive }) =>
                isActive
                  ? 'ml-12 text-blue-950 hover:text-white-950'
                  : 'ml-12 hover:text-blue-950'
              }
            >
              About
            </NavLink>

            <NavLink
              to={'/contact'}
              className={({ isActive }) =>
                isActive
                  ? 'ml-12 text-blue-950 hover:text-white-950'
                  : 'ml-12 hover:text-blue-950'
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
