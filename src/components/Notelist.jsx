import React from 'react';
import Skeleton from './Skeleton';
import Note from './Note';

const Notelist = (props) => {
    return (
        <div className="lg:w-1/2 p-10 lg:border-l-2 border-gray-700 flex flex-col bg-black">
            <h1 className="text-3xl font-bold">Your Notes</h1>

            <div
                id="notes"
                className="flex flex-wrap items-start justify-start gap-5 mt-10 overflow-auto text-black"
            >
                {props.task.length === 0
                    ? [1, 2, 3].map((elem, idx) => {
                          return <Skeleton key={idx} />;
                      })
                    : props.task.map((elem, idx) => 
                        <Note 
                            key={idx} 
                            idx={idx}
                            elem={elem}
                            deleteNote={props.deleteNote}
                            editNote={props.editNote}
                        />)}
            </div>
        </div>
    );
};

export default Notelist;
