import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import ContextProvider from "./context/ContextProvider";
import Content from "./components/Content";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <App />
    <Content />
  </ContextProvider>
);
