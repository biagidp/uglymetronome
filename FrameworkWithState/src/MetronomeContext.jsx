import React, { createContext, useContext, useReducer, useState } from "react";

const BPM_MODS = {
  "whole": 1,
  "eighth": 2,
  "sixteenth": 4
}

const getDuration = (bpm, mark) => {
  return 60000/(bpm*BPM_MODS[mark])
}

const defaultSettings = {
  bpm: 60,
  mark: "whole",
  running: false,
  activeBeat: "1/4",
  beatDuration: getDuration(60, "whole")
}

const SettingsContext = createContext(null)
const DispatchContext = createContext(null)

function reducer(settings, action) {
  switch(action.type){
    case 'advance':{
      const newSettings = Object.create(settings)
      const [beat, maxBeat] = settings.activeBeat.split("/")
      const nextBeat = parseInt(beat) + 1 > parseInt(maxBeat) ? 1 : parseInt(beat) + 1
      newSettings.activeBeat = `${nextBeat}/${maxBeat}`
      return newSettings
    }
    case 'update': {
      const newSettings = {
        bpm: action.bpm || settings.bpm,
        mark: action.mark || settings.mark,
        running: action.running || settings.running,
        activeBeat: action.activeBeat || settings.activeBeat,
      }
      newSettings.beatDuration = getDuration(newSettings.bpm, newSettings.mark)
      
      return newSettings
    }
    case 'reset': {
      const newSettings = Object.create(settings)
      newSettings.running = false
      return newSettings
    }
    default: {
      throw Error("Unknown Action: " + action.type)
    }
  }
}

export function MetronomeProvider({children}) {
  const [settings, dispatch] = useReducer(reducer, defaultSettings)

  return (
    <SettingsContext.Provider value={settings}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </SettingsContext.Provider>
  )
}

export function useSettings(){
  return useContext(SettingsContext)
}

export function useDispatch(){
  return useContext(DispatchContext)
}