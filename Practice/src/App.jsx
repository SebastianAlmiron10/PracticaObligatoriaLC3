import { useState } from "react"
import AddTaskForm from "./components/addTaskForm/AddTaskForm";
import ListTask from "./components/listTask/ListTask";


function App() {

  const [ToDoList, setToDoList] = useState([]);
  

  return (
    <div className="w-full min-h-[100vh] flex flex-col justify-center items-center bg-[#333]">

      <div className="w-56">

        <ListTask ToDoList={ToDoList} setToDoList={setToDoList}/>
        <AddTaskForm ToDoList={ToDoList} setToDoList={setToDoList}/>

      </div>

    </div>
  )
}

export default App
