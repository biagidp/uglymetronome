import React, { useEffect, useState } from 'react'
import Eighth from './Eighth.jsx'
import Sixteenth from './Sixteenth.jsx'

export default function Beat({label, active, duration, type}){
  const [activeFraction, setActiveFraction] = useState()

  const setSixteenths = (count = 1) => {
    if (count > 4 || !active) return
    
    setActiveFraction(`${count}/16`)
    setTimeout(() => {
      setSixteenths(count+1)
    }, duration/4)
  }
  
  useEffect(() => {
    if (!active) {
      setActiveFraction(undefined)
      return
    }
    
    switch(type){
      case "whole":
        setActiveFraction("1")
        break
      case "eighth":
        setActiveFraction("1/8")
        setTimeout(() => {
          setActiveFraction("2/8")
        }, duration/2)
        break
      case "sixteenth":
        setSixteenths()
        break
    }
  }, [active])
  return (
    <div className={`relative flex h-64 w-96 mt-8 ${ active && activeFraction === "1" ? 'active' : 'bg-stone-50'}`}>
      <h1 className="text-4xl font-bold absolute
        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {label}
      </h1>
      <Eighth active={active && activeFraction === "1/8"} >
        <Sixteenth active={active && activeFraction === "1/16"} />
        <Sixteenth active={active && activeFraction === "3/16"} />
      </Eighth>
      <Eighth active={active && activeFraction === "2/8"} >
        <Sixteenth active={active && activeFraction === "2/16"} />
        <Sixteenth active={active && activeFraction === "4/16"} />
      </Eighth>
    </div>
  )
}