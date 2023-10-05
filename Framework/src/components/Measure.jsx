import React from "react";
import Beat from "./Beat.jsx";

export default function Measure() {
  return (
    <div class="flex justify-center items-center">
      <Beat label="1" />
      <Beat label="2" />
      <Beat label="3" />
      <Beat label="4" />
    </div>
  )
};
