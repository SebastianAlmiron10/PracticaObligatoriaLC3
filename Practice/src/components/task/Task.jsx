import PropTypes from 'prop-types';
import { useState } from 'react';


const Task = ({tarea, ToDoList, setToDoList }) => {

    const [IsCheck, setIsCheck] = useState(true);

    const handleChangeCheck = () => {
        setIsCheck(!IsCheck)
    }

    const removeTask = () => {
        setToDoList(ToDoList.filter(task => task != tarea))
    }

    return (
        <div className='flex flex-col '>
            <div className={`flex justify-between p-2 ${IsCheck ? 'bg-red-500/30' : 'bg-green-500/30'}`}>

                <input type="checkbox" name="" id="" onChange={handleChangeCheck} className='cursor-pointer'/>

                <p className={`${IsCheck ? '' : 'line-through'} text-white`}>{tarea}</p>

                <button onClick={removeTask}>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#ededed"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-trash">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 7l16 0" />
                        <path d="M10 11l0 6" />
                        <path d="M14 11l0 6" />
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                </button>

            </div>
            <hr />
        </div>
    );
};


Task.propTypes = {
    tarea: PropTypes.string,
    setToDoList: PropTypes.func,
    ToDoList: PropTypes.array,
};


export default Task;