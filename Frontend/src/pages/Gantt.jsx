import React from 'react'
import { GanttContextProvider } from '../Components/GanttChart/GanttContext.jsx'
import Title from '../Components/Title.jsx'
import DisplaySection from '../Components/GanttChart/DisplaySection.jsx'
import InputSection from '../Components/GanttChart/InputSection.jsx'

function Gantt() {
  return (
    <GanttContextProvider>
      <Title text1={"Gantt Chart"} text2={"Generator"} />
        
      <InputSection />
        
      <DisplaySection />
        
    </GanttContextProvider>
  )
}

export default Gantt