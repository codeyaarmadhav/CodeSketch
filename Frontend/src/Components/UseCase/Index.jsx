import React from 'react'
import Title from "../Title";
import InputSection from './InputSection';
import DisplaySection from './DisplaySection.jsx';
import ActorStyle from './ActorStyle.jsx';
import DisplayUML from '../DisplayUML.jsx';
import generateUMLCode from './generateUMLCode.js';

function Index() {
    
  return (
    <div>
        <Title text1={"Use Case Diagram"} text2={"Generator"} />

        <InputSection />
        
        <ActorStyle />

        <DisplaySection />

        <DisplayUML code={generateUMLCode()} />      
    </div>
  )
}

export default Index