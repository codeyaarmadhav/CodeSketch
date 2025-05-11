import React from 'react'
import SequenceInputSection from './SequenceInputSection.jsx'
import SequenceDisplaySection from './SequenceDisplaySection.jsx'
import DisplayUML from '../DisplayUML.jsx';
import generateSequenceCode from '../../utils/generateSequenceCode.js'

function SequenceIndex() {
  return (
    <div>
      <SequenceInputSection />

      <SequenceDisplaySection />

      <DisplayUML code={generateSequenceCode()} type={"Sequence Diagram"}/>
    </div>
  )
}

export default SequenceIndex