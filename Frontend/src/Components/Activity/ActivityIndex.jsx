import React from 'react'
import ActivityInputSection from './ActivityInputSection.jsx'
import { useActivityContext } from '../../context/ActivtyContext.jsx'
import DisplayUML from '../DisplayUML.jsx';

function ActivityIndex() {
  const {code} = useActivityContext();
  return (
    <div>
      <ActivityInputSection />

      <DisplayUML code={code + "stop\n@enduml"} />
    </div>
  )
}

export default ActivityIndex