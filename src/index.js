import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { SelectedMemoProvider } from "./hooks/selectedmemo-hook";
import { LoginProvider } from "./hooks/login-hooks";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SelectedMemoProvider>
      <LoginProvider>
        <App />
      </LoginProvider>
    </SelectedMemoProvider>
  </React.StrictMode>,
);
