import React from 'react'
import StateInputSection from './StateInputSection'
import DisplayUML from '../DisplayUML.jsx'
import generateStateCode from '../../utils/generateStateCode'
import StateDisplaySection from './StateDisplaySection.jsx'

function StateIndex() {
  return (
    <div>
        <StateInputSection />

        <StateDisplaySection />

        <DisplayUML code={generateStateCode()} />
    </div>
  )
}

export default StateIndex