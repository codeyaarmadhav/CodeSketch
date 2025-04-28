import React from 'react'
import UseCaseIndex from '../Components/UseCase/UseCaseIndex.jsx'
import { UseCaseContextProvider } from '../context/UseCaseContext.jsx'

function UseCase() {
  return (
    <UseCaseContextProvider>
      <UseCaseIndex />
    </UseCaseContextProvider>
  )
}

export default UseCase;