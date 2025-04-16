import React from 'react'
import { useClassContext } from './ClassContext';
import SubTitle from '../SubTitle';

function DisplaySection() {

    const {className, setClassName,
        attributeName, setAttributeName,
        methodName, setMethodName,
        classInput, setClassInput,
        generalRelation, setGeneralRelation,
        generalRelationInput, setGeneralRelationInput,
        relation, setRelation,
        relationInput, setRelationInput} = useClassContext();

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

    //remove general relation
    function removeGeneralRelation(index){
        setGeneralRelation(generalRelation.filter((_, i) => i !== index));
    }

    //remove relation
    function removeRelation(index){
        setRelation(relation.filter((_, i) => i !== index));
    }

  return (
    <div>
                {/* Display classes */}
                <div className={`${classInput.length > 0 ? "flex" : "hidden"} flex-col w-full  `}>
            <SubTitle text1={"Classes"} />
            <div className='flex flex-col w-full'>
                {classInput.map((classses, index) => (
                    <div key={index} className="flex flex-col items-center justify-between w-full rounded-lg shadow-lg bg-white transition-shadow duration-300 text-base ease-in-out border-gray-400 border px-3 py-2 m-0 sm:m-2">
                        
                        <div className='flex w-full items-center justify-between'>
                            <p className='bg-gray-200 rounded p-1'><span className=' mr-4 text-md sm:text-xl leading-2 text-gray-700'>Class</span>{classses.className}</p>
                            <button className="bg-[#a0a7ac] text-white text-xs md:text-sm rounded p-1 cursor-pointer" onClick={() => removeClass(index)}>Remove</button>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:gap-18 mb-2 w-full">
                            <div className={`${classses.attributes.length > 0 ? "flex" : "hidden"} flex-col w-full md:w-1/2 `}>
                                <h1 className='m-4 text-md sm:text-lg leading-2 text-gray-700'>Attributes</h1>
                                <div>
                                    {classses.attributes.map((attribute, index) => (
                                    <div key={index} className="flex items-center justify-between w-full rounded-lg shadow-lg bg-white transition-shadow duration-300 text-base ease-in-out border-gray-400 border px-3 py-2 m-0 sm:m-2">
                                        <p>{attribute}</p>
                                        <button className="bg-[#a0a7ac] text-white text-xs md:text-sm rounded p-1 cursor-pointer" onClick={() => removeAttribute(index)}>Remove</button>
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
                                        <button className="bg-[#a0a7ac] text-white text-xs md:text-sm rounded p-1 cursor-pointer" onClick={() => removeMethod(index)}>Remove</button>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>

        {/* Display general relation */}
        <div className={`${generalRelation.length > 0 ? "flex" : "hidden"} flex-col w-1/2`}>
            <SubTitle text1={"Generalization/Specialization"} />
            {generalRelation.map((relation, index) => (
                <div key={index} className="flex items-center justify-between w-full rounded-lg shadow-lg bg-white transition-shadow duration-300 text-base ease-in-out border-gray-400 border px-3 py-2 m-0 sm:m-2">
                    <p>{relation.from} <span className='text-gray-500'>Extends</span> {relation.to}</p>
                    <button className="bg-[#a0a7ac] text-white text-xs md:text-sm rounded p-1 cursor-pointer" onClick={() => removeGeneralRelation(index)}>Remove</button>
                </div>
            ))}
        </div>

        {/* Display Relation */}
        <div className={`${relation.length > 0 ? "flex" : "hidden"} flex-col w-1/2`}>
            <SubTitle text1={"Relation"} />
            {relation.map((relation, index) => (
                <div key={index} className="flex items-center justify-between w-full rounded-lg shadow-lg bg-white transition-shadow duration-300 text-base ease-in-out border-gray-400 border px-3 py-2 m-0 sm:m-2">
                    <p>{relation.from} <span className='text-gray-500'>{relation.assciationType}</span> {relation.associationName} <span className='text-gray-500'>{relation.direction}</span> {relation.to}</p>
                    <button className="bg-[#a0a7ac] text-white text-xs md:text-sm rounded p-1 cursor-pointer" onClick={() => removeRelation(index)}>Remove</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default DisplaySection