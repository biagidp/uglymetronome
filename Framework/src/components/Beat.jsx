import React from 'react'
import Eighth from './Eighth.jsx'
import Sixteenth from './Sixteenth.jsx'

export default function Beat({label, active}){

  return (
    <div className={`relative flex h-64 w-96 mt-8 ${active ? 'active' : 'bg-stone-50'}`}>
      <h1 className="text-4xl font-bold absolute
        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {label}
      </h1>
      {/* <Eighth>
        <Sixteenth />
        <Sixteenth />
      </Eighth>
      <Eighth>
        <Sixteenth />
        <Sixteenth />
      </Eighth> */}
    </div>
  )
}