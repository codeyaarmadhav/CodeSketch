import React from 'react'
import { useGanttContext } from '../../context/GanttContext.jsx'
import SubTitle from '../SubTitle.jsx';

function DisplaySection() {

    const {tasks, setTasks, startDate} = useGanttContext();

    // Remove Task
    const removeTask = (index) => {
      setTasks(tasks.filter((_, i) => i !== index));
    };
    return (
    <div>
      {tasks.length > 0 && (
        <>
          <SubTitle text1={"Tasks"} />
          <div>
            {tasks.map((task, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg shadow-lg bg-white border-gray-400 border px-4 py-3 my-3 gap-4 "
              >
                <div className='flex w-full gap-3'>
                  <p className='p-1 bg-gray-100 rounded w-1/3 shadow-sm '>Task: {task.name}</p>
                  <p className='p-1 bg-gray-100 rounded w-1/3 shadow-sm '>From: {task.start}</p>
                  <p className='p-1 bg-gray-100 rounded w-1/3 shadow-sm '>To: {task.end}</p>
                </div>
                
                <button
                  className="bg-[#a0a7ac] text-white text-xs rounded p-1"
                  onClick={() => removeTask(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </>
      )}

    </div>
  )
}

export default DisplaySection