import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Providercontext } from "./context/ProviderContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Providercontext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Providercontext>
  // </React.StrictMode>
);
