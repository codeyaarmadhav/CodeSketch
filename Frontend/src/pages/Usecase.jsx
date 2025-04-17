import React from 'react'
import UseCaseForm from '../Components/UseCase/Index.jsx'
import { UseCaseContextProvider } from '../Components/UseCase/UseCaseContext.jsx'

function UseCase() {
  return (
    <UseCaseContextProvider>
      <UseCaseForm />
    </UseCaseContextProvider>
  )
}

export default UseCase;