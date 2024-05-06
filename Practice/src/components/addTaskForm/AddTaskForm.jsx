import React, { useState } from 'react';
import PropTypes from 'prop-types';


const AddTaskForm = ({ToDoList, setToDoList }) => {
    const [task, setTask] = useState('');

    const handleTaskChange = (e) => {
        setTask(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    };

    const addTask = () => {
        if (task != '' && ToDoList.includes(task) != true) {
            setToDoList([...ToDoList, task])
            setTask('')
        }else if (ToDoList.includes(task)) {
            alert('Task already in list')
        } else {
            alert('You cannot put empty tasks')
        }
    };

    return (
        <div className='flex'>
            <input
                type="text"
                className='p-1'
                value={task}
                onChange={handleTaskChange}
                onKeyDown={handleKeyDown}
                placeholder='Add Task...'
            />
            <button
                className='p-1 border-white border-2 hover:bg-gray-500/40'
                onClick={addTask}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ededed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-plus">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 5v14" />
                    <path d="M5 12h14" />
                </svg>
            </button>
        </div>
    );
};



AddTaskForm.propTypes = {
    setToDoList: PropTypes.func,
    ToDoList: PropTypes.array,
};


export default AddTaskForm;
