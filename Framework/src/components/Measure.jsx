import React from "react";
import Beat from "./Beat.jsx";

export default function Measure({settings}) {
  console.log(settings)
  const beats = [
    { key: 1, active: false },
    { key: 2, active: false },
    { key: 3, active: false },
    { key: 4, active: false },
  ]
  return (
    <div className="flex justify-center items-center">
      {beats.map(b => <Beat key={b.key} label={b.key} active={b.active}/>)}
    </div>
  )
};
