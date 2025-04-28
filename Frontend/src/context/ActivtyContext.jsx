import { createContext, useContext, useState } from "react";

const ActivityContext = createContext();

export default function ActivityContextProvider(props) {
  const [flow, setFlow] = useState("sequential");
  const [code, setCode] = useState("@startuml\nstart\n");

  return (
    <ActivityContext.Provider value={{
      flow, setFlow,
      code, setCode
    }}>
      {props.children}
    </ActivityContext.Provider>
  );
}

export const useActivityContext = () => useContext(ActivityContext);
