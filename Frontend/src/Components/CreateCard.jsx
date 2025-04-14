import React from 'react'
import { Link } from 'react-router'

function CreateCard({image, id, title, description}) {
  return (
    <Link className='overflow-hidden ' to={`/create/${id}`} >
      <div className=" max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 mb-6 sm:mb-10 mx-2 text-sm hover:scale-101 ease-in-out">
        <img className="w-full h-48 object-cover" src={image} alt={title} />
        <div className="p-5 ">
          <h2 className="text-lg font-semibold mb-2 text-gray-800 leading-4">{title}</h2>
          <p className="text-gray-600 ">{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default CreateCard