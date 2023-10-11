import React from 'react'

export default function Sixteenth({active}){

  return(
    <div
      className={`${active ? 'active' : ''} w-full h-full`}
    ></div>
  )
}