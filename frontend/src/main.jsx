import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DashboardContext } from "./DashboardContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DashboardContext>
      <App />
    </DashboardContext>
  </React.StrictMode>
);
