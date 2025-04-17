import React, { useContext } from 'react'
import { CrtContext } from '../context/crtContext';
import Title from '../Components/Title';
import CreateCard from '../Components/CreateCard.jsx';
import { assets } from '../assets/frontend_assets/assets';
import Subscribe from '../Components/Subscribe';

function Create() {
  const {create} = useContext(CrtContext);

  return (
    <div>
      <div  className='text-3xl'>
        <Title text1="Create" text2="Diagrams" />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 place-items-center text-start mb-20'>
        {
          create.map((item) =>(
            <CreateCard key={item.id} image={item.image} id={item.id} title={item.title} description={item.description} />
          ))
        }
      </div>

      <Subscribe />
    </div>
  )
}

export default Create