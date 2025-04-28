import React from 'react'
import SequenceContextProvider from '../context/SequenceContext.jsx'
import Title from '../Components/Title.jsx'
import SequenceIndex from '../Components/Sequence/SequenceIndex.jsx'

function Sequence() {
  return (
    <SequenceContextProvider>
      <Title text1={"Sequence Diagram"} text2={"Generator"} />
      <SequenceIndex />
    </SequenceContextProvider>
  )
}

export default Sequence