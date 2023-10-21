import React from "react"
import { useSettings } from '../MetronomeContext.jsx'

export default function Eighth({beatFraction, children}) {
  const settings = useSettings()

  const beatIsActive = () => {
    return settings.running && settings.activeBeat === beatFraction }

  return(
    <div className={`${beatIsActive() ? 'active' : ''} flex flex-col w-1/2 h-full`}>
      {children}
    </div>
  )
}