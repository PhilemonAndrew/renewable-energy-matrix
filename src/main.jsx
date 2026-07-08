// Import React
import React from "react";
import ReactDOM from "react-dom/client";

// Import the global CSS file
import "./index.css";

// Import the App component
import App from "./App";

// Render the App component inside the root div
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);