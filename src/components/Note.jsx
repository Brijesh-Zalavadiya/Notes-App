import React from 'react'

const Note = (props) => {
  return (
      <div
          className="relative flex justify-between flex-col h-52 w-full items-start sm:w-50 rounded-2xl p-5 bg-yellow-200 "
      >
          <h3 className="leading-tight text-xl font-bold h-5">{props.elem.title}</h3>
          <p id="descP" className="mt-4 h-full leading-tight text-gray-600 ">
              {props.elem.desc}
          </p>
          <button
              onClick={() => {
                  props.deleteNote(props.idx);
              }}
              className="w-full text-red-700 font-bold cursor-pointer active:scale-95"
          >
              delete note
          </button>
      </div>
  );
}

export default Note