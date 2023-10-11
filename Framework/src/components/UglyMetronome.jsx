import React, { useState } from "react";
import Beat from "./Beat.jsx"
import Form from "./Form.jsx";
import Measure from "./Measure.jsx";

export const defaultState = {
  bpm: 60,
  mark: "whole",
  running: false,
}

let interval
export default function UglyMetronome() {
  const [metronomeState, setMetronomeState] = useState(defaultState)
  const [currentBeat, setCurrentBeat] = useState()
  const beatDuration = 60000/metronomeState.bpm 
  
  const advanceBeat = (index = 0) => {
    setCurrentBeat(index)
    interval = setTimeout(
      () => {
        const nextBeat = index + 1 >= 4 ? 0 : index + 1
        advanceBeat(nextBeat)
      }, beatDuration 
    )
  }

  const onStart = () => {
    advanceBeat()
  }

  const onStop = () => {
    clearInterval(interval)
    setCurrentBeat(undefined)
  }

  return (
    <div>
      <Measure settings={metronomeState}>
        <Beat label={1} active={ currentBeat === 0} duration={beatDuration} type={metronomeState.mark} />
        <Beat label={2} active={ currentBeat === 1} duration={beatDuration} type={metronomeState.mark} />
        <Beat label={3} active={ currentBeat === 2} duration={beatDuration} type={metronomeState.mark} />
        <Beat label={4} active={ currentBeat === 3} duration={beatDuration} type={metronomeState.mark} />
      </Measure>
      <Form
        settings={metronomeState}
        setSettings={setMetronomeState}
        onStart={onStart}
        onStop={onStop}
      />
    </div>  
  )
}