import React, { useState } from 'react'
import Title from './Title';
import SubTitle from './SubTitle';
import PlantUmlEncoder from 'plantuml-encoder';

function ClassForm() {
    const [umlImage, setUmlImage] = useState('');

    const [className, setClassName] = useState('');
    const [attributeName, setAttributeName] = useState({attributeType: "Integer"});
    const [methodName, setMethodName] = useState({methodType: "Void"});
    const [classInput, setClassInput] = useState([]);

    const [generalRelation, setGeneralRelation] = useState([]);
    const [generalRelationInput, setGeneralRelationInput] = useState({from:"", to:""})

    //add clsses to classInput
    function addClass(){
        if(className.length === 0) return;
        setClassInput((prev) => {
            return [...prev, {className: className, attributes: [], methods: []}]
        })
        setClassName('');
    }

    //add attributes to classInput
    function addAttribute(){
        if(attributeName.className.length === 0 || attributeName.name.length === 0) return;
        let updatedClass = classInput.map((classes) => {
            if(classes.className === attributeName.className){
                return {
                    ...classes, attributes: [...classes.attributes, `${attributeName.name}: ${attributeName.attributeType}`]
                }
            }
            return classes;
        })
        setClassInput(updatedClass);
    }

    //add methods to classInput
    function addMethod(){
        if(methodName.methodClass.length === 0 || methodName.name.length === 0) return;
        let updatedClass = classInput.map((classes) => {
            if(classes.className === methodName.methodClass){
                return {
                    ...classes, methods: [...classes.methods, `${methodName.name}(): ${methodName.methodType}`]
                }
            }
            return classes;
        })
        setClassInput(updatedClass);
    }

    //add general relation to classInput
    function handleGeneralRelation(){
        if(generalRelationInput.from.length === 0 || generalRelationInput.to.length === 0) return;
        setGeneralRelation([...generalRelation, generalRelationInput]);
        setGeneralRelationInput({from:"", to:""});
    }

    //removeclass
    function removeClass(index){
        setClassInput(classInput.filter((_, i) => i !== index));
    }

    //remove attribute
    function removeAttribute(index){
        setClassInput(classInput.map((classes) => {
            return {
                ...classes, attributes: classes.attributes.filter((_, i) => i !== index)
            }
        }));
    }

    //remove method
    function removeMethod(index){
        setClassInput(classInput.map((classes) => {
            return {
                ...classes, methods: classes.methods.filter((_, i) => i !== index)
            }
        }));
    }

    //generate plant uml code
    function generatePlantUML(){
        let code = '@startuml\n';

        code += classInput.map((classes)=> {
            return `class ${classes.className}{\n ${classes.attributes.map((attribute) => `${attribute}\n`)}\n${classes.methods.map((method) => `${method}\n`)}}\n`;
        }).join("");

        code += generalRelation.map((relation) => {
            return `${relation.from} <|-- ${relation.to}\n`;
        }).join("");

        code += "@enduml";

        return code;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const encodedUml = PlantUmlEncoder.encode(generatePlantUML()); // ✅ Encode UML
          const imageUrl = `http://www.plantuml.com/plantuml/png/${encodedUml}`;
    
          setUmlImage(imageUrl); // ✅ Update state with URL
        } catch (error) {
          console.error("Error generating UML:", error);
        }
    };
    
    const handleDownload = async () => {
      try {
        const response = await fetch(umlImage, {
          mode: 'cors' // make sure CORS is allowed
        });

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "diagram.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Optional: revoke object URL to free memory
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Download failed", error);
        alert("Failed to download image. Try right-click > Save Image As.");
      }
    };
    
    //console.log(generalRelation);
  return (
    <div>
        <Title text1="Class Diagram" text2="Generator" />

        {/* Add Class to classInput */}
        <SubTitle text1="Add Class" />
        <div>
            <input
                type="text"
                placeholder='Class Name'
                className='border p-2 rounded w-full'
                value={className}
                onChange={(e) => setClassName(e.target.value)}
            />
            <button onClick={addClass} className='bg-[#e6e6e6] text-gray-700 p-2 my-2 w-full rounded cursor-pointer'>Add Class</button>
        </div>

        {/* Add Attribute to classInput */}
        <SubTitle text1={"Add Attribute"} />
        <div className='mb-2'>
            <div className='md:flex justify-between items-center gap-5'>
                <select
                    className="border p-2 my-1 md:m-0 rounded w-full md:w-1/3"
                    onChange={(e) => setAttributeName({...attributeName, className:e.target.value})}
                >
                    <option>Select Class</option>
                    {
                        classInput.map((classes) => (
                            <option key={classes.className} value={classes.className}>{classes.className}</option>
                        ))
                    }
                </select>

                <input onChange={(e) => setAttributeName({...attributeName, name: e.target.value})} type="text" className='border p-2 rounded w-full' placeholder='Attribute Name'/>

                <select
                    className="border p-2 my-1 md:m-0 rounded w-full md:w-1/3"
                    onChange={(e) => setAttributeName({...attributeName, attributeType:e.target.value})}
                >
                    <option value="Integer">Integer</option>
                    <option value="Float">Float</option>
                    <option value="String">String</option>
                    <option value="Long">Long</option>
                    <option value="Double">Double</option>
                    <option value="Boolean">Boolean</option>
                </select>
            </div>

            <button onClick={addAttribute} value={attributeName} className='bg-[#e6e6e6] text-gray-700 p-2 my-2 w-full rounded cursor-pointer'>Add Attribute</button>
        </div>

        {/* Add Method to classInput */}
        <SubTitle text1={"Add Method"} />
        <div className='mb-2'>
            <div className='md:flex justify-between items-center gap-5'>
                <select
                    className="border p-2 my-1 md:m-0 rounded w-full md:w-1/3"
                    onChange={(e) => setMethodName({...methodName, methodClass:e.target.value})}
                >
                    <option>Select Class</option>
                    {
                        classInput.map((classes) => (
                            <option key={classes.className} value={classes.className}>{classes.className}</option>
                        ))
                    }
                </select>

                <input onChange={(e) => setMethodName({...methodName, name:e.target.value})} type="text" className='border p-2 rounded w-full' placeholder='Method Name'/>

                <select
                    className="border p-2 my-1 md:m-0 rounded w-full md:w-1/3"
                    onChange={(e) => setMethodName({...methodName, methodType: e.target.value})}
                >
                    <option value="Void">Void</option>
                    <option value="Integer">Integer</option>
                    <option value="Float">Float</option>
                    <option value="String">String</option>
                    <option value="Long">Long</option>
                    <option value="Double">Double</option>
                    <option value="Boolean">Boolean</option>
                </select>
            </div>

            <button onClick={addMethod} className='bg-[#e6e6e6] text-gray-700 p-2 my-2 w-full rounded cursor-pointer'>Add Method</button>
        </div>

        {/* Add general relationship*/}
        <SubTitle text1={"Add Generalization/Specialization"} />
        <div className='mb-2'>
            <div className='md:flex justify-between items-center gap-5'>
                <select
                    className="border p-2 my-1 md:m-0 rounded w-full md:w-1/3"
                    onChange={(e) => setGeneralRelationInput({...generalRelationInput, from:e.target.value})}
                >
                    <option>Select Class</option>
                    {
                        classInput.map((classes) => (
                            <option key={classes.className} value={classes.className}>{classes.className}</option>
                        ))
                    }
                </select>

                <p className='flex items-center justify-between w-full rounded shadow-lg bg-white transition-shadow duration-300 text-base ease-in-out border-gray-400 border px-3 py-2 mx-0 my-1 sm:m-2'>
                    Extends
                </p>

                <select
                    className="border p-2 my-1 md:m-0 rounded w-full md:w-1/3"
                    onChange={(e) => setGeneralRelationInput({...generalRelationInput, to:e.target.value})}
                >
                    <option>Select Class</option>
                    {
                        classInput.map((classes) => (
                            <option key={classes.className} value={classes.className}>{classes.className}</option>
                        ))
                    }
                </select>  
            </div>

            <button onClick={handleGeneralRelation} className='bg-[#e6e6e6] text-gray-700 p-2 my-2 w-full rounded cursor-pointer'>Add Relation</button>
        </div>

        {/* Add relation */}
        <SubTitle text1={"Add Relation"} />
        <div>
            <div className='flex gap-5 mb-3'>
                <select
                className="border p-2 my-1 md:m-0 rounded w-full md:w-1/2"
                >
                    <option>Select Class 1</option>
                    {
                        classInput.map((classes) => (
                            <option key={classes.className} value={classes.className}>{classes.className}</option>
                        ))
                    }
                </select>
                <select
                className="border p-2 my-1 md:m-0 rounded w-full md:w-1/2"
                >
                    <option>Multiplicity</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="0..1">0..1</option>
                    <option value="0..*">0..*</option>
                    <option value="1..*">1..*</option>
                    <option value="*">*</option>
                </select>
            </div>

            <div className='flex gap-5 mb-3'>
                <input className='border p-2 rounded w-1/3' placeholder='Association Name' type="text" />

                <select
                className="border p-2 my-1 md:m-0 rounded w-full md:w-1/3"
                >
                    <option>Association Type</option>
                    <option value="">Simple Association</option>
                    <option value="">Aggregation</option>
                    <option value="">Composition</option>
                    <option value="">Dependency</option>
                </select>

                <select
                className="border p-2 my-1 md:m-0 rounded w-full md:w-1/3"
                >
                    <option>Direction</option>
                    <option value="">To</option>
                    <option value="">From</option>
                </select>
            </div>

            <div className='flex gap-5 '>
                <select
                className="border p-2 my-1 md:m-0 rounded w-full md:w-1/2"
                >
                    <option>Select Class 2</option>
                    {
                        classInput.map((classes) => (
                            <option key={classes.className} value={classes.className}>{classes.className}</option>
                        ))
                    }
                </select>
                <select
                className="border p-2 my-1 md:m-0 rounded w-full md:w-1/2"
                >
                    <option>Multiplicity</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="0..1">0..1</option>
                    <option value="0..*">0..*</option>
                    <option value="1..*">1..*</option>
                    <option value="*">*</option>
                </select>
            </div>
        </div>

        {/* Display classes */}
        <div className={`${classInput.length > 0 ? "flex" : "hidden"} flex-col w-full  `}>
            <SubTitle text1={"Classes"} />
            <div className='flex flex-col w-full'>
                {classInput.map((classses, index) => (
                    <div key={index} className="flex flex-col items-center justify-between w-full rounded-lg shadow-lg bg-white transition-shadow duration-300 text-base ease-in-out border-gray-400 border px-3 py-2 m-0 sm:m-2">
                        
                        <div className='flex w-full items-center justify-between'>
                            <p className='bg-gray-200 rounded p-1'><span className=' mr-4 text-md sm:text-xl leading-2 text-gray-700'>Class</span>{classses.className}</p>
                            <button className="bg-[#a0a7ac] text-white text-xs md:text-sm rounded p-1" onClick={() => removeClass(index)}>Remove</button>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:gap-18 mb-2 w-full">
                            <div className={`${classses.attributes.length > 0 ? "flex" : "hidden"} flex-col w-full md:w-1/2 `}>
                                <h1 className='m-4 text-md sm:text-lg leading-2 text-gray-700'>Attributes</h1>
                                <div>
                                    {classses.attributes.map((attribute, index) => (
                                    <div key={index} className="flex items-center justify-between w-full rounded-lg shadow-lg bg-white transition-shadow duration-300 text-base ease-in-out border-gray-400 border px-3 py-2 m-0 sm:m-2">
                                        <p>{attribute}</p>
                                        <button className="bg-[#a0a7ac] text-white text-xs md:text-sm rounded p-1" onClick={() => removeAttribute(index)}>Remove</button>
                                    </div>
                                    ))}
                                </div>
                                
                            </div>
                                
                            <div className={`${classses.methods.length > 0 ? "flex" : "hidden"} flex-col w-full md:w-1/2 `}>
                            <h1 className='m-4 text-md sm:text-xl leading-2 text-gray-700'>Methods</h1>
                                <div>
                                    {classses.methods.map((method, index) => (
                                    <div key={index} className="flex items-center justify-between w-full rounded-lg shadow-lg bg-white transition-shadow duration-300 text-base ease-in-out border-gray-400 border px-3 py-2 m-0 sm:m-2">
                                        <p >{method}</p>
                                        <button className="bg-[#a0a7ac] text-white text-xs md:text-sm rounded p-1" onClick={() => removeMethod(index)}>Remove</button>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>

        {/* Generate Class Diagram */}
        <SubTitle text1={"Generate Class Diagram"} />
        <div className='mb-2'>
            <button onClick={handleSubmit} className='bg-[#a0a7ac] text-white p-2 my-2 w-full rounded cursor-pointer'>Generate Class Diagram</button>
        </div>

        {/* Display and Download Diagram */}
        {umlImage && (
            <div className="">
                <SubTitle text1={"Generated UML Diagram"} />
                <div className="flex flex-col items-center my-15">
                    <img src={umlImage} alt="UML Diagram" />
                </div>
                <div className="p-4">
                    <button
                        onClick={handleDownload}
                        className="bg-[#a0a7ac] text-white p-2 my-2 w-full rounded cursor-pointer"
                    >
                    Download Diagram
                    </button>
                </div>
            </div>
        )}
    </div>
  )
}

export default ClassForm