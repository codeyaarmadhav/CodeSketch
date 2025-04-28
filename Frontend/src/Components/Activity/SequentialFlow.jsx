import React, { useState } from "react";
import SubTitle from "../SubTitle.jsx";
import {useActivityContext} from "../../context/ActivtyContext.jsx";
import {toast} from 'react-toastify';

function SequentialFlow() {
  const { code, setCode } = useActivityContext();

  const [sequentialAct, setSequentialAct] = useState("");

  function addSequentialAct() {
    if(sequentialAct){
      let newCode = code + `:${sequentialAct};` + "\n";
      setCode(newCode);
      setSequentialAct("");
      toast.success("Sequential Activity Added");
    }else {
      toast.error("Input field can not be empty");
    }
  }

  return (
    <div className="mb-2">
      <SubTitle text1={"Add Sequential FLow"} />

      <div>
        <input
          type="text"
          placeholder="Enter Activity"
          value={sequentialAct}
          onChange={(e) => setSequentialAct(e.target.value)}
          className="border p-2 rounded w-full"
          onKeyDown={(e) => {if(e.key === "Enter") addSequentialAct()}}
        />

        <button
          className="bg-[#e6e6e6] text-gray-700 p-2 my-2 w-full rounded cursor-pointer"
          onClick={addSequentialAct}
        >
          Add Sequential Activity
        </button>
      </div>
    </div>
  );
}

export default SequentialFlow;
