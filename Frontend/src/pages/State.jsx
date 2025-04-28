import React from 'react'
import Title from '../Components/Title'
import StateContextProvider from '../context/StateContexxt'
import StateIndex from '../Components/State/StateIndex'

function State() {
  return (
    <div>
        <Title text1={"State Diagram"} text2={"Generator"} />

        <StateContextProvider>
            <StateIndex />
        </StateContextProvider>
    </div>
  )
}

export default State