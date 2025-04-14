import React, { useContext } from 'react'
import { CrtContext } from '../context/crtContext';
import Title from '../Components/Title';
import CreateCard from '../Components/createCard';
import { assets } from '../assets/frontend_assets/assets';

function Create() {
  const {create} = useContext(CrtContext);

  return (
    <div className='text-3xl'>

      <Title text1="Create" text2="Diagrams" />

      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 place-items-center text-start'>
        {
          create.map((item) =>(
            <CreateCard key={item.id} image={item.image} id={item.id} title={item.title} description={item.description} />
          ))
        }
      </div>
    </div>
  )
}

export default Create