import { useGanttContext } from "../context/GanttContext";

const generatePlantUML = () => {
    const {tasks, startDate} = useGanttContext();

    let code = "@startgantt\n";

    code += `project starts ${startDate} \n`

    tasks.forEach(({ name, start, end }) => {
      code += `["${name}"] starts ${start} and ends ${end}\n`;
    });

    code += "@endgantt";
    return code;
};

export default generatePlantUML;