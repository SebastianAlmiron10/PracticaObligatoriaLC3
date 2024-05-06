import PropTypes from 'prop-types';
import Task from '../task/Task';


const ListTask = ({ToDoList, setToDoList }) => {
    return (
        <>
            {
                ToDoList && ToDoList.map(task => (
                    <Task tarea={task} key={task} ToDoList={ToDoList} setToDoList={setToDoList} />
                ))
            }
        </>
    );
};


ListTask.propTypes = {
    setToDoList: PropTypes.func,
    ToDoList: PropTypes.array,
};


export default ListTask;
