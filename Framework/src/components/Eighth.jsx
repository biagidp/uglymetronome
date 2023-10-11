import React from "react"

export default function Eighth({active, children}) {

  return(
    <div className={`${active ? 'active' : ''} flex flex-col w-1/2 h-full`}>
      {children}
    </div>
  )
}