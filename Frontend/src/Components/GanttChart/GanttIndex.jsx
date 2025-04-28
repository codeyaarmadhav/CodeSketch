import React from 'react'
import GanttInputSection from './GanttInputSection.jsx';
import GanttDisplaySection from './GanttDisplaySection.jsx';
import DisplayUML from '../DisplayUML.jsx';
import generateGanttCode from '../../utils/generateGanttCode.js'

function GanttIndex() {
  return (
    <div>
        <GanttInputSection />

        <GanttDisplaySection />

        <DisplayUML code={generateGanttCode()} />
    </div>
  )
}

export default GanttIndex