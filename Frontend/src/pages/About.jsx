import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/frontend_assets/assets'
import SubTitle from '../Components/SubTitle'
import Subscribe from '../Components/Subscribe'

function About() {
  return (
    <div>
        <Title text1={"About"} text2={"Us"} />

        <div className='flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-20'>
            <div className='w-full sm:w-[45%]'>
                <img src={assets.about} alt="about" className='shadow-lg border border-gray-200 rounded overflow-hidden'/>
            </div>
            <div className='w-full sm:w-[55%] text-md text-gray-600'>
                <p className='mb-5'>CodeSketch was built to make system design simple, fast, and accessible. What began as a tool for use case diagrams has grown into a full-featured platform supporting class, sequence, activity diagrams, and more.</p>
                <p className='mb-5'>With an intuitive interface, drag-and-drop tools, and real-time PlantUML previews, we help users—from students to professionals—turn ideas into clear, structured designs.</p>

                <SubTitle text1={"Our Mission"} />
                <p className='sm:mt-3'>Our mission is to empower users with clarity, flexibility, and control. Whether you're an aspiring developer, a software architect, or an educator, we're here to help you bring your ideas to life through powerful diagramming tools. We’re dedicated to providing a seamless experience that supports learning, collaboration, and efficient system planning—so you can focus on building better software.</p>
            </div>
        </div>

        <div>
            <div className='mt-7 mb-5 text-lg'>
                <Title text1={"Why"} text2={"Choose Us?"} />
            </div>

            <div className='flex flex-col sm:flex-row items-center justify-between'>
                <div className='border flex flex-col items-center justify-center w-full sm:w-1/3 p-12 border-gray-400 h-[35vh]'>
                    <p className='text-sm mb-3 font-semibold'>Reliable Accuracy:</p>
                    <p className='text-sm'>We ensure every element you create—actors, use cases, and relationships —is translated into precise.</p>                
                </div>
                <div className='border flex flex-col items-center justify-center w-full sm:w-1/3 p-12 border-gray-400 h-[35vh]'>
                    <p className='text-sm mb-3 font-semibold'>Convenience:</p>
                    <p className='text-sm'>With our user-friendly interface and hassle-free process, UML has never been easier.</p>                
                </div>
                <div className='border flex flex-col items-center justify-center w-full sm:w-1/3 p-12 border-gray-400 h-[35vh]'>
                    <p className='text-sm mb-3 font-semibold'>Effortless Workflow:</p>
                    <p className='text-sm'>With an intuitive interface and real-time diagram preview, you can design and iterate your UML faster than ever.</p>                
                </div>
            </div>
        </div>

        <Subscribe />
    </div>
  )
}

export default About