import React from 'react';

const Form = (props) => {
    return (
            <form
                onSubmit={(e) => {
                    props.submitHandler(e, props.editidx);
                }}
                className=" flex flex-col items-start gap-5 p-10 lg:w-1/2 "
            >
                <h1 className="text-3xl font-bold mb-7">Add Notes</h1>

                {/*                            Title                          */}
                <input
                    id='title'
                    type="text"
                    placeholder="Enter Notes Heading"
                    className="w-full px-5 font-medium py-2 border-2 outline-none rounded"
                    value={props.title}
                    onChange={(e) => {
                        props.setTitle(e.target.value);
                    }}
                />

                {/*                          Description                       */}
                <textarea
                    id='description'
                    type="text"
                    placeholder="Write Details"
                    className="w-full h-32 px-5 py-2 font-medium border-2 outline-none rounded"
                    value={props.desc}
                    onChange={(e) => {
                        props.setDesc(e.target.value);
                    }}
                />

                <button className="w-full cursor-pointer active:scale-98 bg-white text-black font-medium px-5 py-2 rounded hover:bg-stone-200">
                    Add Note
                </button>
            </form>
    );
};

export default Form;
