import React, { useEffect } from 'react';

function Terminal() {
  useEffect(() => {
    //
    console.log('okeko');

    document.getElementById('input').focus();
  }, []);

  return (
    <>
      <div className="h-screen  flex items-center justify-center">
        <div className="bg-black w-3/4 h-64 rounded-md">
          {/*Topbar */}
          <div className="bg-grey-960 w-full h-6 rounded-md">
            <div className="flex items-center h-full">
              <div className="ml-2 h-4 w-4 bg-red-950 rounded-full">
                {/* Red  */}
              </div>
              <div className="ml-2 h-4 w-4 bg-orange-950 rounded-full">
                {' '}
                {/* Orange  */}
              </div>
              <div className="ml-2 h-4 w-4 bg-green-950 rounded-full">
                {' '}
                {/* Green  */}
              </div>
            </div>
          </div>
          {/**Terminal */}

          <div className="text-green-950 m-4">
            <input
              id="input"
              placeholder=""
              className="bg-black outline-none text-3xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Terminal;
