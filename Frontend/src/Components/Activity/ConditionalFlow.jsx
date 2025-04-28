import React, { useState } from "react";
import SubTitle from "../SubTitle";
import { useActivityContext } from "../../context/ActivtyContext";
import { toast } from "react-toastify";

function ConditionalFlow() {
  const { code, setCode } = useActivityContext();

  const [activityOne, setActivityOne] = useState("");
  const [activityTwo, setActivityTwo] = useState("");
  const [condition, setCondition] = useState("");
  const [guardCondOne, setGuardCondOne] = useState("");
  const [guardCondTwo, setGuardCondTwo] = useState("");
  const [ifConditionalAct, setIfConditionalAct] = useState([]);
  const [elseConditionalAct, setElseConditionalAct] = useState([]);

  function addActivityOne() {
    if(!activityOne){
      toast.error("Input field can not be empty");
      return;
    }
    setIfConditionalAct([...ifConditionalAct, activityOne]);
    setActivityOne("");
    toast.success("Activity added successfully");
  }

  function addActivityTwo() {
    if(!activityTwo){
      toast.error("Input field can not be empty");
      return;
    }
    setElseConditionalAct([...elseConditionalAct, activityTwo]);
    setActivityTwo("");
    toast.success("Activity added successfully");
  }

  function addConditionalActivity() {
    if(!condition){
      toast.error("Condition can not be empty");
      return;
    } 
    else if(ifConditionalAct.length === 0){
      toast.error("Add Activity to If");
      return;
    }
    else if(elseConditionalAct.length === 0){
      toast.error("Add Activity to Else");
      return;
    }
    let newCode = `if (${condition}) then ${
      guardCondOne ? `(${guardCondOne})` : ""
    }\n`;

    ifConditionalAct.forEach((act) => {
      newCode += `  :"${act}";\n`;
    });

    newCode += `else (${guardCondTwo})\n`;

    elseConditionalAct.forEach((act) => {
      newCode += `  :"${act}";\n`;
    });

    newCode += "endif\n";

    setCode(code + newCode);
    setCondition("");
    setGuardCondOne("");
    setGuardCondTwo("");
    toast.success("Conditional Activity Added");
  }

  return (
    <div className="mb-2">
      <SubTitle text1="Add Conditional Flow" />

      <input
        type="text"
        placeholder="Enter Condition"
        value={condition}
        onChange={(e) => setCondition(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />

      <div className="flex md:felx-col gap-5">
        <div className="w-full">
          <h1 className="text-lg font-semibold text-gray-700 px-5">IF</h1>

          <input
            type="text"
            value={guardCondOne}
            onChange={(e) => setGuardCondOne(e.target.value)}
            className="border p-2 rounded w-full mb-2"
            placeholder="Enter Guard Condition"
          />

          <div className="flex flex-col gap-3 justify-between w-full rounded-lg shadow-lg bg-white transition-shadow duration-300 text-base ease-in-out border-gray-400 border px-3 py-3 my-2">
            <h1 className="text-lg font-semibold text-gray-700 px-3">Add Activity</h1>
          
            <input
              type="text"
              placeholder="Enter Activity"
              value={activityOne}
              onChange={(e) => setActivityOne(e.target.value)}
              className="border p-2 rounded w-full"
              onKeyDown={(e) => {if(e.key === "Enter") addActivityOne()}}
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
          <h1 className="text-lg font-semibold text-gray-700 px-3">ELSE</h1>

          <input
            type="text"
            value={guardCondTwo}
            onChange={(e) => setGuardCondTwo(e.target.value)}
            className="border p-2 rounded w-full mb-2"
            placeholder="Enter Guard Condition"
          />

          <div className="flex flex-col gap-3 justify-between w-full rounded-lg shadow-lg bg-white transition-shadow duration-300 text-base ease-in-out border-gray-400 border px-3 py-3 my-2">
            <h1 className="text-lg font-semibold text-gray-700 px-5">Add Activity</h1>

            <input
              type="text"
              placeholder="Enter Activity"
              value={activityTwo}
              onChange={(e) => setActivityTwo(e.target.value)}
              className="border p-2 rounded w-full"
              onKeyDown={(e) => {if(e.key === 'Enter') addActivityTwo()}}
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
        onClick={addConditionalActivity}
        className="bg-[#e6e6e6] text-gray-700 p-2 my-2 w-full rounded cursor-pointer"
      >
        Add Conditional Activity
      </button>
    </div>
  );
}

export default ConditionalFlow;
