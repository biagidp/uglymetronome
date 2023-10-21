import React, { useEffect, useState } from 'react'
import Eighth from './Eighth.jsx'
import Sixteenth from './Sixteenth.jsx'
import { useSettings } from '../MetronomeContext.jsx'

export default function Beat({label}){
  const settings = useSettings()

  const beatIsActive = (label) => {
    return settings.running && settings.activeBeat === `${label}/4`
  }

  return (
    <div className={`relative flex h-64 w-96 mt-8 ${ beatIsActive(label) ? 'active' : 'bg-stone-50'}`}>
      <h1 className="text-4xl font-bold absolute
        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {label}
      </h1>
      <Eighth beatFraction={`${parseInt(label)*2-1}/8`}>
        <Sixteenth beatFraction={`${parseInt(label)*4-3}/16`} />
        <Sixteenth beatFraction={`${(parseInt(label)*4-3)+2}/16`} />
      </Eighth>
      <Eighth beatFraction={`${parseInt(label)*2}/8`}>
        <Sixteenth beatFraction={`${(parseInt(label)*4-3)+1}/16`} />
        <Sixteenth beatFraction={`${(parseInt(label)*4-3)+3}/16`} />
      </Eighth>
    </div>
  )
}