import "./style.css"
import React from "react";
import { StrictMode } from "react";
import {createRoot} from "react-dom/client"
import UglyMetronome from "./components/UglyMetronome.jsx";

const root = createRoot(document.getElementById("app"));
root.render(
  <StrictMode>
    <UglyMetronome />
  </StrictMode>
);