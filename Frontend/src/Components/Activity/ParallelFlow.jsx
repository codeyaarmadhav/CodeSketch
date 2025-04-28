import React, { useState } from "react";
import SubTitle from "../SubTitle.jsx";
import { useActivityContext } from "../../context/ActivtyContext.jsx";
import {toast} from 'react-toastify';

function ParallelFlow() {
  const {code, setCode } = useActivityContext();

  const [activityOne, setActivityOne] = useState("");
  const [activityTwo, setActivityTwo] = useState("");
  const [rightParallelAct, setRightParallelAct] = useState([]);
  const [leftParallelAct, setLeftParallelAct] = useState([]);

  function addActivityOne() {
    if(!activityOne){
      toast.error("Activity Field can not be empty");
      return;
    }
    setLeftParallelAct([...leftParallelAct, activityOne]);
    setActivityOne("");
    toast.success("Activity Added");
  }

  function addActivityTwo() {
    if(!activityTwo){
      toast.error("Activity Field can not be empty");
      return;
    }
    setRightParallelAct([...rightParallelAct, activityTwo]);
    setActivityTwo("");
    toast.success("Activity Added");
  }

  function addParallelActivity() {
    if(leftParallelAct.length === 0){
      toast.error("Left Parallel can not be empty")
      return;
    }
    else if(rightParallelAct.length === 0){
      toast.error("Right Parallel can not be empty")
      return;
    }
    let newCode = `fork\n`;

    leftParallelAct.forEach((act) => {
      newCode += `  :"${act}";\n`;
    });

    newCode += `fork again\n`;

    rightParallelAct.forEach((act) => {
      newCode += `  :"${act}";\n`;
    });

    newCode += "end fork\n";

    setCode(code + newCode);
    setRightParallelAct("");
    setLeftParallelAct("");
    toast.success("Paralle Activity added");
  }

  return (
    <div>
      <SubTitle text1={"Add Parallel Flow"} />

      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full">
          <h1 className="text-lg font-semibold text-gray-700 px-5">LEFT</h1>

          <div className="flex flex-col gap-3 justify-between w-full rounded-lg shadow-lg bg-white transition-shadow duration-300 text-base ease-in-out border-gray-400 border px-3 py-3 my-2">
            <h1 className="text-lg font-semibold text-gray-700 px-3">
              Add Activity
            </h1>

            <input
              type="text"
              placeholder="Enter Activity"
              value={activityOne}
              onChange={(e) => setActivityOne(e.target.value)}
              className="border p-2 rounded w-full"
            />

            <button
              className="bg-[#e6e6e6] text-gray-700 p-2 my-2 w-full rounded cursor-pointer"
              onClick={addActivityOne}
            >
              Add Activity
            </button>
          </div>
        </div>

        <div className="w-full">
          <h1 className="text-lg font-semibold text-gray-700 px-3">RIGHT</h1>

          <div className="flex flex-col gap-3 justify-between w-full rounded-lg shadow-lg bg-white transition-shadow duration-300 text-base ease-in-out border-gray-400 border px-3 py-3 my-2">
            <h1 className="text-lg font-semibold text-gray-700 px-5">
              Add Activity
            </h1>

            <input
              type="text"
              placeholder="Enter Activity"
              value={activityTwo}
              onChange={(e) => setActivityTwo(e.target.value)}
              className="border p-2 rounded w-full"
            />

            <button
              className="bg-[#e6e6e6] text-gray-700 p-2 my-2 w-full rounded cursor-pointer"
              onClick={addActivityTwo}
            >
              Add Activity
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={addParallelActivity}
        className="bg-[#e6e6e6] text-gray-700 p-2 my-2 w-full rounded cursor-pointer"
      >
        Add Parallel Activity
      </button>
    </div>
  );
}

export default ParallelFlow;
