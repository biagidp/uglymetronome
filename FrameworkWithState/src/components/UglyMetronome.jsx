import React, { useState, useCallback, useEffect } from "react";
import Beat from "./Beat.jsx"
import Form from "./Form.jsx";
import Measure from "./Measure.jsx";
import { useDispatch, useSettings } from "../MetronomeContext.jsx";

export default function UglyMetronome() {
  const dispatch = useDispatch()
  const {running, beatDuration} = useSettings()
  
  useEffect(() => {
    if(!running) return

    console.log("UPDATING INTERVAL")
    const interval = setInterval(
      () => {
        console.log('ADVANCING')
        dispatch({type: 'advance'})
      }, beatDuration)

    return () => {
      clearInterval(interval)
    }
  }, [running, beatDuration])

  return (
    <div>
      <Measure>
        <Beat label={1} />
        <Beat label={2} />
        <Beat label={3} />
        <Beat label={4} />
      </Measure>
      <Form
      />
    </div>  
  )
}