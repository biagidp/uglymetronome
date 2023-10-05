import "./style.css"
import React from "react";
import { StrictMode } from "react";
import {createRoot} from "react-dom/client"
import Measure from "./components/Measure.jsx";
import Form from "./components/Form.jsx";

const root = createRoot(document.getElementById("app"));
root.render(
  <StrictMode>
    <Measure/>
    <Form />
  </StrictMode>
);