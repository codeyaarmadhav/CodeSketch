import React from 'react'
import { useUseCaseContext } from '../../context/UseCaseContext.jsx';
import SubTitle from '../SubTitle.jsx';

function ActorStyle() {
    const {setActorStyle} = useUseCaseContext();

  return (
    <div>
        {/* Actor Style */}
        <SubTitle text1={"Actor Style"} />
        <select
          onChange={(e) => setActorStyle(e.target.value)}
          className="border p-2 rounded my-1 md:m-0  w-full mb-2"
        >
          <option value="">Default Stick Man </option>
          <option value="skinparam actorStyle awesome">User Style </option>
          <option value="skinparam actorStyle hollow">Hollow style </option>
        </select>
    </div>
  )
}

export default ActorStyle