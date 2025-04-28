import { useClassContext } from "../context/ClassContext";

function generateUMLCode() {

    const {classInput, generalRelation, relation} = useClassContext();

    let code = '@startuml\n';

    code += classInput.map((classes)=> {
        return `class ${classes.className}{\n ${classes.attributes.map((attribute) => `${attribute}\n`).join("")}\n${classes.methods.map((method) => `${method}\n`).join("")}}\n`;
    }).join("");

    code += generalRelation.map((relation) => {
        return `${relation.from} <|-- ${relation.to}\n`;
    }).join("");

    code += relation.map((rel) => {
        return `${rel.from} ${rel.multiplicity1.length > 0 ? `"${rel.multiplicity1}"`: "" } ${rel.assciationType} ${rel.multiplicity2.length > 0 ? `"${rel.multiplicity2}"`: "" } ${rel.to} ${rel.associationName.lenght > 0 ? `: ${rel.associationName}` : ""}\n`;
    }).join("");

    code += "@enduml";

    return code;
}

export default generateUMLCode