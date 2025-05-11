import React, { useState } from 'react'
import PlantUmlEncoder from 'plantuml-encoder';
import SubTitle from './SubTitle.jsx';
import axios from 'axios';
import { toast } from 'react-toastify';
import { handleDownload } from '../utils/helper.js';


function DisplayUML({code, type}) {
    const [umlImage, setUmlImage] = useState('');
    const [loading, setLoading] = useState(false);

    const URL = "http://localhost:8080";
    const encodedUml = PlantUmlEncoder.encode(code);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        setLoading(true);
        try {
          //const encodedUml = PlantUmlEncoder.encode(code); // ✅ Encode UML
          const imageUrl = `https://www.plantuml.com/plantuml/png/${encodedUml}`;
    
          setUmlImage(imageUrl); // ✅ Update state with URL
        } catch (error) {
          console.error("Error generating UML:", error);
        }
    };

    async function handleProjectSave() {
      try{
        const response = await axios.post(`${URL}/api/v2/project/create`, { data: encodedUml, type }, {withCredentials: true});
        if(response.data.success){
          toast.success(response.data.message)
        }else {
          toast.error(response.data.message)
        }
      } catch(err){
        console.log(err);
        toast.error("Failed to save project. Please try again.")
      }
    }
    
  return (
    <div>
        <div className='mb-2'>
            <button onClick={handleSubmit} className='bg-[#a0a7ac] text-white p-2 my-2 w-full rounded cursor-pointer'>Generate Diagram</button>
        </div>

        {/* Display and Download Diagram */}
        {umlImage && (
            <div className="">
                <SubTitle text1={"Generated UML Diagram"} />
                <div className="flex flex-col items-center my-15">
                  {
                    loading && <h1 className='text-gray-500'>Loading...</h1>
                  }
                  <img src={umlImage} alt="UML Diagram" onLoad={() => setLoading(false)}/>
                </div>
                <div className='flex flex-col sm:flex-row gap-2'>
                    <button
                      onClick={() => handleDownload(umlImage)}
                      className="bg-[#a0a7ac] text-white p-2 my-2 w-full rounded cursor-pointer"
                    >
                    Download Diagram
                    </button>
                    <button
                      onClick={handleProjectSave}
                      className="bg-[#a0a7ac] text-white p-2 my-2 w-full rounded cursor-pointer"
                    >
                    Save to Project
                    </button>
                </div>
            </div>
        )}
    </div>
  )
}

export default DisplayUML