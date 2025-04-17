import React from 'react'
import SequenceContextProvider from '../Components/Sequence/SequenceContext'
import SequenceForm from '../Components/Sequence/Index.jsx'

function Sequence() {
  return (
    <SequenceContextProvider>
        <SequenceForm />
    </SequenceContextProvider>
  )
}

export default Sequence