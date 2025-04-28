import React from 'react'
import SequenceContextProvider from '../context/SequenceContext.jsx'
import Title from '../Components/Title.jsx'
import SequenceInputSection from '../Components/Sequence/SequenceInputSection.jsx'
import SequenceDisplaySection from '../Components/Sequence/SequenceDisplaySection.jsx'

function Sequence() {
  return (
    <SequenceContextProvider>
      <Title text1={"Sequence Diagram"} text2={"Generator"} />

      <SequenceInputSection />

      <SequenceDisplaySection />

    </SequenceContextProvider>
  )
}

export default Sequence