import { createContext, useContext, useState } from "react";


const StateContext = createContext();

export default function StateContextProvider(props){
    const [states, setStates] = useState([]);
    const [stateInput, setStateInput] = useState({name:"", desc:""});
    const [transition, setStateTransition] = useState([]);
    const [transitionInput, setTransitionInput] = useState({from:"", to:"", label:""});

    return (
        <StateContext.Provider value={{
            states, setStates,
            stateInput, setStateInput,
            transition, setStateTransition,
            transitionInput, setTransitionInput
        }}>
            {props.children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);