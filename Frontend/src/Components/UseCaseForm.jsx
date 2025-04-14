import { useState } from "react";
import plantumlEncoder from "plantuml-encoder";
import Title from "./Title";
import SubTitle from "./SubTitle";

export default function UseCase(){
  const [umlImage, setUmlImage] = useState("");

  const [actors, setActors] = useState([]);
  const [useCases, setUseCases] = useState([]);
  const [relationships, setRelationships] = useState([]);
  const [actorInput, setActorInput] = useState("");
  const [useCaseInput, setUseCaseInput] = useState("");
  const [relInput, setRelInput] = useState({ from: "", to: "", type: "-->" });

  const [actorStyle, setActorStyle] = useState("");

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

  // Remove Actor
  const removeActor = (index) => {
    const updatedActors = actors.filter((_, i) => i !== index);
    setActors(updatedActors);
  };

  // Remove Use Case
  const removeUseCase = (index) => {
    const updatedUseCase = useCases.filter((_, i) => i !== index);
    setUseCases(updatedUseCase);
  };

  // Generate PlantUML Code
  const generatePlantUML = () => {
    let code = "@startuml\n";

    code += `${actorStyle}\n`;

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

  const handleDownload = async () => {
    try {
      const response = await fetch(umlImage, {
        mode: 'cors' // make sure CORS is allowed
      });

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "diagram.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Optional: revoke object URL to free memory
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed", error);
      alert("Failed to download image. Try right-click > Save Image As.");
    }
  };

  return (
    <div>
      <Title text1={"Use Case Diagram"} text2={"Generator"} />

      <SubTitle text1={"Add Actors"} />

      {/* Actor Input */}
      <div className="mb-2">
        <input
          type="text"
          placeholder="Enter Actor (e.g., User)"
          value={actorInput}
          onKeyDown={(e) => {if(e.key === "Enter") addActor()} }
          onChange={(e) => setActorInput(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button onClick={addActor} className="bg-[#e6e6e6] text-gray-700 p-2 my-2 w-full rounded cursor-pointer">Add Actor</button>
      </div>

      <SubTitle text1={"Add Use Cases"} />

      {/* Use Case Input */}
      <div className="mb-2">
        <input
          type="text"
          placeholder="Enter Use Case (e.g., Login)"
          value={useCaseInput}
          onKeyDown={(e) => {if(e.key === "Enter") addUseCase()} }
          onChange={(e) => setUseCaseInput(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button onClick={addUseCase} className="bg-[#e6e6e6] text-gray-700 p-2 my-2 w-full rounded cursor-pointer">Add Use Case</button>
      </div>

      <SubTitle text1={"Add Relationships"} />
      {/* Relationship Input */}
      <div className="mb-2">
        <div className="md:flex justify-between items-center gap-5">
          <select 
            value={relInput.from}
            onChange={(e) => setRelInput({ ...relInput, from: e.target.value })}
            className="border p-2 my-1 md:m-0 rounded w-full md:w-1/3"
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
            className="border p-2 rounded my-1 md:m-0  w-full md:w-1/3"
          >
            <option value="-->">Association </option>
            <option value="-->">Generalization </option>
            <option value=".>">Includes </option>
            <option value="..>">Extends </option>
          </select>

          <select 
            value={relInput.to}
            onChange={(e) => setRelInput({ ...relInput, to: e.target.value })}
            className="border p-2 my-1 md:m-0 rounded w-full md:w-1/3"
          >
            <option >Actor/Use Case</option>
            {actors.map((actor) => (
              <option key={actor} value={actor}>{actor}</option>
            ))}
            {useCases.map((usecase) => (
              <option key={usecase} value={usecase}>{usecase}</option>
            ))}
          </select>
        </div>
              

        <button onClick={addRelationship} className="bg-[#e6e6e6] text-gray-700 p-2 my-2 w-full rounded cursor-pointer">
          Add Relationship
        </button>
      </div>
            
      {/* Display Actors and Use Cases */}
      <div className="flex flex-col md:flex-row md:gap-18 mb-2">
        <div className={`${actors.length > 0 ? "flex" : "hidden"} flex-col w-full md:w-1/2 `}>
          <SubTitle text1={"Actors"} />
          <div>
            {actors.map((actor, index) => (
              <div key={index} className="flex items-center justify-between w-full rounded-lg shadow-lg bg-white transition-shadow duration-300 text-base ease-in-out border-gray-400 border px-3 py-2 m-2">
                <p>{actor}</p>
                <button className="bg-[#a0a7ac] text-white text-xs md:text-sm rounded p-1" onClick={() => removeActor(index)}>Remove</button>
              </div>
            ))}
          </div>
              
        </div>

        <div className={`${useCases.length > 0 ? "flex" : "hidden"} flex-col w-full md:w-1/2 `}>
          <SubTitle text1={"Use Cases"} />
          <div>
            {useCases.map((usecase, index) => (
              <div key={index} className="flex items-center justify-between w-full rounded-lg shadow-lg bg-white transition-shadow duration-300 text-base ease-in-out border-gray-400 border px-3 py-2 m-2">
                <p >{usecase}</p>
                <button className="bg-[#a0a7ac] text-white text-xs md:text-sm rounded p-1" onClick={() => removeUseCase(index)}>Remove</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Display Relationships */}

      <div className={`${relationships.length > 0 ? "flex" : "hidden"} flex-col w-full mb-2 `}>
        <SubTitle text1={"Relationships"} />
        <div>
          {relationships.map((relationship, index) => (
            <div key={index} className="flex items-center justify-between w-full rounded-lg shadow-lg bg-white transition-shadow duration-300 text-base ease-in-out border-gray-400 border px-3 py-2 m-2">
              <p className="bg-gray-100 text-xs md:text-sm rounded p-1">From:  <span>{relationship.from}</span></p>
              <p className="bg-gray-100 text-xs md:text-sm rounded p-1">Relationship:  <span>{relationship.type === "-->" ? "Interacts" : relationship.type === ".>" ? "Includes" : "Extends" }</span></p> 
              <p className="bg-gray-100 text-xs md:text-sm rounded p-1">To:  <span>{relationship.to}</span></p>
              <button className="bg-[#a0a7ac] text-white text-xs md:text-sm rounded p-1" onClick={() => setRelationships(relationships.filter((_, i) => i !== index))}>Remove</button>
            </div>
          ))}
        </div>
      </div>

      {/* Actor Style */}
      <SubTitle text1={"Actor Style"} />
      <select
        onChange={(e) => setActorStyle(e.target.value)}
        className="border p-2 rounded my-1 md:m-0  w-full mb-2"
      >
        <option value="">Default Stick Man </option>
        <option value="skinparam actorStyle awesome">User Style </option>
        <option value="skinparam actorStyle hollow">Hollow style </option>
      </select>

      {/* Generated PlantUML Code */}
      {/*
        <h3 className="text-lg font-bold mt-4">Generated PlantUML Code:</h3>
        <textarea
          readOnly
          value={generatePlantUML()}
          className="border p-2 w-full h-40 mt-2"
        ></textarea>
      */}
            

      <button className={`  bg-[#a0a7ac] text-white p-2 my-6 w-full rounded cursor-pointer`} onClick={handleSubmit}>Generate Diagram</button>
            

      {umlImage && (
        <div className="">
          <SubTitle text1={"Generated UML Diagram"} />
          <div className="flex flex-col items-center my-15">
            <img src={umlImage} alt="UML Diagram" />
          </div>
          <div className="p-4">
            <button
              onClick={handleDownload}
              className="bg-[#a0a7ac] text-white p-2 my-2 w-full rounded cursor-pointer"
            >
              Download Diagram
            </button>
          </div>
        </div>
        
      )}
    </div>
  )
}