import React, { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const [task, setTask] = useState(() => {
        const notes = localStorage.getItem('Notes');
        return notes ? JSON.parse(notes) : [];
    });

    useEffect(() => {
        localStorage.setItem('Notes', JSON.stringify(task));
    }, [task]);

    const submitHandler = (e) => {
        e.preventDefault();

        const copyTask = [...task];

        if (title !== '') {
            copyTask.push({ title, desc });
            setTask(copyTask);
        }

        setTitle('');
        setDesc('');
    };

    const deleteNote = (idx) => {
        const copyTask = [...task];
        copyTask.splice(idx, 1);
        setTask(copyTask);
    };

    return (
        <div className="h-screen lg:flex bg-black text-white ">
            <form
                onSubmit={(e) => {
                    submitHandler(e);
                }}
                className=" flex flex-col items-start gap-5 p-10 lg:w-1/2 "
            >
                <h1 className="text-3xl font-bold mb-7">Add Notes</h1>

                {/*                            Title                          */}
                <input
                    type="text"
                    placeholder="Enter Notes Heading"
                    className="w-full px-5 font-medium py-2 border-2 outline-none rounded"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />

                {/*                          Description                       */}
                <textarea
                    type="text"
                    placeholder="Write Details"
                    className="w-full h-32 px-5 py-2 font-medium border-2 outline-none rounded"
                    value={desc}
                    onChange={(e) => {
                        setDesc(e.target.value);
                    }}
                />

                <button className="w-full cursor-pointer active:scale-98 bg-white text-black font-medium px-5 py-2 rounded hover:bg-stone-200">
                    Add Note
                </button>
            </form>
            <hr className="bg-white opacity-50" />
            <div className="lg:w-1/2 p-10 lg:border-l-2 border-gray-700 flex flex-col bg-black">
                <h1 className="text-3xl font-bold">Your Notes</h1>

                <div
                    id="notes"
                    className="flex flex-wrap items-start justify-start gap-5 mt-10 overflow-auto text-black"
                >
                    {task.map((elem, idx) => (
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
                                    deleteNote(idx);
                                }}
                                className="w-full text-red-700 font-bold cursor-pointer active:scale-95"
                            >
                                delete note
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
