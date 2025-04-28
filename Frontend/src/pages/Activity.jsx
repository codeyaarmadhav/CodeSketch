import React from 'react'
import Title from '../Components/Title.jsx'
import ActivityContextProvider from '../context/ActivtyContext.jsx'
import ActivityIndex from '../Components/Activity/ActivityIndex.jsx'


function Activity() {
  return (
    <div>
      <Title text1={"Activity Diagram "} text2={"Generator"} />

      <ActivityContextProvider>
        <ActivityIndex />
      </ActivityContextProvider>
    </div>
  )
}

export default Activity