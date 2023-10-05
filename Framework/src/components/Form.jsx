import React from 'react'

export default function Form() {
  return (
    <div>
      <div>
        <label for="bpm">BPM:</label>
        <input type="text" id="bpm" name="bpm" value="60"/>
      </div>
      <div>
        <fieldset>
          <legend>Mark:</legend>
          <div>
            <input type="radio" name="mark" id="1" value="1" checked />
            <label for="1">On the beat</label>
          </div>
          <div>
            <input type="radio" name="mark" id="1/8" value="1/8" />
            <label for="1/8">On the Eighths</label>
          </div>
          <div>
            <input type="radio" name="mark" id="1/16" value="1/16" />
            <label for="1/16">On the Sixteenths</label>
          </div>
        </fieldset>
      </div>
      <div>
        <button id="start-button">Start</button>
        <button id="stop-button">Stop</button>
      </div>
    </div>
  )
}