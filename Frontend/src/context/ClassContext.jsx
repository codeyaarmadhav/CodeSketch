import { createContext, useContext, useState } from "react";

const ClassContext = createContext();

export const ClassContextProvider = (props) => {
    const [className, setClassName] = useState('');
    const [attributeName, setAttributeName] = useState({name:"", attributeType: "Integer", className:""});
    const [methodName, setMethodName] = useState({methodType: "Void", methodClass:"", name:""});
    const [classInput, setClassInput] = useState([]);

    const [generalRelation, setGeneralRelation] = useState([]);
    const [generalRelationInput, setGeneralRelationInput] = useState({from:"", to:""})

    const [relation, setRelation] = useState([]);
    const [relationInput, setRelationInput] = useState({from:"", multiplicity1:"", associationName: "", assciationType:"", direction:"", to:"", multiplicity2:""});
    

  return(
    <ClassContext.Provider value={{
        className, setClassName,
        attributeName, setAttributeName,
        methodName, setMethodName,
        classInput, setClassInput,
        generalRelation, setGeneralRelation,
        generalRelationInput, setGeneralRelationInput,
        relation, setRelation,
        relationInput, setRelationInput
    }}>
      {props.children}
    </ClassContext.Provider>
  );
}

export const useClassContext = () => useContext(ClassContext);