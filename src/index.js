/* eslint-env browser */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './index.css';
import { GeneralProvider } from "./utils/context/GeneralContext";
import { ThemeProvider } from "@material-tailwind/react";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GeneralProvider>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </ThemeProvider>
    </GeneralProvider>
  </React.StrictMode>
);
