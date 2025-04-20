import React from 'react'
import SequenceContextProvider from '../Components/Sequence/SequenceContext'
import SequenceForm from '../Components/GanttChart.jsx'

function Sequence() {
  return (
    <SequenceContextProvider>
        <SequenceForm />
    </SequenceContextProvider>
  )
}

export default Sequence