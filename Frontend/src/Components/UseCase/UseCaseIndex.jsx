import React from 'react'
import Title from "../Title.jsx";
import InputSection from './UseCaseInputSection.jsx';
import DisplaySection from './UseCaseDisplaySection.jsx';
import ActorStyle from './ActorStyle.jsx';
import DisplayUML from '../DisplayUML.jsx';
import generateUseCaseCode from '../../utils/generateUseCaseCode.js';

function Index() {
    
  return (
    <div>
        <Title text1={"Use Case"} text2={"Generator"} />

        <InputSection />
        
        <ActorStyle />

        <DisplaySection />

        <DisplayUML code={generateUseCaseCode()} />      
    </div>
  )
}

export default Index