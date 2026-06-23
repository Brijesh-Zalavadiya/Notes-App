import React, { useEffect } from 'react';
import { useState } from 'react';
import Form from './components/Form';
import Notelist from './components/Notelist';

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
        <div className="h-screen lg:flex w-screen bg-black text-white ">
            <Form
                submitHandler={submitHandler}
                title={title}
                setTitle={setTitle}
                desc={desc}
                setDesc={setDesc}
            />
            <hr className="bg-white opacity-50 visible lg:invisible" />
            <Notelist 
                task={task} 
                deleteNote={deleteNote} 
            />
        </div>
    );
};

export default App;
