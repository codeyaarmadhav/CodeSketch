import React, { startTransition } from "react";
import SubTitle from "../SubTitle.jsx";
import { useStateContext } from "../../context/StateContexxt";
import { toast } from "react-toastify";

function StateInputSection() {
  const {
    states,
    setStates,
    stateInput,
    setStateInput,
    transition,
    setStateTransition,
    transitionInput,
    setTransitionInput,
  } = useStateContext();

  //add state
  function addState() {
    if (!stateInput.name.trim()) {
      toast.error("State name can not be empty");
      return;
    } else if (!stateInput.desc.trim()) {
        toast.error("State description can not be empty");
        return;
      } 
    setStates([...states, stateInput]);
    setStateInput({ name: "", desc: "" });
    toast.success("State added successfully");
  }

  //add Transition
  function addTransition(){
    if(!transitionInput.from.trim()){
        toast.error("Select 'Transition from' field");
        return;
    } else if (!transitionInput.to.trim()){
        toast.error("Select 'Transition to' field");
        return;
    } 
    setStateTransition([...transition, transitionInput]);
    setTransitionInput({...transitionInput, label:""});
    toast.success("Transition added SuccessFully");
  }

  //console.log(states);
  return (
    <div>
      <SubTitle text1="Add States" />
      <div className="mb-2">
        <div className="flex flex-col sm:flex-row gap-5">
          <input
            type="text"
            value={stateInput.name}
            onChange={(e) =>
              setStateInput({ ...stateInput, name: e.target.value })
            }
            placeholder="Enter State Name"
            className="border p-2 rounded w-full"
          />

          <input
            type="text"
            value={stateInput.desc}
            onChange={(e) =>
              setStateInput({ ...stateInput, desc: e.target.value })
            }
            placeholder="Enter State Description"
            className="border p-2 rounded w-full"
          />
        </div>

        <button
          onClick={addState}
          className="bg-[#e6e6e6] text-gray-700 p-2 my-2 w-full rounded cursor-pointer"
        >
          Add State
        </button>
      </div>

      <SubTitle text1={"Add State Transitions"} />
      <div>
        <div className="flex flex-col sm:flex-row gap-3">
          <select
            onChange={(e) =>
              setTransitionInput({ ...transitionInput, from: e.target.value })
            }
            className="border p-2 rounded my-1 md:m-0  w-full"
          >
            <option>From State</option>
            <option value="[*]">Initial State</option>
            {states.map((state) => (
              <option key={state.name} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>

          <select
            onChange={(e) =>
              setTransitionInput({ ...transitionInput, to: e.target.value })
            }
            className="border p-2 rounded my-1 md:m-0  w-full "
          >
            <option>To State</option>
            <option value="[*]">Final State</option>
            {states.map((state) => (
              <option key={state.name} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Transition Label"
            value={transitionInput.label}
            onChange={(e) =>
              setTransitionInput({ ...transitionInput, label: e.target.value })
            }
            className="border p-2 rounded w-full"
          />
        </div>

        <button
        onClick={addTransition} className="bg-[#e6e6e6] text-gray-700 p-2 my-2 w-full rounded cursor-pointer">Add Transition</button>
      </div>
    </div>
  );
}

export default StateInputSection;
