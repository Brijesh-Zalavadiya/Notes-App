import React from 'react';

const Notelist = (props) => {
    return (
        <div className="lg:w-1/2 p-10 lg:border-l-2 border-gray-700 flex flex-col bg-black">
            <h1 className="text-3xl font-bold">Your Notes</h1>

            <div
                id="notes"
                className="flex flex-wrap items-start justify-start gap-5 mt-10 overflow-auto text-black"
            >
                {props.task.length === 0
                    ? [1, 2, 3].map((elem, idx) => (
                          <div
                              key={idx}
                              className="relative flex flex-col h-52 gap-5 w-full items-start sm:w-50 rounded-2xl p-5 bg-mist-800 animate-pulse"
                          >
                              <div className="w-2/3 bg-mist-700 h-7 rounded-full"></div>
                              <div className="w-10/11 bg-mist-700 h-1/2 rounded-2xl"></div>
                              <div className="w-full flex justify-center">
                                  <div className="w-25 bg-mist-700  h-7 rounded-full"></div>
                              </div>
                          </div>
                      ))
                    : props.task.map((elem, idx) => (
                          <div
                              key={idx}
                              className="relative flex justify-between flex-col h-52 w-full items-start sm:w-50 rounded-2xl p-5 bg-yellow-200 "
                          >
                              <h3 className="leading-tight text-xl font-bold h-5">
                                  {elem.title}
                              </h3>
                              <p
                                  id="descP"
                                  className="mt-4 h-full leading-tight text-gray-600 "
                              >
                                  {elem.desc}
                              </p>
                              <button
                                  onClick={() => {
                                      props.deleteNote(idx);
                                  }}
                                  className="w-full text-red-700 font-bold cursor-pointer active:scale-95"
                              >
                                  delete note
                              </button>
                          </div>
                      ))}
            </div>
        </div>
    );
};

export default Notelist;
