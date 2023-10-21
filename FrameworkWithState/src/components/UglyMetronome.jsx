import React from "react";
import Beat from "./Beat.jsx"
import Form from "./Form.jsx";
import Measure from "./Measure.jsx";

export default function UglyMetronome() {
  
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