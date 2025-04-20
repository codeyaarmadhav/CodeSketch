import { startTransition, useState } from "react";
import plantumlEncoder from "plantuml-encoder";
import Title from "./Title";
import SubTitle from "./SubTitle";

const GanttChart = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState({ name: "", start: "", end: "" });
  const [startDate, setStartDate] = useState("")
  const [umlImage, setUmlImage] = useState("");

  // Add Task
  const addTask = () => {
    const { name, start, end } = taskInput;
    if (name && start && end) {
      setTasks([...tasks, { ...taskInput }]);
      setTaskInput({ name: "", start: "", end: "" });
    }
  };

  // Remove Task
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Generate PlantUML Gantt Code
  const generatePlantUML = () => {
    let code = "@startgantt\n[Project] lasts 30 days\n";

    code += `project starts ${startDate} \n`

    tasks.forEach(({ name, start, end }) => {
      code += `["${name}"] starts ${start} and ends ${end}\n`;
    });

    code += "@endgantt";
    return code;
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const encodedUml = plantumlEncoder.encode(generatePlantUML());
      const imageUrl = `http://www.plantuml.com/plantuml/png/${encodedUml}`;
      setUmlImage(imageUrl);
    } catch (error) {
      console.error("Error generating Gantt chart:", error);
    }
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(umlImage);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "gantt_chart.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed", error);
      alert("Failed to download image. Try right-click > Save Image As.");
    }
    
  };


  return (
    <div>
      <Title text1={"Gantt Chart"} text2={"Generator"} />

      <SubTitle text1={"Gantt Start date"}/>
      <div>
        <input onChange={(e)=>setStartDate(e.target.value)} type="date" className="border p-2 rounded w-full"/>
        <button className="bg-[#e6e6e6] text-gray-700 p-2 my-2 w-full rounded cursor-pointer">Set date</button>
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
            <h1 className="text-lg">Task Start Date</h1>
            <input
              type="date"
              placeholder="Start Date (e.g., 2025/04/18)"
              value={taskInput.start}
              onChange={(e) => setTaskInput({ ...taskInput, start: e.target.value })}
              className="border p-2 rounded w-full"
            />
          </div>

          <div className="w-full">
            <h1 className="text-lg">Task End Date</h1>
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
          className="bg-[#e6e6e6] text-gray-700 p-2 w-full rounded cursor-pointer"
        >
          Add Task
        </button>
      </div>

      {tasks.length > 0 && (
        <>
          <SubTitle text1={"Tasks"} />
          <div>
            {tasks.map((task, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg shadow-lg bg-white border-gray-400 border px-3 py-2 m-2"
              >
                <p>
                  <strong>{task.name}</strong> ({task.start} → {task.end})
                </p>
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

      <button
        className="bg-[#a0a7ac] text-white p-2 my-6 w-full rounded cursor-pointer"
        onClick={handleSubmit}
      >
        Generate Gantt Chart
      </button>

      {umlImage && (
        <>
          <SubTitle text1={"Generated Gantt Chart"} />
          <div className="flex flex-col items-center my-4">
            <img src={umlImage} alt="Gantt Chart" />
          </div>
          <div className="p-4">
            <button
              onClick={handleDownload}
              className="bg-[#a0a7ac] text-white p-2 my-2 w-full rounded cursor-pointer"
            >
              Download Gantt Chart
            </button>
          </div>
        </>
      )}
    </div>
  );
}


export default GanttChart