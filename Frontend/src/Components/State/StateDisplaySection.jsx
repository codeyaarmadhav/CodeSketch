import React from "react";
import SubTitle from "../SubTitle.jsx";
import { useStateContext } from "../../context/StateContexxt.jsx";
import { toast } from "react-toastify";

function StateDisplaySection() {
  const {
    states,
    setStates,
    transition,
    setStateTransition,
  } = useStateContext(); 

  //remove state
  function removeState(index){
    let updatedStates = states.filter((_,i) => i !== index );
    setStates(updatedStates);
    toast.success("State removed");
  }

  //remove transition
  function removeTransition(index){
    let updatedTransition = transition.filter((_,i) => i !== index );
    setStateTransition(updatedTransition);
    toast.success("Transition removed");
  }

  return (
    <div>
      <div
        className={`${states.length > 0 ? "flex" : "hidden"} flex-col w-full`}
      >
        <SubTitle text1={"States"} />
        {states.map((state, index) => (
          <div
            key={index}
            className="flex items-center justify-between w-full rounded-lg shadow-lg bg-white transition-shadow duration-300 text-base ease-in-out border-gray-400 border px-3 py-2 m-2 gap-2"
          >
            <p className="bg-gray-100 text-xs md:text-sm rounded p-1 w-1/3">
              Name: <span>{state.name}</span>
            </p>

            <p className="bg-gray-100 text-xs md:text-sm rounded p-1 w-1/3">
              Desc: <span>{state.desc}</span>
            </p>

            <button
              className="bg-[#a0a7ac] text-white text-xs md:text-sm rounded p-1"
              onClick={() => removeState(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div
        className={`${transition.length > 0 ? "flex" : "hidden"} flex-col w-full`}
      >
        <SubTitle text1={"States"} />
        {transition.map((trans, index) => (
          <div
            key={index}
            className="flex items-center justify-between w-full rounded-lg shadow-lg bg-white transition-shadow duration-300 text-base ease-in-out border-gray-400 border px-3 py-2 m-2 gap-2"
          >
            <p className="bg-gray-100 text-xs md:text-sm rounded p-1 w-1/3">
              From: <span>{trans.from === "[*]" ? "Initial" : trans.from}</span>
            </p>

            <p className="bg-gray-100 text-xs md:text-sm rounded p-1 w-1/3">
              To: <span>{trans.to === "[*]" ? "Final" : trans.from}</span>
            </p>

            <p className="bg-gray-100 text-xs md:text-sm rounded p-1 w-1/3">
              Label: {trans.label ? <span>{trans.label}</span> : "NA"}
            </p>

            <button
              className="bg-[#a0a7ac] text-white text-xs md:text-sm rounded p-1"
              onClick={() => removeTransition(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StateDisplaySection;
