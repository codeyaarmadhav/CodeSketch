import React from 'react'
import ClassForm from '../Components/Class/Index.jsx'
import { ClassContextProvider } from '../context/ClassContext.jsx'

function Class() {
  return (
    <ClassContextProvider>
      <ClassForm />
    </ClassContextProvider>
  )
}

export default Class