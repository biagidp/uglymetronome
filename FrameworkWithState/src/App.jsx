import "./style.css"
import React, { StrictMode } from "react";
import {createRoot} from "react-dom/client"
import UglyMetronome from "./components/UglyMetronome.jsx";
import { MetronomeProvider } from "./MetronomeContext.jsx"

const root = createRoot(document.getElementById("app"));
root.render(
  <StrictMode>
    <MetronomeProvider>
      <UglyMetronome />
    </MetronomeProvider>
  </StrictMode>
);