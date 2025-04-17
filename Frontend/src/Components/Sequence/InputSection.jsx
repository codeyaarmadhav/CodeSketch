import React from "react";
import SubTitle from "../SubTitle";
import { useSequenceContext } from "./SequenceContext";

function InputSection() {
  const { objects, setObjects, objectInput, setObjectInput } =
    useSequenceContext();

  //Add Object
  function addObject() {
    if (objectInput === "") return;
    setObjects([...objects, objectInput]);
    setObjectInput("");
  }

  return (
    <div>
      <SubTitle text1={"Add Objects"} />
      <div>
        <input
          value={objectInput}
          onChange={(e) => setObjectInput(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="Object Name"
          type="text"
        />
        <button
          className="bg-[#e6e6e6] text-gray-700 p-2 my-2 w-full rounded cursor-pointer"
          onClick={addObject}
        >
          Add Object
        </button>
      </div>
    </div>
  );
}

export default InputSection;
