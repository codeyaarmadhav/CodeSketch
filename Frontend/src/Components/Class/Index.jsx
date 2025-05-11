import React from 'react'
import InputSection from './InputSection.jsx'
import DisplaySection from './DisplaySection.jsx'
import DisplayUML from '../DisplayUML.jsx'
import generateClassCode from '../../utils/generateClassCode.js'
import Title from '../Title'

function Index() {
  return (
    <div>
        <Title text1={"Class Diagram"} text2={"Generator"} />

        <InputSection />

        <DisplaySection />

        <DisplayUML code={generateClassCode()} type={"Class Diagram"}/>
    </div>
  )
}

export default Index