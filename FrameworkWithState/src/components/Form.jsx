import React, {useState} from 'react'
import { useDispatch, useSettings } from "../MetronomeContext.jsx";

const DENOMINATORS  = {
  "whole": "4",
  "eighth": "8",
  "sixteenth": "16"
}

export default function Form() {
  const settings = useSettings()
  const dispatch = useDispatch()

  const [bpm, setBpm] = useState(settings.bpm)
  const bpmChange = (e) => {
    setBpm(e.target.value)
    dispatch({
      type: "update",
      bpm: e.target.value
    })
  }
  const [mark, setMark] = useState(settings.mark)
  const markChange = (e) => {
    setMark(e.target.value)
    dispatch({
      type: "update",
      mark: e.target.value
    })
  }

  const [intervalId, setIntervalId] = useState()

  const startPlaying = () => {
    if(settings.running) return

    const denominator = DENOMINATORS[mark]

    dispatch({
      type: "update",
      running: true,
      activeBeat: `1/${denominator}`
    })
    const interval = setInterval(() => {
      dispatch({type: 'advance'})
    }, settings.beatDuration)
    setIntervalId(interval)
  }
  const stopPlaying = () => {
    clearInterval(intervalId)
    dispatch({
      type: "reset",
    })
  }

  return (
    <div>
      <div>
        <label htmlFor="bpm">BPM:</label>
        <input type="text" name='bpm' value={bpm} onChange={bpmChange}/>
      </div>
      <div>
        <fieldset>
          <legend>Mark:</legend>
          <div>
            <input type="radio" name="mark" id="whole" value="whole" checked={mark === "whole"} onChange={markChange} />
            <label htmlFor="whole">On the beat</label>
          </div>
          <div>
            <input type="radio" name="mark" id="eighth" value="eighth" checked={mark === "eighth"} onChange={markChange} />
            <label htmlFor="eighth">On the Eighths</label>
          </div>
          <div>
            <input type="radio" name="mark" id="sixteenth" value="sixteenth" checked={mark === "sixteenth"} onChange={markChange} />
            <label htmlFor="sixteenth">On the Sixteenths</label>
          </div>
        </fieldset>
      </div>
      <div>
        <button onClick={startPlaying}>Start</button>
        <button onClick={stopPlaying}>Stop</button>
      </div>
    </div>
  )
}