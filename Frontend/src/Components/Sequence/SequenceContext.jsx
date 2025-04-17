import { createContext, useContext, useState } from "react";

const SequenceContext = createContext();

export default function SequenceContextProvider(props){
    const [objects, setObjects] = useState([]);
    const [objectInput, setObjectInput] = useState("");

    return(
        <SequenceContext.Provider value={{
            objects, setObjects,
            objectInput, setObjectInput
        }}>
            {props.children}
        </SequenceContext.Provider>
    )
}

export const useSequenceContext = () => useContext(SequenceContext);