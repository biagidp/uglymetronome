import React from 'react'
import { useSettings } from '../MetronomeContext.jsx'

export default function Sixteenth({beatFraction}){
  const settings = useSettings()
  const beatIsActive = () => {
    return settings.running && settings.activeBeat === beatFraction
  }
  return(
    <div
      className={`${beatIsActive() ? 'active' : ''} w-full h-full`}
    ></div>
  )
}