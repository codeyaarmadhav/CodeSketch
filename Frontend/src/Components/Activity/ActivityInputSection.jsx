import React from 'react'
import { useActivityContext } from '../../context/ActivtyContext.jsx'
import SequentialFlow from './SequentialFlow.jsx';
import ConditionalFlow from './ConditionalFlow.jsx';
import ParallelFlow from './ParallelFlow.jsx';

function ActivityInputSection() {
  const {flow, setFlow} = useActivityContext();

  return (
    <div className=''>
      {/*
        <SubTitle text1={"Select Activity Type"} />
        <div className='mb-2'>
          <select value={flow} onChange={(e) => setFlow(e.target.value)} className="border p-2 my-1 md:m-0 rounded w-full">
            <option value="sequential">Simple Sequential Flow</option>
            <option value="conditional">Contitional Flow</option>
            <option value="parallel">Parallel Flow</option>
          </select>
        </div>
      */}

      <SequentialFlow />

      <ConditionalFlow />

      <ParallelFlow />
    </div>
  )
}

export default ActivityInputSection