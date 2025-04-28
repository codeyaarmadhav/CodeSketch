import React from "react";
import { useUseCaseContext } from "../../context/UseCaseContext.jsx";
import SubTitle from "../SubTitle.jsx";
import { toast } from "react-toastify";

function InputSection() {
  const {
    actors,
    setActors,
    useCases,
    setUseCases,
    relationships,
    setRelationships,
    actorInput,
    setActorInput,
    useCaseInput,
    setUseCaseInput,
    relInput,
    setRelInput,
  } = useUseCaseContext();

  // Add Actor
  const addActor = () => {
    if (actorInput.trim()) {
      setActors([...actors, actorInput.trim()]);
      setActorInput("");
      toast.success("Actor Added");
    } else {
      toast.error("Actor name can not be empty ");
    }
  };

  // Add Use Case
  const addUseCase = () => {
    if (useCaseInput.trim()) {
      setUseCases([...useCases, useCaseInput.trim()]);
      setUseCaseInput("");
      toast.success("Use Case added");
    } else {
      toast.error("Use Case can not be empty ");
    }
  };

  // Add Relationship
  const addRelationship = () => {
    if (relInput.from && relInput.to) {
      setRelationships([...relationships, { ...relInput }]);
      setRelInput({ from: "", to: "", type: "-->" });
      toast.success("Relationship added");
    } else {
      toast.error("Please select Actor/Usecase");
    }
  };

  return (
    <div>
      <SubTitle text1={"Add Actors"} />
      {/* Actor Input */}
      <div className="mb-2">
        <input
          type="text"
          placeholder="Enter Actor (e.g., User)"
          value={actorInput}
          onKeyDown={(e) => {
            if (e.key === "Enter") addActor();
          }}
          onChange={(e) => setActorInput(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          onClick={addActor}
          className="bg-[#e6e6e6] text-gray-700 p-2 my-2 w-full rounded cursor-pointer"
        >
          Add Actor
        </button>
      </div>

      <SubTitle text1={"Add Use Cases"} />

      {/* Use Case Input */}
      <div className="mb-2">
        <input
          type="text"
          placeholder="Enter Use Case (e.g., Login)"
          value={useCaseInput}
          onKeyDown={(e) => {
            if (e.key === "Enter") addUseCase();
          }}
          onChange={(e) => setUseCaseInput(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          onClick={addUseCase}
          className="bg-[#e6e6e6] text-gray-700 p-2 my-2 w-full rounded cursor-pointer"
        >
          Add Use Case
        </button>
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
            <option>Actor/Use Case</option>
            {actors.map((actor) => (
              <option key={actor} value={actor}>
                {actor}
              </option>
            ))}
            {useCases.map((usecase) => (
              <option key={usecase} value={usecase}>
                {usecase}
              </option>
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
            <option>Actor/Use Case</option>
            {actors.map((actor) => (
              <option key={actor} value={actor}>
                {actor}
              </option>
            ))}
            {useCases.map((usecase) => (
              <option key={usecase} value={usecase}>
                {usecase}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={addRelationship}
          className="bg-[#e6e6e6] text-gray-700 p-2 my-2 w-full rounded cursor-pointer"
        >
          Add Relationship
        </button>
      </div>
    </div>
  );
}

export default InputSection;
