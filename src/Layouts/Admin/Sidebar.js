import React from 'react';

function Sidebar() {
  return (
    <>
      <div className="bg-blue-950 h-screen fixed left-0 w-64">
        <div className="ml-6 ">
          <h1 className="pt-6 font-bold text-3xl">{'<Dante/>'}</h1>
        </div>

        <div className="pl-6 mt-12">
          <ul>
            <li>
              <h1 className="font-bold">Projects</h1>
              <ul className="ml-4">
                <li>- Overview</li>
                <li>- Add new</li>
                <li>- Edit</li>
              </ul>
            </li>
            <li>kk</li>
            <li>kk</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
