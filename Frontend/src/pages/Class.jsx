import React from 'react'
import ClassForm from '../Components/Class/Index.jsx'
import { ClassContextProvider } from '../Components/Class/ClassContext'

function Class() {
  return (
    <ClassContextProvider>
      <ClassForm />
    </ClassContextProvider>
  )
}

export default Class