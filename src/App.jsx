import React, { useEffect } from 'react';
import { useState } from 'react';
import Form from './components/Form';
import Notelist from './components/Notelist';

const App = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [editidx, setEditidx] = useState(-1);
    
    const [task, setTask] = useState(() => {
        const notes = localStorage.getItem('Notes');
        return notes ? JSON.parse(notes) : [];
    });

    useEffect(() => {
        localStorage.setItem('Notes', JSON.stringify(task));
    }, [task]);

    const submitHandler = (e, idx) => {
        e.preventDefault();
        
        if(title!=''){
            const copyTask = [...task];
            if (idx != -1) {
                const editNote = copyTask[idx];
                editNote.title = title;
                editNote.desc = desc;
                console.log(editNote);
                setEditidx(-1);
            } else {
                copyTask.push({ title, desc });
            }
            setTask(copyTask);

            setTitle('');
            setDesc('');
        }
    };

    const deleteNote = (idx) => {
        const copyTask = [...task];
        copyTask.splice(idx, 1);
        setTask(copyTask);
    };
    
    const editNote = (idx) => {
        setEditidx(idx);
        const editTask = [...task][idx];
        setTitle(editTask.title);
        setDesc(editTask.desc);
        setbtn('Edit');
    }

    return (
        <div className="h-screen lg:flex bg-black text-white ">
            <Form
                submitHandler={submitHandler}
                title={title}
                setTitle={setTitle}
                desc={desc}
                setDesc={setDesc}
                editidx={editidx}
            />
            <hr className="bg-white opacity-50 visible lg:invisible" />
            <Notelist 
                task={task} 
                deleteNote={deleteNote} 
                editNote={editNote}
            />
        </div>
    );
};

export default App;
