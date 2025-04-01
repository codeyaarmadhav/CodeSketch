import { useState } from "react";
import plantumlEncoder from "plantuml-encoder";

export default function UseCase(){
    const [umlImage, setUmlImage] = useState("");

    const [actors, setActors] = useState([]);
    const [useCases, setUseCases] = useState([]);
    const [relationships, setRelationships] = useState([]);
    const [actorInput, setActorInput] = useState("");
    const [useCaseInput, setUseCaseInput] = useState("");
    const [relInput, setRelInput] = useState({ from: "", to: "", type: "-->" });

    // Add Actor
  const addActor = () => {
    if (actorInput.trim()) {
      setActors([...actors, actorInput.trim()]);
      setActorInput("");
    }
  };

  // Add Use Case
  const addUseCase = () => {
    if (useCaseInput.trim()) {
      setUseCases([...useCases, useCaseInput.trim()]);
      setUseCaseInput("");
    }
  };

  // Add Relationship
  const addRelationship = () => {
    if (relInput.from && relInput.to) {
      setRelationships([...relationships, { ...relInput }]);
      setRelInput({ from: "", to: "", type: "-->" });
    }
  };

  // Generate PlantUML Code
  const generatePlantUML = () => {
    let code = "@startuml\n";

    code += `skinparam actorStyle awesome\n`;

    actors.forEach((actor) => {
      code += `actor ${actor}\n`;
    });

    useCases.forEach((useCase) => {
      code += `(${useCase})\n`;
    });

    relationships.forEach(({ from, to, type }) => {
      code += `${from} ${type} (${to})\n`;
    });

    code += "@enduml";
    return code;
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const encodedUml = plantumlEncoder.encode(generatePlantUML()); // ✅ Encode UML
        const imageUrl = `http://www.plantuml.com/plantuml/png/${encodedUml}`;
  
        setUmlImage(imageUrl); // ✅ Update state with URL
      } catch (error) {
        console.error("Error generating UML:", error);
      }
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Use Case Diagram Generator</h2>

            {/* Actor Input */}
            <div className="mb-2">
              <input
                type="text"
                placeholder="Enter Actor (e.g., User)"
                value={actorInput}
                onChange={(e) => setActorInput(e.target.value)}
                className="border p-2 rounded w-full"
              />
              <button onClick={addActor} className="bg-blue-500 text-white p-2 mt-2 w-full">Add Actor</button>
            </div>

            {/* Use Case Input */}
            <div className="mb-2">
              <input
                type="text"
                placeholder="Enter Use Case (e.g., Login)"
                value={useCaseInput}
                onChange={(e) => setUseCaseInput(e.target.value)}
                className="border p-2 rounded w-full"
              />
              <button onClick={addUseCase} className="bg-green-500 text-white p-2 mt-2 w-full">Add Use Case</button>
            </div>

            {/* Relationship Input */}
            <div className="mb-2">
              

              <select 
                value={relInput.from}
                onChange={(e) => setRelInput({ ...relInput, from: e.target.value })}
              >
                <option >Actor/Use Case</option>
                {actors.map((actor) => (
                  <option key={actor} value={actor}>{actor}</option>
                ))}
                {useCases.map((usecase) => (
                  <option key={usecase} value={usecase}>{usecase}</option>
                ))}
              </select>

              <select
                value={relInput.type}
                onChange={(e) => setRelInput({ ...relInput, type: e.target.value })}
                className="border p-2 rounded w-full mt-2"
              >
                <option value="-->">Interacts With </option>
                <option value=".>">Includes </option>
                <option value="..>">Extends </option>
              </select>

              <select 
                value={relInput.to}
                onChange={(e) => setRelInput({ ...relInput, to: e.target.value })}
              >
                <option >Actor/Use Case</option>
                {actors.map((actor) => (
                  <option key={actor} value={actor}>{actor}</option>
                ))}
                {useCases.map((usecase) => (
                  <option key={usecase} value={usecase}>{usecase}</option>
                ))}
              </select>

              <button onClick={addRelationship} className="bg-purple-500 text-white p-2 mt-2 w-full">
                Add Relationship
              </button>
            </div>

            {/* Generated PlantUML Code */}
              <h3 className="text-lg font-bold mt-4">Generated PlantUML Code:</h3>
              <textarea
                readOnly
                value={generatePlantUML()}
                className="border p-2 w-full h-40 mt-2"
              ></textarea>

            <br />
            <button onClick={handleSubmit}>Draw</button>

            {umlImage && (
                <div>
                  <h3>Generated UML Diagram:</h3>
                  <img src={umlImage} alt="UML Diagram" style={{ border: "1px solid #ddd", padding: "5px" }} />
                </div>
            )}
        </div>
    )
}