import React from 'react'

const Skeleton = () => {
  return (
      <div
          className="relative flex flex-col h-52 gap-5 w-full items-start sm:w-50 rounded-2xl p-5 bg-mist-800 animate-pulse"
      >
          <div className="w-2/3 bg-mist-700 h-7 rounded-full"></div>
          <div className="w-10/11 bg-mist-700 h-1/2 rounded-2xl"></div>
          <div className="w-full flex justify-center">
              <div className="w-25 bg-mist-700  h-7 rounded-full"></div>
          </div>
      </div>
  );
}

export default Skeleton