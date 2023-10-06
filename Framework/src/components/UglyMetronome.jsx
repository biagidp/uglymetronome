import React, { useState } from "react";
import Measure from "./Measure.jsx";
import Form from "./Form.jsx";

export const defaultState = {
  bpm: 60,
  mark: "whole",
  running: false,
}

export default function UglyMetronome() {
  const [metronomeState, setMetronomeState] = useState(defaultState)
  return (
    <div>
      <Measure settings={metronomeState} />
      <Form settings={metronomeState} setSettings={setMetronomeState}/>
    </div>  
  )
}