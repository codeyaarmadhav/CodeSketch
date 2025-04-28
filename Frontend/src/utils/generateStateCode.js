import { useStateContext } from "../context/StateContexxt";


export default function generateStateCode(){
    const {states, transition} = useStateContext();

    let code = "@startuml\n";

    states.forEach((state) => {
        code += `"${state.name}" : "${state.desc}"\n`
    });

    transition.forEach((trans) => {
        code += `${trans.from} --> ${trans.to} ${trans.label ? `: ${trans.label}` : ""}\n`
    });
    console.log(code);
    code += "@enduml";

    return code;
}