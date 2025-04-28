import React, { useState } from 'react'
import PlantUmlEncoder from 'plantuml-encoder';
import SubTitle from './SubTitle.jsx';


function DisplayUML({code}) {
    const [umlImage, setUmlImage] = useState('');
    const [loading, setLoading] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        setLoading(true);
        try {
          const encodedUml = PlantUmlEncoder.encode(code); // ✅ Encode UML
          const imageUrl = `https://www.plantuml.com/plantuml/png/${encodedUml}`;
    
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
                <div>
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

export default DisplayUML