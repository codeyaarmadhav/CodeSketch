import { createContext, useContext, useState } from "react";

const SequenceContext = createContext();

export default function SequenceContextProvider(props){
    const [objects, setObjects] = useState([]);
    const [objectInput, setObjectInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState({from:"", to:"", message:"", type:"->"});

    return(
        <SequenceContext.Provider value={{
            objects, setObjects,
            objectInput, setObjectInput,
            messages, setMessages,
            messageInput, setMessageInput
        }}>
            {props.children}
        </SequenceContext.Provider>
    )
}

export const useSequenceContext = () => useContext(SequenceContext);