import React, {useState} from 'react'
import { defaultState } from './UglyMetronome.jsx'

export default function Form({settings, setSettings}) {
  const [bpm, setBpm] = useState(settings.bpm)
  const [mark, setMark] = useState(settings.mark)
  const markChange = (e) => {setMark(e.target.value)}

  const startPlaying = () => {
    setSettings({
      bpm,
      mark,
      running: true
    })
  }
  const stopPlaying = () => {setSettings(defaultState)}

  return (
    <div>
      <div>
        <label htmlFor="bpm">BPM:</label>
        <input type="text" name='bpm' value={bpm} onChange={e => setBpm(e.target.value)}/>
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