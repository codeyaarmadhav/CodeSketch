import React from 'react'
import StateInputSection from './StateInputSection.jsx'
import DisplayUML from '../DisplayUML.jsx'
import generateStateCode from '../../utils/generateStateCode.js'
import StateDisplaySection from './StateDisplaySection.jsx'

function StateIndex() {
  return (
    <div>
        <StateInputSection />

        <StateDisplaySection />

        <DisplayUML code={generateStateCode()} type={"State Diagram"}/>
    </div>
  )
}

export default StateIndex