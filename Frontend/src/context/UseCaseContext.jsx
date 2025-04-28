import { createContext, useContext, useState } from "react";

const UseCaseContext = createContext();

export const UseCaseContextProvider = (props) => {
    const [actors, setActors] = useState([]);
    const [useCases, setUseCases] = useState([]);
    const [relationships, setRelationships] = useState([]);
    const [actorInput, setActorInput] = useState("");
    const [useCaseInput, setUseCaseInput] = useState("");
    const [relInput, setRelInput] = useState({ from: "", to: "", type: "-->" });

    const [actorStyle, setActorStyle] = useState("");

  return(
    <UseCaseContext.Provider value={{
      actors, setActors,
      useCases, setUseCases,
      relationships, setRelationships,
      actorInput, setActorInput,
      useCaseInput, setUseCaseInput,
      relInput, setRelInput,
      actorStyle, setActorStyle
    }}>
      {props.children}
    </UseCaseContext.Provider>
  );
}

export const useUseCaseContext = () => useContext(UseCaseContext);