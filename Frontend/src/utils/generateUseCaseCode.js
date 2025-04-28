import { useUseCaseContext } from "../context/UseCaseContext.jsx";

function generateUMLCode() {
    const {actors, useCases, relationships, actorStyle} = useUseCaseContext();

    // Generate PlantUML Code
    let code = "@startuml\n";

    code += `${actorStyle}\n`;

    actors.forEach((actor) => {
      code += `actor "${actor}"\n`;
    });

    useCases.forEach((useCase) => {
      code += `("${useCase}")\n`;
    });

    relationships.forEach(({ from, to, type }) => {
      code += `${from} ${type} (${to})\n`;
    });

    code += "@enduml";
    return code;
}

export default generateUMLCode