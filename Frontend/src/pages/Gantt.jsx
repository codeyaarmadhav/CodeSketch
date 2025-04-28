import React from 'react'
import { GanttContextProvider } from '../context/GanttContext.jsx'
import Title from '../Components/Title.jsx'
import GanttIndex from '../Components/GanttChart/GanttIndex.jsx'

function Gantt() {
  return (
    <GanttContextProvider>
      <Title text1={"Gantt Chart"} text2={"Generator"} />

      <GanttIndex />
    </GanttContextProvider>
  )
}

export default Gantt