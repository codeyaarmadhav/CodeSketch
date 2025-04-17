import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import Title from './Title'

function Info() {
    const info = [
        {
            id: 1,
            title: "Build your own diagrams",
            desc: "Create diagrams from scratch or use our platform, that supports a wide range of diagram types, including UML, flowcharts, and more.",
            img: assets.diagraminfo
        },
        {
            id: 2,
            title: "Time Saving Collaboration",
            desc: "Eliminates traditional drag and drop methods, allowing you to create diagrams faster and more efficiently.",
            img: assets.time
        },
        {
            id: 3,
            title: "Export and share",
            desc: "Easily export your diagrams in various formats (PNG, SVG, PDF) and share them with others.",
            img: assets.exportinfo
        },
        {
            id: 4,
            title: "Storage and History",
            desc: "Access your diagrams anytime, anywhere, and keep track of prijects with our storage feature.",
            img: assets.storage
        },
        {
            id: 5,
            title: "User-friendly Interface",
            desc: "Our intuitive interface makes it easy for anyone to create professional-looking diagrams.",
            img: assets.userinterfaceinfo
        },
        {
            id: 6,
            title: "PlantUML Integration",
            desc: "Seamlessly integrate with PlantUML for advanced diagramming capabilities.",
            img: assets.umlinfo
        },
        {
            id: 7,
            title: "Free and Open Source",
            desc: "Our platform is free to use and open source, allowing anyone to contribute and improve the tool.",
            img: assets.opensourceinfo
        },
        {
            id: 8,
            title: "Cross-Platform Compatibility",
            desc: "Works on all major operating systems and devices, ensuring accessibility for everyone.",
            img: assets.crossplatform
        },
        {
            id: 9,
            title: "Community Support",
            desc: "Join a growing community of users and developers who are passionate about system design.",
            img: assets.community
        },
        {
            id: 10,
            title: "Educational Resources",
            desc: "Access tutorials, guides, and resources to help you learn and master system design.",
            img: assets.education
        }
        
    ]
  return (
    <div>
        <Title text1={"About"} text2={"CodeSketch"} />
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 text-sm sm:text-base'>
            {
                info.map((detail) => (
                    <div className='border border-gray-300 p-5 rounded-md flex gap-5 shadow-md shadow-gray-200' key={detail.id}>
                        <div className='w-[75%] sm:w-4/5'>
                            <h1 className='font-semibold mb-3'>{detail.title}</h1>
                            <p>{detail.desc}</p>
                        </div>
                        <div className='w-[25%] sm:w-1/5 pt-2 '>
                            <img className='rounded border shadow-md border-gray-200' src={detail.img} alt="" />
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    
  )
}

export default Info