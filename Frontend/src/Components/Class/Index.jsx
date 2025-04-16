import React from 'react'
import InputSection from './InputSection'
import DisplaySection from './DisplaySection'
import DisplayUML from '../DisplayUML'
import generateUMLCode from './generateUMLCode'
import Title from '../Title'

function Index() {
  return (
    <div>
        <Title text1={"Class Diagram"} text2={"Generator"} />

        <InputSection />

        <DisplaySection />

        <DisplayUML code={generateUMLCode()} />
    </div>
  )
}

export default Index