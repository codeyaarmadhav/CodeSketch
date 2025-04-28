import React from 'react'
import { useClassContext } from '../../context/ClassContext.jsx';
import SubTitle from '../SubTitle.jsx';

function DisplaySection() {

    const {
        classInput, setClassInput,
        generalRelation, setGeneralRelation,
        relation, setRelation} = useClassContext();

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
        <div className={`${generalRelation.length > 0 ? "flex" : "hidden"} flex-col w-full`}>
            <SubTitle text1={"Generalization/Specialization"} />
            {generalRelation.map((relation, index) => (
                <div key={index} className="flex items-center justify-between w-full rounded-lg shadow-lg bg-white transition-shadow duration-300 text-base ease-in-out border-gray-400 border px-3 py-2 m-0 sm:m-2 gap-4">
                    <div className='w-full flex gap-3'>
                        <p className='p-1 w-1/3 bg-gray-100 rounded shadow-xs'>From :{relation.from}</p>
                        <p className='p-1 w-1/3 border border-gray-300 rounded shadow-xs'>Extends</p>
                        <p className='p-1 w-1/3 bg-gray-100 rounded shadow-xs'>To: {relation.to}</p>
                    </div>
                    <button className="bg-[#a0a7ac] text-white text-xs md:text-sm rounded p-1 cursor-pointer" onClick={() => removeGeneralRelation(index)}>Remove</button>
                </div>
            ))}
        </div>

        {/* Display Relation */}
        <div className={`${relation.length > 0 ? "flex" : "hidden"} flex-col w-full`}>
            <SubTitle text1={"Relation"} />
            {relation.map((relation, index) => (
                <div key={index} className="flex items-start justify-between w-full rounded-lg shadow-lg bg-white transition-shadow duration-300 text-base ease-in-out border-gray-400 border  p-4 m-0 sm:m-2 gap-5">
                    <div className='flex flex-col w-full gap-3'>
                        <div className='flex justify-between w-full gap-3'>
                            <p className='w-1/2 p-1 bg-gray-100 rounded shadow-xs '>From: <span className='text-gray-600'>{relation.from}</span></p>
                            <p className='w-1/2 p-1 bg-gray-100 rounded shadow-xs'>multiplicity: <span className='text-gray-600'>{relation.multiplicity1.length === 0 ? "-NA-" : relation.multiplicity1}</span></p>
                        </div>
                        <div className='flex w-full gap-3'>
                            <p className='w-1/2 p-1 bg-gray-100 rounded shadow-xs'>Name: <span className='text-gray-600'>{relation.associationName.length === 0 ? "-NA-" : relation.associationName}</span></p>
                            <p className='w-1/2 p-1 bg-gray-100 rounded shadow-xs'>Relation: <span className='text-gray-600'>{relation.assciationType === "--" ? 'Simple Association' : relation.assciationType === "o--" ? Aggregation : relation.assciationType === "*--" ? "Composition" : "Dependency" }</span></p>
                        </div>
                        <div className='flex justify-between w-full gap-3'>
                            <p className='w-1/2 p-1 bg-gray-100 rounded shadow-xs'>To: <span className='text-gray-600'>{relation.to}</span></p>
                            <p className='w-1/2 p-1 bg-gray-100 rounded shadow-xs'>multiplicity: <span className='text-gray-600'> {relation.multiplicity2.length === 0 ? "NA-" : relation.multiplicity2}</span></p>
                        </div>
                    </div>
                    
                    <button className="bg-[#a0a7ac] text-white text-xs md:text-sm rounded p-1 cursor-pointer" onClick={() => removeRelation(index)}>Remove</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default DisplaySection