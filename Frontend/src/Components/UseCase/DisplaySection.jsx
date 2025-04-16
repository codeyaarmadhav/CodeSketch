import React from 'react'
import { useUseCaseContext } from './UseCaseContext.jsx'
import SubTitle from '../SubTitle.jsx';

function DisplaySection() {

    const {actors, setActors, 
        useCases, setUseCases, 
        relationships, setRelationships} = useUseCaseContext();
    
    // Remove Actor
    const removeActor = (index) => {
      const updatedActors = actors.filter((_, i) => i !== index);
      setActors(updatedActors);
    };

    // Remove Use Case
    const removeUseCase = (index) => {
      const updatedUseCase = useCases.filter((_, i) => i !== index);
      setUseCases(updatedUseCase);
    };

  return (
    <div>
        {/* Display Actors and Use Cases */}
        <div className="flex flex-col md:flex-row md:gap-18 mb-2">
            <div className={`${actors.length > 0 ? "flex" : "hidden"} flex-col w-full md:w-1/2 `}>
                <SubTitle text1={"Actors"} />
                <div>
                  {actors.map((actor, index) => (
                    <div key={index} className="flex items-center justify-between w-full rounded-lg shadow-lg bg-white transition-shadow duration-300 text-base ease-in-out border-gray-400 border px-3 py-2 m-2">
                      <p>{actor}</p>
                      <button className="bg-[#a0a7ac] text-white text-xs md:text-sm rounded p-1" onClick={() => removeActor(index)}>Remove</button>
                    </div>
                  ))}
                </div>

            </div>

            <div className={`${useCases.length > 0 ? "flex" : "hidden"} flex-col w-full md:w-1/2 `}>
              <SubTitle text1={"Use Cases"} />
              <div>
                {useCases.map((usecase, index) => (
                  <div key={index} className="flex items-center justify-between w-full rounded-lg shadow-lg bg-white transition-shadow duration-300 text-base ease-in-out border-gray-400 border px-3 py-2 m-2">
                    <p >{usecase}</p>
                    <button className="bg-[#a0a7ac] text-white text-xs md:text-sm rounded p-1" onClick={() => removeUseCase(index)}>Remove</button>
                  </div>
                ))}
              </div>
            </div>
        </div>

        {/* Display Relationships */}

        <div className={`${relationships.length > 0 ? "flex" : "hidden"} flex-col w-full mb-2 `}>
            <SubTitle text1={"Relationships"} />
            <div>
              {relationships.map((relationship, index) => (
                <div key={index} className="flex items-center justify-between w-full rounded-lg shadow-lg bg-white transition-shadow duration-300 text-base ease-in-out border-gray-400 border px-3 py-2 m-2">
                  <p className="bg-gray-100 text-xs md:text-sm rounded p-1">From:  <span>{relationship.from}</span></p>
                  <p className="bg-gray-100 text-xs md:text-sm rounded p-1">Relationship:  <span>{relationship.type === "-->" ? "Interacts" : relationship.type === ".>" ? "Includes" : "Extends" }</span></p> 
                  <p className="bg-gray-100 text-xs md:text-sm rounded p-1">To:  <span>{relationship.to}</span></p>
                  <button className="bg-[#a0a7ac] text-white text-xs md:text-sm rounded p-1" onClick={() => setRelationships(relationships.filter((_, i) => i !== index))}>Remove</button>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default DisplaySection