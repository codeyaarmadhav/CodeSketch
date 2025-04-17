import React from 'react'
import Title from './Title'
import { assets } from '../assets/frontend_assets/assets'
import CreateCard from './CreateCard'
import SubTitle from './SubTitle'
import { NavLink} from 'react-router'

function TryOut() {
    const tryOut = [
        {
            id: 'usecase',
            title: 'Use Case Diagram',
            description: 'Create a use case for your project',
            image: assets.usecase ,
        },
        {
            id: 'class',
            title: 'Class Diagram',
            description: 'Create a class for your project',
            image: assets.classd,
        },
        {
            id: 'sequence',
            title: 'Sequence Diagram',
            description: 'Create a Sequence for your project',
            image: assets.sequence,
        },
    ]
  return (
    <div>
        <Title text1={"Try"} text2={"Our"} />

        
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 place-items-center text-start'>
          {
            tryOut.map((item) =>(
              <CreateCard key={item.id} image={item.image} id={item.id} title={item.title} description={item.description} />
            ))
          }
        </div>

        <div className='flex justify-end px-[5vw]'>
            <NavLink to="/create">
                <SubTitle text1="See More" />
            </NavLink>
        </div>
        
    </div>
  )
}

export default TryOut