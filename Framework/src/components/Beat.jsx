import React from 'react'
import Eighth from './Eighth.jsx'

export default function Beat({label}){

  return (
    <div class="relative beat flex bg-stone-50 h-64 w-96 mt-8">
      <h1 class="text-4xl font-bold absolute
        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {label}
      </h1>
      <Eighth />
      <Eighth />
    </div>
  )
}