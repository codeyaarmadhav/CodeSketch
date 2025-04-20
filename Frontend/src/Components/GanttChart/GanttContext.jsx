import { createContext, useContext, useState } from "react";

const GanttContext = createContext();

export const GanttContextProvider = (props) => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState({ name: "", start: "", end: "" });
    const [startDate, setStartDate] = useState("");

    return (
        <GanttContext.Provider value={{
            tasks, setTasks,
            taskInput, setTaskInput,
            startDate, setStartDate
        }}>
            {props.children}
        </GanttContext.Provider>
    )
}

export const useGanttContext = () => useContext(GanttContext);