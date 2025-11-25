import { useState, useRef } from "react";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const task = useRef();

    function handleAddTask(){
        setTasks(prevtask => [...prevtask, task.current.value]);
    }

    function handleDeleteTask(index){
        setTasks(prevTasks => {
            const newTask = [...prevTasks];
            newTask.splice(index, 1);
            return newTask;
        })
    }

    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Tasks</h2>
            <p>
                <input type="text" ref={task} className="bg-neutral-200 h-10 rounded-sm focus:outline-none focus:border-stone-800 border-b-2 w-80 px-4"/>
                <button className="ml-6 hover:text-stone-800" onClick={handleAddTask}>Add Task</button>
            </p>
            {tasks.length === 0 && <p className="mt-6">This project does not have any tasks yet</p>}
            {tasks.length > 0 &&
            <div className="mt-6 p-4 bg-stone-200 list-none rounded-md">
                {tasks.map((individualTask, index) => (
                    <div key={index} className="flex justify-between mb-4">
                        <li>{individualTask}</li>
                        <button onClick={() => handleDeleteTask(index)}>Clear</button>
                    </div>
                ))}
            </div>}
        </div>  
    )
}

export default Tasks;