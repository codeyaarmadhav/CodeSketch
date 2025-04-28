import React from 'react'
import { useGanttContext } from '../../context/GanttContext.jsx';
import SubTitle from '../SubTitle.jsx';
import {toast} from 'react-toastify'

function InputSection() {
    const {tasks, setTasks,
        taskInput, setTaskInput,
        startDate, setStartDate} = useGanttContext();

    // Add Task
    const addTask = () => {
      const { name, start, end } = taskInput;
      if(!startDate){
        toast.error("Select Gantt Start date")
      }
      else if (name && start && end) {
        setTasks([...tasks, { ...taskInput }]);
        setTaskInput({ name: "", start: "", end: "" });
        toast.success("Task Added")
      } else if(!name){
        toast.error("Task Name can not be empty");
      } else if(!start){
        toast.error("Select Start date");
      } else if(!end){
        toast.error("Select End date");
      }
    };

  return (
    <div>
        <SubTitle text1={"Gantt Start date"}/>
        <div>
          <input onChange={(e)=>setStartDate(e.target.value)} type="date" className="border p-2 rounded w-full my-2"/>
        </div>

        <SubTitle text1={"Add Tasks"} />
      <div className="mb-2 space-y-2">
        <input
          type="text"
          placeholder="Task Name (e.g., Design Phase)"
          value={taskInput.name}
          onChange={(e) => setTaskInput({ ...taskInput, name: e.target.value })}
          className="border p-2 rounded w-full"
        />
        <div className="flex gap-5">
          <div className="w-full">
            <h1 className="text-lg m-2">Task Start Date</h1>
            <input
              type="date"
              placeholder="Start Date (e.g., 2025/04/18)"
              value={taskInput.start}
              onChange={(e) => setTaskInput({ ...taskInput, start: e.target.value })}
              className="border p-2 rounded w-full"
            />
          </div>

          <div className="w-full">
            <h1 className="text-lg m-2 ">Task End Date</h1>
            <input
              type="date"
              placeholder="End Date (e.g., 2025/04/25)"
              value={taskInput.end}
              onChange={(e) => setTaskInput({ ...taskInput, end: e.target.value })}
              className="border p-2 rounded w-full"
            />
          </div>
        </div>
        
        
        <button
          onClick={addTask}
          className="bg-[#e6e6e6] text-gray-700 p-2 w-full rounded cursor-pointer my-2"
        >
          Add Task
        </button>
      </div>
    </div>
  )
}

export default InputSection