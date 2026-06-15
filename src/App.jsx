import React from 'react';

const App = () => {
    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Form submited');
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
                <input
                    type="text"
                    placeholder="Enter Notes Heading"
                    className="w-full px-5 font-medium py-2 border-2 outline-none rounded"
                />

                <textarea
                    type="text"
                    placeholder="Write Details"
                    className="w-full h-32 px-5 py-2 font-medium border-2 outline-none rounded"
                />

                <button className="w-full bg-white text-black font-medium px-5 py-2 rounded hover:bg-stone-200">
                    Add Note
                </button>
            </form>
            <hr className="bg-white opacity-50" />
            <div className="lg:w-1/2 p-10 lg:border-l-2 border-gray-700 flex flex-col bg-black">
                <h1 className="text-3xl font-bold">Your Notes</h1>
                <div
                    id="notes"
                    className="flex flex-wrap w-full h-full gap-5 mt-10 overflow-auto text-black"
                >
                    <div className="h-52 w-full sm:w-40 rounded-2xl bg-white p-5">
                        Hello
                    </div>
                    <div className="h-52 w-full sm:w-40 rounded-2xl bg-white p-5">
                        Hello
                    </div>
                    <div className="h-52 w-full sm:w-40 rounded-2xl bg-white p-5">
                        Hello
                    </div>
                    <div className="h-52 w-full sm:w-40 rounded-2xl bg-white p-5">
                        Hello
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
